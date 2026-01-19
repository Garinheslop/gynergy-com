/**
 * Digital Product Delivery Configuration
 *
 * Maps products to their deliverables and GHL workflow triggers.
 * This file is the single source of truth for what customers receive after purchase.
 */

import { ProductId } from "./stripe"

// Types for delivery configuration
export interface DeliveryAsset {
  type: "pdf" | "video" | "audio" | "email-sequence" | "community-access" | "course"
  name: string
  url?: string // Download URL or embed URL
  ghlTag?: string // Tag to apply for GHL automation
  description?: string
}

export interface ProductDelivery {
  productId: ProductId
  productName: string
  deliveryType: "instant" | "drip" | "access"
  ghlWorkflowTrigger?: string // GHL workflow to trigger
  welcomeEmailTemplateId?: string // GHL email template ID
  assets: DeliveryAsset[]
  accessInstructions?: string
}

/**
 * Complete delivery configuration for all digital products
 */
export const PRODUCT_DELIVERY: Record<ProductId, ProductDelivery> = {
  // ============================================
  // TIER 1: MICRO PRODUCTS ($17-$27)
  // ============================================

  "5-pillar-quick-start": {
    productId: "5-pillar-quick-start",
    productName: "5-Pillar Quick Start Guide",
    deliveryType: "instant",
    ghlWorkflowTrigger: "quick-start-purchase",
    assets: [
      {
        type: "pdf",
        name: "5-Pillar Quick Start Guide",
        url: "/downloads/5-pillar-quick-start-guide.pdf",
        ghlTag: "owns-quick-start-guide",
        description: "20-page action blueprint for immediate transformation",
      },
    ],
    accessInstructions:
      "Your guide is attached to this email. Download it now and set aside 45-60 minutes for your first read-through.",
  },

  "gratitude-framework-guide": {
    productId: "gratitude-framework-guide",
    productName: "Gratitude Framework Guide",
    deliveryType: "instant",
    ghlWorkflowTrigger: "gratitude-framework-purchase",
    assets: [
      {
        type: "pdf",
        name: "The G.I.V.E. Framework Guide",
        url: "/downloads/gratitude-framework-guide.pdf",
        ghlTag: "owns-gratitude-framework",
        description: "30-page deep dive into gratitude as a transformation tool",
      },
      {
        type: "pdf",
        name: "30-Day Gratitude Prompts",
        url: "/downloads/30-day-gratitude-prompts.pdf",
        ghlTag: "owns-gratitude-prompts",
        description: "Daily journal prompts for 30 days",
      },
    ],
    accessInstructions:
      "Both guides are attached. Start with the G.I.V.E. Framework Guide, then use the daily prompts starting tomorrow.",
  },

  "morning-mastery-routine": {
    productId: "morning-mastery-routine",
    productName: "Morning Mastery Routine",
    deliveryType: "drip",
    ghlWorkflowTrigger: "morning-mastery-purchase",
    assets: [
      {
        type: "email-sequence",
        name: "7-Day Morning Mastery Course",
        ghlTag: "enrolled-morning-mastery",
        description: "Daily emails with action steps",
      },
      {
        type: "pdf",
        name: "Morning Mastery Checklist",
        url: "/downloads/morning-mastery-checklist.pdf",
        ghlTag: "owns-morning-checklist",
        description: "Printable daily checklist",
      },
      {
        type: "audio",
        name: "Morning Meditation (10 min)",
        url: "/downloads/morning-meditation.mp3",
        ghlTag: "owns-morning-meditation",
        description: "Guided morning meditation audio",
      },
    ],
    accessInstructions:
      "Day 1 starts tomorrow! Check your inbox at 6 AM for your first lesson. Your checklist and meditation are attached to get started today.",
  },

  "relationship-reset-workbook": {
    productId: "relationship-reset-workbook",
    productName: "Relationship Reset Workbook",
    deliveryType: "instant",
    ghlWorkflowTrigger: "relationship-reset-purchase",
    assets: [
      {
        type: "pdf",
        name: "Relationship Reset Workbook",
        url: "/downloads/relationship-reset-workbook.pdf",
        ghlTag: "owns-relationship-reset",
        description: "30-page workbook with exercises",
      },
    ],
    accessInstructions:
      "Your workbook is attached. Block 2 hours for the complete experience, or work through one section per day.",
  },

  "wealth-mindset-masterclass": {
    productId: "wealth-mindset-masterclass",
    productName: "Wealth Mindset Masterclass",
    deliveryType: "instant",
    ghlWorkflowTrigger: "wealth-mindset-purchase",
    assets: [
      {
        type: "video",
        name: "Wealth Mindset Masterclass (90 min)",
        url: "VIMEO_ID_PENDING", // Garin needs to record
        ghlTag: "owns-wealth-masterclass",
        description: "Complete video masterclass on wealth psychology",
      },
      {
        type: "pdf",
        name: "Wealth Mindset Workbook",
        url: "/downloads/wealth-mindset-workbook.pdf",
        ghlTag: "owns-wealth-workbook",
        description: "Companion workbook with exercises",
      },
    ],
    accessInstructions:
      "Watch the video first (90 min), then complete the workbook exercises. This combination will transform your relationship with money.",
  },

  // ============================================
  // TIER 2: MINI PRODUCTS ($47-$97)
  // ============================================

  "7-day-transformation-challenge": {
    productId: "7-day-transformation-challenge",
    productName: "7-Day Transformation Challenge",
    deliveryType: "drip",
    ghlWorkflowTrigger: "7day-challenge-purchase",
    assets: [
      {
        type: "email-sequence",
        name: "7-Day Challenge Emails",
        ghlTag: "enrolled-7day-challenge",
        description: "Daily emails with video links and actions",
      },
      {
        type: "community-access",
        name: "Private Challenge Community",
        url: "COMMUNITY_LINK_PENDING",
        ghlTag: "challenge-community-access",
        description: "Access to private challenge community",
      },
      {
        type: "pdf",
        name: "Challenge Workbook Bundle",
        url: "/downloads/7day-challenge-workbook.pdf",
        ghlTag: "owns-challenge-workbook",
        description: "All 7 daily worksheets in one PDF",
      },
    ],
    accessInstructions:
      "Day 0 (Welcome) starts NOW! Check your email for immediate access to the community and your prep instructions. Day 1 starts tomorrow morning.",
  },

  "health-pillar-deep-dive": {
    productId: "health-pillar-deep-dive",
    productName: "Health Pillar Deep Dive",
    deliveryType: "instant",
    ghlWorkflowTrigger: "health-course-purchase",
    assets: [
      {
        type: "course",
        name: "Health Pillar Course (4 modules)",
        url: "COURSE_LINK_PENDING", // Garin needs to record
        ghlTag: "enrolled-health-course",
        description: "4 video modules + workbook",
      },
      {
        type: "pdf",
        name: "Health Pillar Workbook",
        url: "/downloads/health-pillar-workbook.pdf",
        ghlTag: "owns-health-workbook",
        description: "Companion workbook for all 4 modules",
      },
    ],
    accessInstructions:
      "Your course is ready! Watch Module 1 this week and complete the workbook exercises before moving to Module 2.",
  },

  "mindset-mastery-program": {
    productId: "mindset-mastery-program",
    productName: "Mindset Mastery Program",
    deliveryType: "instant",
    ghlWorkflowTrigger: "mindset-course-purchase",
    assets: [
      {
        type: "course",
        name: "Mindset Pillar Course (4 modules)",
        url: "COURSE_LINK_PENDING", // Garin needs to record
        ghlTag: "enrolled-mindset-course",
        description: "4 video modules + workbook",
      },
      {
        type: "pdf",
        name: "Mindset Pillar Workbook",
        url: "/downloads/mindset-pillar-workbook.pdf",
        ghlTag: "owns-mindset-workbook",
        description: "Companion workbook for all 4 modules",
      },
    ],
    accessInstructions:
      "Your course is ready! Watch Module 1 this week and complete the workbook exercises before moving to Module 2.",
  },

  // ============================================
  // TIER 3: PREMIUM PRODUCTS ($197-$297)
  // ============================================

  "date-zero-journal": {
    productId: "date-zero-journal",
    productName: "Date Zero Journal",
    deliveryType: "instant",
    ghlWorkflowTrigger: "date-zero-journal-purchase",
    assets: [
      {
        type: "pdf",
        name: "Date Zero Journal (Digital)",
        url: "/downloads/date-zero-journal-digital.pdf",
        ghlTag: "owns-date-zero-journal",
        description: "Complete digital version of the Date Zero journal",
      },
      {
        type: "email-sequence",
        name: "45-Day Guidance Emails",
        ghlTag: "enrolled-date-zero-guidance",
        description: "Daily inspiration emails for your journey",
      },
    ],
    accessInstructions:
      "Your digital journal is attached. Physical journal ships separately (2-5 business days). Daily guidance emails start tomorrow.",
  },

  "assessment-coaching-call": {
    productId: "assessment-coaching-call",
    productName: "5-Pillar Assessment + Strategy Call",
    deliveryType: "access",
    ghlWorkflowTrigger: "assessment-call-purchase",
    assets: [
      {
        type: "pdf",
        name: "Deep Assessment Report",
        url: "/downloads/deep-assessment-template.pdf",
        ghlTag: "purchased-assessment-call",
        description: "Comprehensive 5-pillar assessment template",
      },
    ],
    accessInstructions:
      "Complete the deep assessment (attached) BEFORE your call. Click below to schedule your 45-minute strategy session with Garin.",
  },

  "transformation-toolkit": {
    productId: "transformation-toolkit",
    productName: "Complete Transformation Toolkit",
    deliveryType: "instant",
    ghlWorkflowTrigger: "toolkit-bundle-purchase",
    assets: [
      {
        type: "pdf",
        name: "5-Pillar Quick Start Guide",
        url: "/downloads/5-pillar-quick-start-guide.pdf",
        ghlTag: "owns-quick-start-guide",
      },
      {
        type: "pdf",
        name: "The G.I.V.E. Framework Guide",
        url: "/downloads/gratitude-framework-guide.pdf",
        ghlTag: "owns-gratitude-framework",
      },
      {
        type: "pdf",
        name: "Relationship Reset Workbook",
        url: "/downloads/relationship-reset-workbook.pdf",
        ghlTag: "owns-relationship-reset",
      },
      {
        type: "pdf",
        name: "Wealth Mindset Workbook",
        url: "/downloads/wealth-mindset-workbook.pdf",
        ghlTag: "owns-wealth-workbook",
      },
      {
        type: "email-sequence",
        name: "Morning Mastery 7-Day Course",
        ghlTag: "enrolled-morning-mastery",
      },
      {
        type: "video",
        name: "Wealth Mindset Masterclass",
        url: "VIMEO_ID_PENDING",
        ghlTag: "owns-wealth-masterclass",
      },
    ],
    accessInstructions:
      "You now have access to our COMPLETE digital toolkit! All PDFs are attached. Video course access and email sequences begin automatically. Start with the Quick Start Guide.",
  },

  // ============================================
  // FLAGSHIP PROGRAMS
  // ============================================

  "45-day-awakening": {
    productId: "45-day-awakening",
    productName: "The 45 Day Awakening",
    deliveryType: "drip",
    ghlWorkflowTrigger: "45day-awakening-purchase",
    assets: [
      {
        type: "course",
        name: "45 Day Awakening Program",
        url: "PROGRAM_LINK_PENDING",
        ghlTag: "enrolled-45day-awakening",
        description: "Full 45-day transformation program",
      },
      {
        type: "community-access",
        name: "Private Community",
        url: "COMMUNITY_LINK_PENDING",
        ghlTag: "45day-community-access",
        description: "Access to private transformation community",
      },
      {
        type: "pdf",
        name: "Date Zero Journal (Digital)",
        url: "/downloads/date-zero-journal-digital.pdf",
        ghlTag: "owns-date-zero-journal",
        description: "Included digital journal",
      },
      {
        type: "email-sequence",
        name: "45-Day Daily Guidance",
        ghlTag: "enrolled-45day-guidance",
        description: "Daily emails throughout your journey",
      },
    ],
    accessInstructions:
      "Welcome to The 45 Day Awakening! Your journey begins NOW. Access the community immediately, your Date Zero journal is attached, and Day 1 content arrives tomorrow morning.",
  },

  "awakening-retreat-bundle": {
    productId: "awakening-retreat-bundle",
    productName: "45 Day Awakening + Service Retreat Bundle",
    deliveryType: "drip",
    ghlWorkflowTrigger: "awakening-bundle-purchase",
    assets: [
      // All 45 Day Awakening assets
      {
        type: "course",
        name: "45 Day Awakening Program",
        url: "PROGRAM_LINK_PENDING",
        ghlTag: "enrolled-45day-awakening",
      },
      {
        type: "community-access",
        name: "Private Community",
        url: "COMMUNITY_LINK_PENDING",
        ghlTag: "45day-community-access",
      },
      {
        type: "pdf",
        name: "Date Zero Journal (Digital)",
        url: "/downloads/date-zero-journal-digital.pdf",
        ghlTag: "owns-date-zero-journal",
      },
      {
        type: "email-sequence",
        name: "45-Day Daily Guidance",
        ghlTag: "enrolled-45day-guidance",
      },
      // Plus Retreat assets
      {
        type: "pdf",
        name: "Retreat Prep Guide",
        url: "/downloads/retreat-prep-guide.pdf",
        ghlTag: "retreat-registered",
      },
      {
        type: "email-sequence",
        name: "Pre-Retreat Preparation",
        ghlTag: "retreat-prep-sequence",
      },
    ],
    accessInstructions:
      "You've unlocked the COMPLETE transformation package! Your 45 Day Awakening starts immediately. The Ensenada Service Retreat is the perfect culmination of your journey.",
  },

  // ============================================
  // AOE BROTHERHOOD (Men's Community)
  // ============================================

  "aoe-brotherhood": {
    productId: "aoe-brotherhood",
    productName: "AOE Brotherhood",
    deliveryType: "access",
    ghlWorkflowTrigger: "aoe-brotherhood-signup",
    assets: [
      {
        type: "community-access",
        name: "AOE Brotherhood Community",
        url: "COMMUNITY_LINK_PENDING",
        ghlTag: "active-aoe-brotherhood",
        description: "Access to private brotherhood community",
      },
      {
        type: "email-sequence",
        name: "Brotherhood Onboarding",
        ghlTag: "aoe-onboarding",
        description: "Welcome sequence with community orientation",
      },
    ],
    accessInstructions:
      "Welcome to the AOE Brotherhood! Your first weekly call is this week. Check your email for the community access link and calendar invite.",
  },

  // ============================================
  // ARIA MASTERY COURSE
  // ============================================

  "aria-mastery-course": {
    productId: "aria-mastery-course",
    productName: "ARIA Mastery Course",
    deliveryType: "instant",
    ghlWorkflowTrigger: "aria-mastery-purchase",
    assets: [
      {
        type: "course",
        name: "ARIA Mastery Video Course",
        url: "COURSE_LINK_PENDING",
        ghlTag: "enrolled-aria-mastery",
        description: "Learn to maximize your GYNERGY.AI experience",
      },
      {
        type: "pdf",
        name: "Power Prompts Library",
        url: "/downloads/aria-power-prompts.pdf",
        ghlTag: "owns-aria-prompts",
        description: "Collection of high-impact prompts for ARIA",
      },
      {
        type: "email-sequence",
        name: "Monthly ARIA Tips",
        ghlTag: "subscribed-aria-tips",
        description: "Ongoing tips to improve your ARIA usage",
      },
    ],
    accessInstructions:
      "Your ARIA Mastery Course is ready! Start with the video modules and keep the Power Prompts PDF handy for your conversations with ARIA.",
  },

  // ============================================
  // SUBSCRIPTION PRODUCTS
  // ============================================

  "gynergy-ai-essential": {
    productId: "gynergy-ai-essential",
    productName: "GYNERGY.AI Essential",
    deliveryType: "access",
    ghlWorkflowTrigger: "gynergy-ai-essential-signup",
    assets: [
      {
        type: "community-access",
        name: "ARIA AI Coach Access",
        url: "https://app.gynergy.com/aria",
        ghlTag: "active-gynergy-ai-essential",
        description: "24/7 access to ARIA AI coaching",
      },
      {
        type: "community-access",
        name: "Member Community",
        url: "https://app.gynergy.com/community",
        ghlTag: "gynergy-ai-community",
        description: "Access to member community",
      },
    ],
    accessInstructions:
      "Welcome to GYNERGY.AI! Click below to access ARIA and start your first conversation. Your transformation begins with a single question.",
  },

  "gynergy-ai-accelerator": {
    productId: "gynergy-ai-accelerator",
    productName: "GYNERGY.AI Accelerator",
    deliveryType: "access",
    ghlWorkflowTrigger: "gynergy-ai-accelerator-signup",
    assets: [
      {
        type: "community-access",
        name: "ARIA AI Coach Access",
        url: "https://app.gynergy.com/aria",
        ghlTag: "active-gynergy-ai-accelerator",
        description: "24/7 access to ARIA AI coaching",
      },
      {
        type: "community-access",
        name: "Member Community + Weekly Calls",
        url: "https://app.gynergy.com/community",
        ghlTag: "gynergy-ai-community",
        description: "Community access plus weekly deep-dive calls",
      },
      {
        type: "email-sequence",
        name: "Accelerator Onboarding",
        ghlTag: "accelerator-onboarding",
        description: "5-day onboarding sequence",
      },
    ],
    accessInstructions:
      "Welcome to GYNERGY.AI Accelerator! You have access to everything in Essential PLUS weekly deep-dive calls. Check your calendar invite for your first call.",
  },

  "gynergy-ai-mastery": {
    productId: "gynergy-ai-mastery",
    productName: "GYNERGY.AI Mastery",
    deliveryType: "access",
    ghlWorkflowTrigger: "gynergy-ai-mastery-signup",
    assets: [
      {
        type: "community-access",
        name: "ARIA AI Coach Access (Priority)",
        url: "https://app.gynergy.com/aria",
        ghlTag: "active-gynergy-ai-mastery",
        description: "Priority access to ARIA AI coaching",
      },
      {
        type: "community-access",
        name: "Full Platform Access",
        url: "https://app.gynergy.com",
        ghlTag: "gynergy-ai-mastery-member",
        description: "Complete platform access including exclusive content",
      },
      {
        type: "email-sequence",
        name: "White-Glove Onboarding",
        ghlTag: "mastery-onboarding",
        description: "Personalized onboarding sequence",
      },
    ],
    accessInstructions:
      "Welcome to GYNERGY.AI Mastery - our most exclusive tier! You'll receive a personal onboarding call within 48 hours. In the meantime, explore the platform at your own pace.",
  },
}

/**
 * Get delivery configuration for a product
 */
export function getProductDelivery(productId: ProductId): ProductDelivery | null {
  return PRODUCT_DELIVERY[productId] || null
}

/**
 * Get all GHL tags that should be applied for a product purchase
 */
export function getProductTags(productId: ProductId): string[] {
  const delivery = PRODUCT_DELIVERY[productId]
  if (!delivery) return []

  const tags: string[] = [
    `purchased-${productId}`,
    "gynergy-customer",
  ]

  // Add asset-specific tags
  delivery.assets.forEach((asset) => {
    if (asset.ghlTag) {
      tags.push(asset.ghlTag)
    }
  })

  return tags
}

/**
 * Get download URLs for instant delivery products
 */
export function getInstantDeliveryUrls(productId: ProductId): string[] {
  const delivery = PRODUCT_DELIVERY[productId]
  if (!delivery || delivery.deliveryType !== "instant") return []

  return delivery.assets
    .filter((asset) => asset.url && asset.type === "pdf")
    .map((asset) => asset.url!)
}

/**
 * Check if product requires video content (helps identify what's pending)
 */
export function productRequiresVideo(productId: ProductId): boolean {
  const delivery = PRODUCT_DELIVERY[productId]
  if (!delivery) return false

  return delivery.assets.some(
    (asset) =>
      (asset.type === "video" || asset.type === "course") &&
      (!asset.url || asset.url.includes("PENDING"))
  )
}

/**
 * Get all products that have pending assets (need owner action)
 */
export function getProductsWithPendingAssets(): Array<{
  productId: ProductId
  productName: string
  pendingAssets: DeliveryAsset[]
}> {
  const pending: Array<{
    productId: ProductId
    productName: string
    pendingAssets: DeliveryAsset[]
  }> = []

  Object.entries(PRODUCT_DELIVERY).forEach(([productId, delivery]) => {
    const pendingAssets = delivery.assets.filter(
      (asset) => !asset.url || asset.url.includes("PENDING")
    )

    if (pendingAssets.length > 0) {
      pending.push({
        productId: productId as ProductId,
        productName: delivery.productName,
        pendingAssets,
      })
    }
  })

  return pending
}
