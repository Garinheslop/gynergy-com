import { NextRequest, NextResponse } from "next/server"

// GoHighLevel API Configuration
const GHL_API_KEY = process.env.GHL_API_KEY
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID
const GHL_API_URL = "https://services.leadconnectorhq.com"

interface ContactPayload {
  email: string
  name?: string
  firstName?: string
  lastName?: string
  phone?: string
  tags?: string[]
  source?: string
  customFields?: Record<string, string>
}

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error("[GHL Contact] Missing API credentials")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    const body: ContactPayload = await request.json()

    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Parse name into first/last if provided as single field
    let firstName = body.firstName
    let lastName = body.lastName

    if (body.name && !firstName && !lastName) {
      const nameParts = body.name.trim().split(" ")
      firstName = nameParts[0]
      lastName = nameParts.slice(1).join(" ") || undefined
    }

    // Build GHL contact payload
    const ghlPayload = {
      email: body.email,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      phone: body.phone || undefined,
      tags: body.tags || ["gynergy-com", "website-lead"],
      source: body.source || "gynergy.com",
      locationId: GHL_LOCATION_ID,
      customFields: body.customFields || {},
    }

    // Create or update contact in GHL
    const response = await fetch(`${GHL_API_URL}/contacts/`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        "Version": "2021-07-28",
      },
      body: JSON.stringify(ghlPayload),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error("[GHL Contact] API Error:", response.status, errorData)

      // If contact exists, try to update instead
      if (response.status === 400 || response.status === 409) {
        // Search for existing contact
        const searchResponse = await fetch(
          `${GHL_API_URL}/contacts/search?locationId=${GHL_LOCATION_ID}&query=${encodeURIComponent(body.email)}`,
          {
            headers: {
              "Authorization": `Bearer ${GHL_API_KEY}`,
              "Version": "2021-07-28",
            },
          }
        )

        if (searchResponse.ok) {
          const searchData = await searchResponse.json()
          if (searchData.contacts && searchData.contacts.length > 0) {
            const existingContact = searchData.contacts[0]

            // Update existing contact with new tags
            const updateResponse = await fetch(
              `${GHL_API_URL}/contacts/${existingContact.id}`,
              {
                method: "PUT",
                headers: {
                  "Authorization": `Bearer ${GHL_API_KEY}`,
                  "Content-Type": "application/json",
                  "Version": "2021-07-28",
                },
                body: JSON.stringify({
                  tags: [...new Set([...(existingContact.tags || []), ...(body.tags || [])])],
                }),
              }
            )

            if (updateResponse.ok) {
              return NextResponse.json({
                success: true,
                contactId: existingContact.id,
                updated: true,
              })
            }
          }
        }

        return NextResponse.json(
          { error: "Failed to create or update contact" },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { error: "Failed to create contact" },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      contactId: data.contact?.id,
    })

  } catch (error) {
    console.error("[GHL Contact] Error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
