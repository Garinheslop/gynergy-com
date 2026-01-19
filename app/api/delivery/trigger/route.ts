import { NextResponse } from "next/server"
import {
  getProductDelivery,
  getProductTags,
  ProductDelivery,
} from "@/lib/product-delivery"
import { ProductId } from "@/lib/stripe"

// GHL API configuration
const GHL_API_BASE =
  process.env.GHL_API_BASE_URL || "https://services.leadconnectorhq.com"
const GHL_API_KEY = process.env.GHL_API_KEY
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID

interface DeliveryRequest {
  email: string
  name?: string
  productId: ProductId
  orderId?: string
  sessionId?: string
}

/**
 * Trigger product delivery via GHL workflows
 *
 * This endpoint:
 * 1. Gets the delivery configuration for the product
 * 2. Applies appropriate tags to the GHL contact
 * 3. Triggers the product-specific workflow
 * 4. Returns delivery status
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DeliveryRequest
    const { email, name, productId, orderId, sessionId } = body

    // Validate required fields
    if (!email || !productId) {
      return NextResponse.json(
        { error: "Missing required fields: email, productId" },
        { status: 400 }
      )
    }

    // Get delivery configuration
    const delivery = getProductDelivery(productId)
    if (!delivery) {
      console.error(`No delivery config for product: ${productId}`)
      return NextResponse.json(
        { error: `No delivery configuration for product: ${productId}` },
        { status: 404 }
      )
    }

    // Get all tags to apply
    const tags = getProductTags(productId)

    // Sync to GHL and trigger workflow
    const ghlResult = await syncDeliveryToGHL({
      email,
      name,
      tags,
      delivery,
      orderId,
      sessionId,
    })

    // Log delivery trigger
    console.log("Product delivery triggered:", {
      email,
      productId,
      productName: delivery.productName,
      deliveryType: delivery.deliveryType,
      tagsApplied: tags.length,
      workflowTriggered: delivery.ghlWorkflowTrigger,
      ghlSuccess: !!ghlResult,
    })

    return NextResponse.json({
      success: true,
      productId,
      productName: delivery.productName,
      deliveryType: delivery.deliveryType,
      assetsCount: delivery.assets.length,
      workflowTriggered: delivery.ghlWorkflowTrigger,
      tagsApplied: tags,
    })
  } catch (error) {
    console.error("Delivery trigger error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Delivery trigger failed" },
      { status: 500 }
    )
  }
}

/**
 * Sync delivery info to GHL and trigger product workflow
 */
async function syncDeliveryToGHL({
  email,
  name,
  tags,
  delivery,
  orderId,
  sessionId,
}: {
  email: string
  name?: string
  tags: string[]
  delivery: ProductDelivery
  orderId?: string
  sessionId?: string
}) {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.warn("GHL integration not configured - delivery sync skipped")
    return null
  }

  try {
    // Parse name
    let firstName: string | undefined
    let lastName: string | undefined
    if (name) {
      const nameParts = name.trim().split(/\s+/)
      firstName = nameParts[0]
      lastName = nameParts.slice(1).join(" ") || undefined
    }

    // Build custom fields for GHL
    const customFields = [
      { key: "last_product_purchased", field_value: delivery.productId },
      { key: "last_product_name", field_value: delivery.productName },
      { key: "last_purchase_date", field_value: new Date().toISOString() },
      { key: "delivery_type", field_value: delivery.deliveryType },
    ]

    if (orderId) {
      customFields.push({ key: "stripe_order_id", field_value: orderId })
    }
    if (sessionId) {
      customFields.push({ key: "stripe_session_id", field_value: sessionId })
    }

    // Get download URLs if instant delivery
    const downloadUrls = delivery.assets
      .filter((a) => a.type === "pdf" && a.url && !a.url.includes("PENDING"))
      .map((a) => a.url)
      .join(", ")

    if (downloadUrls) {
      customFields.push({ key: "download_urls", field_value: downloadUrls })
    }

    // Add workflow trigger tag for GHL automation
    if (delivery.ghlWorkflowTrigger) {
      tags.push(`trigger:${delivery.ghlWorkflowTrigger}`)
    }

    // Upsert contact with tags and custom fields
    const contactResponse = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
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
        tags,
        source: "product-delivery",
        customFields,
      }),
    })

    if (!contactResponse.ok) {
      const errorText = await contactResponse.text()
      console.error("GHL contact upsert failed:", contactResponse.status, errorText)
      return null
    }

    const contactResult = await contactResponse.json()
    const contactId = contactResult.contact?.id

    console.log("GHL delivery sync successful:", {
      contactId,
      email,
      tagsApplied: tags.length,
      workflowTrigger: delivery.ghlWorkflowTrigger,
    })

    // If there's a workflow trigger, we can optionally trigger it directly
    // (GHL automations based on tags are usually preferred)
    // This is a backup in case tag-based triggers don't work
    if (delivery.ghlWorkflowTrigger && contactId) {
      await triggerGHLWorkflow(contactId, delivery.ghlWorkflowTrigger)
    }

    return contactResult
  } catch (error) {
    console.error("GHL delivery sync error:", error)
    return null
  }
}

/**
 * Directly trigger a GHL workflow (backup method)
 */
async function triggerGHLWorkflow(contactId: string, workflowName: string) {
  // Note: GHL workflow triggers via API require workflow ID
  // Most implementations use tag-based triggers instead
  // This is a placeholder for direct workflow triggering if needed

  console.log("Would trigger GHL workflow:", {
    contactId,
    workflowName,
    note: "Using tag-based triggers instead",
  })

  // To implement direct workflow triggering:
  // 1. Get workflow ID from GHL dashboard
  // 2. Use GHL workflow trigger endpoint
  // 3. POST to /contacts/{contactId}/workflow/{workflowId}

  return true
}

/**
 * GET endpoint to check delivery status for a product
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get("productId") as ProductId

  if (!productId) {
    return NextResponse.json({ error: "Missing productId" }, { status: 400 })
  }

  const delivery = getProductDelivery(productId)

  if (!delivery) {
    return NextResponse.json(
      { error: `No delivery config for: ${productId}` },
      { status: 404 }
    )
  }

  // Check for pending assets
  const pendingAssets = delivery.assets.filter(
    (a) => !a.url || a.url.includes("PENDING")
  )

  return NextResponse.json({
    productId,
    productName: delivery.productName,
    deliveryType: delivery.deliveryType,
    totalAssets: delivery.assets.length,
    readyAssets: delivery.assets.length - pendingAssets.length,
    pendingAssets: pendingAssets.map((a) => ({
      type: a.type,
      name: a.name,
      description: a.description,
    })),
    isFullyReady: pendingAssets.length === 0,
  })
}
