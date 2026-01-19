import { NextResponse } from "next/server"
import Stripe from "stripe"
import {
  stripe,
  PRODUCTS,
  ProductId,
  isSubscriptionProduct,
  getSubscriptionInterval,
} from "@/lib/stripe"

interface CheckoutItem {
  productId: ProductId
  quantity: number
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items } = body as { items: CheckoutItem[] }

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No items provided" },
        { status: 400 }
      )
    }

    // Check if any item is a subscription
    const hasSubscription = items.some((item) =>
      isSubscriptionProduct(item.productId)
    )

    // Validate: Can't mix subscription and one-time products
    if (hasSubscription && items.length > 1) {
      const hasOneTime = items.some(
        (item) => !isSubscriptionProduct(item.productId)
      )
      if (hasOneTime) {
        return NextResponse.json(
          {
            error:
              "Cannot mix subscription and one-time products in the same checkout",
          },
          { status: 400 }
        )
      }
    }

    // Build line items based on product type
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item) => {
        const product = PRODUCTS[item.productId]
        if (!product) {
          throw new Error(`Invalid product: ${item.productId}`)
        }

        const imageUrl = product.image
          ? product.image.startsWith("http")
            ? product.image
            : `${process.env.NEXT_PUBLIC_SITE_URL}${product.image}`
          : undefined

        // Subscription products need recurring price_data
        if (isSubscriptionProduct(item.productId)) {
          const interval = getSubscriptionInterval(item.productId)
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: product.name,
                description: product.description,
                images: imageUrl ? [imageUrl] : undefined,
              },
              unit_amount: product.price,
              recurring: {
                interval: interval || "month",
              },
            },
            quantity: item.quantity,
          }
        }

        // One-time products
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
              images: imageUrl ? [imageUrl] : undefined,
            },
            unit_amount: product.price,
          },
          quantity: item.quantity,
        }
      }
    )

    // Build session config
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: hasSubscription ? "subscription" : "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop`,
      billing_address_collection: "required",
      metadata: {
        items: JSON.stringify(items),
        type: hasSubscription ? "subscription" : "one-time",
      },
    }

    // Only add shipping for physical products (one-time, non-digital)
    if (!hasSubscription) {
      sessionConfig.shipping_address_collection = {
        allowed_countries: ["US", "CA", "MX"],
      }
    }

    const session = await stripe.checkout.sessions.create(sessionConfig)

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Checkout failed" },
      { status: 500 }
    )
  }
}
