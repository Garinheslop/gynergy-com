import { NextResponse } from "next/server"
import { headers } from "next/headers"
import Stripe from "stripe"
import { stripe } from "@/lib/stripe"

// GHL API configuration
const GHL_API_BASE = process.env.GHL_API_BASE_URL || "https://services.leadconnectorhq.com"
const GHL_API_KEY = process.env.GHL_API_KEY
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID

/**
 * Sync customer data with GoHighLevel CRM
 * Creates or updates contact and applies tags based on event type
 */
async function syncToGHL({
  email,
  name,
  phone,
  tags,
  customFields,
}: {
  email: string
  name?: string
  phone?: string
  tags: string[]
  customFields?: Record<string, string | number>
}) {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.warn("GHL integration not configured - skipping sync")
    return null
  }

  try {
    // Parse name into first/last
    let firstName: string | undefined
    let lastName: string | undefined
    if (name) {
      const nameParts = name.trim().split(/\s+/)
      firstName = nameParts[0]
      lastName = nameParts.slice(1).join(" ") || undefined
    }

    // Build custom fields array for GHL API
    const customFieldsArray = customFields
      ? Object.entries(customFields).map(([key, value]) => ({
          key,
          field_value: String(value),
        }))
      : []

    const response = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        firstName,
        lastName,
        phone,
        tags,
        source: "stripe-webhook",
        customFields: customFieldsArray,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("GHL sync failed:", response.status, errorText)
      return null
    }

    const result = await response.json()
    console.log("GHL sync successful:", {
      contactId: result.contact?.id,
      email,
      tags,
    })
    return result
  } catch (error) {
    console.error("GHL sync error:", error)
    return null
  }
}

/**
 * Get customer details from Stripe
 */
async function getStripeCustomerDetails(
  customerId: string | Stripe.Customer | Stripe.DeletedCustomer | null
): Promise<{ email: string | null; name: string | null; phone: string | null }> {
  if (!customerId) return { email: null, name: null, phone: null }

  const id = typeof customerId === "string" ? customerId : customerId.id

  try {
    const customer = await stripe.customers.retrieve(id)
    if (customer.deleted) {
      return { email: null, name: null, phone: null }
    }
    return {
      email: customer.email ?? null,
      name: customer.name ?? null,
      phone: customer.phone ?? null,
    }
  } catch (error) {
    console.error("Failed to retrieve Stripe customer:", error)
    return { email: null, name: null, phone: null }
  }
}

// Webhook secret for verifying signatures
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")

  if (!signature) {
    console.error("Stripe webhook: Missing signature")
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error(`Stripe webhook signature verification failed: ${message}`)
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${message}` },
      { status: 400 }
    )
  }

  console.log(`Stripe webhook received: ${event.type}`)

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutCompleted(session)
        break
      }

      case "customer.subscription.created": {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCreated(subscription)
        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscription)
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscription)
        break
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentFailed(invoice)
        break
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice
        await handlePaymentSucceeded(invoice)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error(`Stripe webhook handler error: ${error}`)
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    )
  }
}

// Handle completed checkout session
async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  console.log("Checkout completed:", {
    sessionId: session.id,
    customerId: session.customer,
    customerEmail: session.customer_details?.email,
    mode: session.mode,
    paymentStatus: session.payment_status,
    metadata: session.metadata,
  })

  const metadata = session.metadata || {}
  const type = metadata.type || "one-time"
  const email = session.customer_details?.email
  const name = session.customer_details?.name
  const phone = session.customer_details?.phone

  if (!email) {
    console.error("No email found in checkout session")
    return
  }

  // Calculate total amount
  const amountTotal = session.amount_total ? session.amount_total / 100 : 0

  if (type === "subscription") {
    // Subscription checkout - customer created/updated handled by subscription events
    console.log("Subscription checkout completed - awaiting subscription events")

    // Still sync to GHL with subscription start tags
    await syncToGHL({
      email,
      name: name || undefined,
      phone: phone || undefined,
      tags: [
        "stripe-customer",
        "subscription-started",
        "gynergy-com",
        metadata.productSlug ? `product-${metadata.productSlug}` : "subscription",
      ],
      customFields: {
        stripe_customer_id: typeof session.customer === "string" ? session.customer : "",
        checkout_session_id: session.id,
        purchase_amount: amountTotal,
        purchase_date: new Date().toISOString(),
        purchase_type: "subscription",
        product_name: metadata.productName || "GYNERGY.AI Subscription",
      },
    })
  } else {
    // One-time purchase - process order
    console.log("One-time purchase completed - processing order")

    // Determine product-specific tags
    const productTags: string[] = ["stripe-customer", "purchase-completed", "gynergy-com"]

    // Add product-specific tags based on metadata
    if (metadata.productSlug) {
      productTags.push(`product-${metadata.productSlug}`)

      // Add high-value tags for premium products
      if (metadata.productSlug.includes("45-day") || metadata.productSlug.includes("awakening")) {
        productTags.push("45-day-awakening-purchase", "high-value-customer")
      }
      if (metadata.productSlug.includes("date-zero")) {
        productTags.push("date-zero-purchase")
      }
      if (metadata.productSlug.includes("retreat") || metadata.productSlug.includes("bundle")) {
        productTags.push("service-retreat-purchase", "high-value-customer")
      }
    }

    // Sync to GHL
    await syncToGHL({
      email,
      name: name || undefined,
      phone: phone || undefined,
      tags: productTags,
      customFields: {
        stripe_customer_id: typeof session.customer === "string" ? session.customer : "",
        checkout_session_id: session.id,
        purchase_amount: amountTotal,
        purchase_date: new Date().toISOString(),
        purchase_type: "one-time",
        product_name: metadata.productName || "GYNERGY Product",
        product_slug: metadata.productSlug || "",
      },
    })
  }
}

// Handle new subscription created
async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  // Use type assertion with unknown to safely access properties
  const sub = subscription as unknown as {
    id: string
    customer: string | Stripe.Customer | Stripe.DeletedCustomer
    status: string
    current_period_end?: number
    items: { data: Array<{ price: { id: string; product: string | Stripe.Product; recurring?: { interval: string } } }> }
    metadata?: Record<string, string>
  }

  console.log("Subscription created:", {
    subscriptionId: sub.id,
    customerId: sub.customer,
    status: sub.status,
    currentPeriodEnd: sub.current_period_end
      ? new Date(sub.current_period_end * 1000)
      : undefined,
    items: sub.items.data.map((item) => ({
      priceId: item.price.id,
      productId: item.price.product,
      interval: item.price.recurring?.interval,
    })),
  })

  // Get customer details from Stripe
  const customer = await getStripeCustomerDetails(sub.customer)

  if (!customer.email) {
    console.error("No email found for subscription customer")
    return
  }

  // Determine subscription tier from price/product
  const priceId = sub.items.data[0]?.price.id || ""
  const interval = sub.items.data[0]?.price.recurring?.interval || "month"

  // Map price to tier (these would match your actual Stripe price IDs)
  let tierTag = "gynergy-ai-subscriber"
  if (priceId.includes("essential") || priceId.includes("price_essential")) {
    tierTag = "gynergy-ai-essential"
  } else if (priceId.includes("accelerator") || priceId.includes("price_accelerator")) {
    tierTag = "gynergy-ai-accelerator"
  } else if (priceId.includes("mastery") || priceId.includes("price_mastery")) {
    tierTag = "gynergy-ai-mastery"
  }

  // Sync to GHL with subscription tags
  await syncToGHL({
    email: customer.email,
    name: customer.name || undefined,
    phone: customer.phone || undefined,
    tags: [
      "stripe-customer",
      "active-subscriber",
      "gynergy-ai-member",
      tierTag,
      `billing-${interval}ly`,
      "gynergy-com",
    ],
    customFields: {
      stripe_customer_id: typeof sub.customer === "string" ? sub.customer : sub.customer.id,
      stripe_subscription_id: sub.id,
      subscription_status: sub.status,
      subscription_tier: tierTag,
      subscription_start_date: new Date().toISOString(),
      subscription_period_end: sub.current_period_end
        ? new Date(sub.current_period_end * 1000).toISOString()
        : "",
    },
  })
}

// Handle subscription updates (plan changes, etc.)
async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const sub = subscription as unknown as {
    id: string
    customer: string | Stripe.Customer | Stripe.DeletedCustomer
    status: string
    cancel_at_period_end?: boolean
    cancel_at?: number
    items: { data: Array<{ price: { id: string; product: string | Stripe.Product; recurring?: { interval: string } } }> }
  }

  console.log("Subscription updated:", {
    subscriptionId: sub.id,
    status: sub.status,
    cancelAtPeriodEnd: sub.cancel_at_period_end,
  })

  // Get customer details from Stripe
  const customer = await getStripeCustomerDetails(sub.customer)

  if (!customer.email) {
    console.error("No email found for subscription update customer")
    return
  }

  // Build tags based on subscription state
  const tags = ["stripe-customer", "gynergy-com"]

  if (sub.cancel_at_period_end) {
    // Customer has scheduled cancellation
    tags.push("cancellation-scheduled", "at-risk-subscriber", "save-opportunity")
  } else if (sub.status === "active") {
    tags.push("active-subscriber")
  } else if (sub.status === "past_due") {
    tags.push("past-due-subscriber", "payment-warning")
  } else if (sub.status === "unpaid") {
    tags.push("unpaid-subscriber", "payment-at-risk")
  }

  // Determine subscription tier from price
  const priceId = sub.items.data[0]?.price.id || ""
  let tierTag = "gynergy-ai-subscriber"
  if (priceId.includes("essential")) tierTag = "gynergy-ai-essential"
  else if (priceId.includes("accelerator")) tierTag = "gynergy-ai-accelerator"
  else if (priceId.includes("mastery")) tierTag = "gynergy-ai-mastery"
  tags.push(tierTag)

  // Sync to GHL with updated status
  await syncToGHL({
    email: customer.email,
    name: customer.name || undefined,
    phone: customer.phone || undefined,
    tags,
    customFields: {
      stripe_customer_id: typeof sub.customer === "string" ? sub.customer : sub.customer.id,
      stripe_subscription_id: sub.id,
      subscription_status: sub.status,
      subscription_tier: tierTag,
      cancel_at_period_end: sub.cancel_at_period_end ? "true" : "false",
      scheduled_cancel_date: sub.cancel_at
        ? new Date(sub.cancel_at * 1000).toISOString()
        : "",
      last_updated: new Date().toISOString(),
    },
  })
}

// Handle subscription cancellation
async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const sub = subscription as unknown as {
    id: string
    customer: string | Stripe.Customer | Stripe.DeletedCustomer
    ended_at?: number
    canceled_at?: number
    cancellation_details?: {
      reason?: string
      comment?: string
    }
  }

  console.log("Subscription deleted:", {
    subscriptionId: sub.id,
    customerId: sub.customer,
    endedAt: sub.ended_at ? new Date(sub.ended_at * 1000) : null,
  })

  // Get customer details from Stripe
  const customer = await getStripeCustomerDetails(sub.customer)

  if (!customer.email) {
    console.error("No email found for churned customer")
    return
  }

  // Sync to GHL with churn tags - triggers win-back workflow
  await syncToGHL({
    email: customer.email,
    name: customer.name || undefined,
    phone: customer.phone || undefined,
    tags: [
      "stripe-customer",
      "subscription-canceled",
      "churned-subscriber",
      "win-back-candidate",
      "gynergy-com",
    ],
    customFields: {
      stripe_customer_id: typeof sub.customer === "string" ? sub.customer : sub.customer.id,
      stripe_subscription_id: sub.id,
      subscription_status: "canceled",
      subscription_end_date: sub.ended_at
        ? new Date(sub.ended_at * 1000).toISOString()
        : new Date().toISOString(),
      cancellation_reason: sub.cancellation_details?.reason || "not_specified",
      cancellation_comment: sub.cancellation_details?.comment || "",
    },
  })
}

// Handle failed payment
async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const inv = invoice as unknown as {
    id: string
    customer: string | Stripe.Customer | Stripe.DeletedCustomer | null
    subscription?: string | Stripe.Subscription | null
    amount_due: number
    attempt_count?: number
    next_payment_attempt?: number
  }

  console.log("Payment failed:", {
    invoiceId: inv.id,
    customerId: inv.customer,
    subscriptionId: inv.subscription,
    amountDue: inv.amount_due,
    attemptCount: inv.attempt_count,
  })

  // Get customer details from Stripe
  const customer = await getStripeCustomerDetails(inv.customer)

  if (!customer.email) {
    console.error("No email found for failed payment customer")
    return
  }

  const amountDue = inv.amount_due ? inv.amount_due / 100 : 0
  const attemptCount = inv.attempt_count || 1

  // Sync to GHL with payment failure tags - triggers dunning workflow
  await syncToGHL({
    email: customer.email,
    name: customer.name || undefined,
    phone: customer.phone || undefined,
    tags: [
      "stripe-customer",
      "payment-failed",
      `payment-attempt-${attemptCount}`,
      attemptCount >= 3 ? "payment-at-risk" : "payment-warning",
      "gynergy-com",
    ],
    customFields: {
      stripe_customer_id: typeof inv.customer === "string" ? inv.customer : "",
      stripe_invoice_id: inv.id,
      failed_payment_amount: amountDue,
      payment_attempt_count: attemptCount,
      payment_failure_date: new Date().toISOString(),
      next_retry_date: inv.next_payment_attempt
        ? new Date(inv.next_payment_attempt * 1000).toISOString()
        : "",
    },
  })
}

// Handle successful payment
async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  const inv = invoice as unknown as {
    id: string
    customer: string | Stripe.Customer | Stripe.DeletedCustomer | null
    subscription?: string | Stripe.Subscription | null
    amount_paid: number
    billing_reason?: string
  }

  console.log("Payment succeeded:", {
    invoiceId: inv.id,
    customerId: inv.customer,
    subscriptionId: inv.subscription,
    amountPaid: inv.amount_paid,
  })

  // Get customer details from Stripe
  const customer = await getStripeCustomerDetails(inv.customer)

  if (!customer.email) {
    console.error("No email found for payment success customer")
    return
  }

  const amountPaid = inv.amount_paid ? inv.amount_paid / 100 : 0
  const isRenewal = inv.billing_reason === "subscription_cycle"
  const isRecovery = inv.billing_reason === "subscription_update" // Could be payment recovery

  // Build tags based on payment type
  const tags = ["stripe-customer", "payment-successful", "active-subscriber", "gynergy-com"]

  if (isRenewal) {
    tags.push("subscription-renewed")
  }
  if (isRecovery) {
    tags.push("payment-recovered")
    // Remove payment-failed tags by adding recovery tag (GHL workflow should handle)
  }

  // Sync to GHL - clears payment failure state, updates renewal info
  await syncToGHL({
    email: customer.email,
    name: customer.name || undefined,
    phone: customer.phone || undefined,
    tags,
    customFields: {
      stripe_customer_id: typeof inv.customer === "string" ? inv.customer : "",
      stripe_invoice_id: inv.id,
      last_payment_amount: amountPaid,
      last_payment_date: new Date().toISOString(),
      payment_status: "successful",
      billing_reason: inv.billing_reason || "manual",
    },
  })
}
