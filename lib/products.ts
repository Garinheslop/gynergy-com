// Product definitions - safe to import in client components

export const PRODUCTS = {
  "date-zero-journal": {
    id: "date-zero-journal",
    name: "Date Zero Journal",
    description: "A 45-day guided gratitude journal for personal transformation. Start each day with intention and end with reflection.",
    price: 19700, // $197 in cents
    image: "https://gynergy.com/wp-content/uploads/2024/11/image-date-zero.png",
    slug: "date-zero-journal",
    features: [
      "45 days of guided prompts",
      "Morning intention setting",
      "Evening gratitude reflection",
      "Self-paced transformation",
    ],
  },
  "45-day-awakening": {
    id: "45-day-awakening",
    name: "The 45 Day Awakening",
    description: "Complete transformation program including the Date Zero journal, live coaching sessions, and exclusive community access.",
    price: 149700, // $1,497 in cents
    image: "https://gynergy.com/wp-content/uploads/2024/12/GYNERGY-DATEZERO-GALLERY-FIRST.jpg",
    slug: "45-day-awakening",
    features: [
      "Date Zero Journal included",
      "Weekly live coaching calls",
      "Private community access",
      "Lifetime program access",
    ],
  },
  "awakening-retreat-bundle": {
    id: "awakening-retreat-bundle",
    name: "45 Day Awakening + Service Retreat Bundle",
    description: "Complete transformation: 45 Day Awakening program plus the life-changing Ensenada Service Retreat experience.",
    price: 249700, // $2,497 in cents
    image: "https://gynergy.com/wp-content/uploads/2024/12/GYNERGY-DATEZERO-GALLERY-SECOND.jpg",
    slug: "awakening-retreat-bundle",
    features: [
      "Full 45 Day Awakening program",
      "Ensenada Service Retreat included",
      "Beach lodging & all meals",
      "Home building experience",
      "SAVE $500 with bundle",
    ],
  },
  // GYNERGY.AI Subscription Products
  "gynergy-ai-essential": {
    id: "gynergy-ai-essential",
    name: "GYNERGY.AI Essential",
    description: "5-Pillar System + ARIA AI Coach + Community Access. Your foundation for transformation.",
    price: 4900, // $49/month in cents
    mode: "subscription" as const,
    interval: "month" as const,
    image: "/images/gynergy-ai-essential.png",
    slug: "gynergy-ai-essential",
    features: [
      "5-Pillar System Access",
      "ARIA AI Coach (24/7)",
      "Progress Dashboard",
      "Community Access",
    ],
  },
  "gynergy-ai-accelerator": {
    id: "gynergy-ai-accelerator",
    name: "GYNERGY.AI Accelerator",
    description: "Everything in Essential + Weekly Calls + Accountability. For committed transformers.",
    price: 9900, // $99/month in cents
    mode: "subscription" as const,
    interval: "month" as const,
    popular: true,
    image: "/images/gynergy-ai-accelerator.png",
    slug: "gynergy-ai-accelerator",
    features: [
      "Everything in Essential",
      "Weekly Deep-Dive Calls",
      "Accountability Partner Matching",
      "Advanced Analytics",
    ],
  },
  "gynergy-ai-mastery": {
    id: "gynergy-ai-mastery",
    name: "GYNERGY.AI Mastery",
    description: "Everything + Monthly 1-on-1 + Priority Support + Exclusive Content. For serious high-performers.",
    price: 19700, // $197/month in cents
    mode: "subscription" as const,
    interval: "month" as const,
    image: "/images/gynergy-ai-mastery.png",
    slug: "gynergy-ai-mastery",
    features: [
      "Everything in Accelerator",
      "Monthly 1-on-1 Coaching Call",
      "Priority Support",
      "Exclusive Content Library",
      "White-Glove Onboarding",
    ],
  },
  // AOE Brotherhood - Men's Community ($79/month)
  "aoe-brotherhood": {
    id: "aoe-brotherhood",
    name: "AOE Brotherhood",
    description: "Weekly calls with Garin & Rolando, private brotherhood community, expert interviews, and 5-pillar transformation framework.",
    price: 7900, // $79/month in cents
    mode: "subscription" as const,
    interval: "month" as const,
    image: "/images/aoe-brotherhood.png",
    slug: "aoe-brotherhood",
    features: [
      "Weekly Live Calls with Garin & Rolando",
      "Private Brotherhood Community",
      "Monthly Expert Interviews",
      "Monthly Challenges",
      "Accountability Partner Matching",
      "5-Pillar Transformation Framework",
      "Archive of Past Calls",
      "30-Day Money-Back Guarantee",
    ],
  },

  // ============================================
  // LOW-TICKET DIGITAL PRODUCTS
  // ============================================

  // Tier 1: Micro-Products ($17-$27)
  "5-pillar-quick-start": {
    id: "5-pillar-quick-start",
    name: "5-Pillar Quick Start Guide",
    description: "20-page action guide to kickstart your transformation across Health, Relationships, Wealth, Mindset, and Purpose.",
    price: 1700, // $17 in cents
    category: "digital" as const,
    image: "/images/products/5-pillar-quick-start.png",
    slug: "5-pillar-quick-start",
    features: [
      "20-page actionable PDF",
      "5-Pillar self-assessment",
      "Quick wins for each pillar",
      "Instant digital download",
    ],
  },
  "morning-mastery-routine": {
    id: "morning-mastery-routine",
    name: "Morning Mastery Routine",
    description: "7-day email course + PDF guide to build a powerful morning routine that sets you up for success.",
    price: 1700, // $17 in cents
    category: "digital" as const,
    image: "/images/products/morning-mastery.png",
    slug: "morning-mastery-routine",
    features: [
      "7-day email course",
      "Printable morning checklist",
      "Habit tracker template",
      "Audio meditation guide",
    ],
  },
  "gratitude-framework-guide": {
    id: "gratitude-framework-guide",
    name: "Gratitude Framework Guide",
    description: "Deep dive into the foundation of GYNERGY - transform your life through the power of gratitude.",
    price: 2700, // $27 in cents
    category: "digital" as const,
    image: "/images/products/gratitude-framework.png",
    slug: "gratitude-framework-guide",
    features: [
      "30-page comprehensive guide",
      "Daily gratitude prompts",
      "Journaling templates",
      "Connects to 45 Day Awakening",
    ],
  },
  "relationship-reset-workbook": {
    id: "relationship-reset-workbook",
    name: "Relationship Reset Workbook",
    description: "30-page workbook with exercises to transform your most important relationships.",
    price: 2700, // $27 in cents
    category: "digital" as const,
    image: "/images/products/relationship-reset.png",
    slug: "relationship-reset-workbook",
    features: [
      "30-page interactive workbook",
      "Communication exercises",
      "Connection rituals",
      "Conflict resolution frameworks",
    ],
  },
  "wealth-mindset-masterclass": {
    id: "wealth-mindset-masterclass",
    name: "Wealth Mindset Masterclass",
    description: "90-minute video masterclass + worksheet to shift your relationship with money and abundance.",
    price: 2700, // $27 in cents
    category: "digital" as const,
    image: "/images/products/wealth-mindset.png",
    slug: "wealth-mindset-masterclass",
    features: [
      "90-minute video training",
      "Money mindset worksheet",
      "Abundance affirmations",
      "Action plan template",
    ],
  },

  // Tier 2: Mini-Courses ($47-$97)
  "7-day-transformation-challenge": {
    id: "7-day-transformation-challenge",
    name: "7-Day Transformation Challenge",
    description: "Daily videos + community access for 7 days. Experience the GYNERGY method firsthand.",
    price: 4700, // $47 in cents
    category: "digital" as const,
    image: "/images/products/7-day-challenge.png",
    slug: "7-day-transformation-challenge",
    features: [
      "7 daily video lessons",
      "Private challenge community",
      "Daily accountability prompts",
      "Completion certificate",
    ],
  },
  "aria-mastery-course": {
    id: "aria-mastery-course",
    name: "ARIA Mastery Course",
    description: "Learn how to maximize your GYNERGY.AI experience. Get 10x better responses from your AI coaches.",
    price: 4900, // $49 in cents
    category: "digital" as const,
    image: "/images/products/aria-mastery.png",
    slug: "aria-mastery-course",
    features: [
      "Power prompts library",
      "Advanced ARIA techniques",
      "Personalization strategies",
      "Bonus: Monthly tips newsletter",
    ],
  },
  "health-pillar-deep-dive": {
    id: "health-pillar-deep-dive",
    name: "Health Pillar Deep Dive",
    description: "4-week self-paced course to transform your energy, vitality, and physical wellbeing.",
    price: 9700, // $97 in cents
    category: "digital" as const,
    image: "/images/products/health-deep-dive.png",
    slug: "health-pillar-deep-dive",
    features: [
      "4 weekly video modules",
      "Nutrition framework",
      "Movement protocols",
      "Sleep optimization guide",
      "Energy tracking system",
    ],
  },
  "mindset-mastery-program": {
    id: "mindset-mastery-program",
    name: "Mindset Mastery Program",
    description: "4-week self-paced course to build unshakeable mental resilience and clarity.",
    price: 9700, // $97 in cents
    category: "digital" as const,
    image: "/images/products/mindset-mastery.png",
    slug: "mindset-mastery-program",
    features: [
      "4 weekly video modules",
      "Limiting belief exercises",
      "Reframing techniques",
      "Daily mindset practices",
      "Journaling prompts",
    ],
  },

  // Tier 3: Premium Digital ($197-$297)
  "assessment-coaching-call": {
    id: "assessment-coaching-call",
    name: "5-Pillar Assessment + Strategy Call",
    description: "Complete 5-Pillar Assessment plus a 45-minute strategy call with a certified GYNERGY coach.",
    price: 29700, // $297 in cents
    category: "digital" as const,
    image: "/images/products/assessment-call.png",
    slug: "assessment-coaching-call",
    features: [
      "Full 5-Pillar Assessment",
      "45-minute 1-on-1 call",
      "Personalized action plan",
      "Program recommendations",
      "Follow-up resources",
    ],
  },
  "transformation-toolkit": {
    id: "transformation-toolkit",
    name: "Complete Transformation Toolkit",
    description: "All PDFs + mini-courses bundled together. Everything you need for self-guided transformation.",
    price: 29700, // $297 in cents
    category: "digital" as const,
    image: "/images/products/transformation-toolkit.png",
    slug: "transformation-toolkit",
    features: [
      "All Tier 1 PDFs included",
      "All Tier 2 mini-courses",
      "Bonus video content",
      "SAVE $150+ vs buying separately",
      "Lifetime access",
    ],
  },
} as const

export type ProductId = keyof typeof PRODUCTS
export type Product = (typeof PRODUCTS)[ProductId]

// Format price for display
export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(priceInCents / 100)
}

// Check if product is a subscription
export function isSubscriptionProduct(productId: ProductId): boolean {
  const product = PRODUCTS[productId]
  return "mode" in product && product.mode === "subscription"
}

// Get subscription interval (month/year)
export function getSubscriptionInterval(productId: ProductId): "month" | "year" | null {
  const product = PRODUCTS[productId]
  if ("interval" in product) {
    return product.interval
  }
  return null
}

// Check if product is a digital product (not physical, not subscription)
export function isDigitalProduct(productId: ProductId): boolean {
  const product = PRODUCTS[productId]
  return "category" in product && product.category === "digital"
}

// Get products by category
export function getProductsByCategory(category: "digital" | "physical" | "subscription"): Product[] {
  return Object.values(PRODUCTS).filter((product) => {
    if (category === "subscription") {
      return "mode" in product && product.mode === "subscription"
    }
    if (category === "digital") {
      return "category" in product && product.category === "digital"
    }
    // Physical products are one-time, non-digital
    return !("mode" in product) && !("category" in product)
  })
}

// Get products by price tier
export function getDigitalProductsByTier(): {
  micro: Product[]
  mini: Product[]
  premium: Product[]
} {
  const digital = getProductsByCategory("digital")
  return {
    micro: digital.filter((p) => p.price <= 2700), // $17-$27
    mini: digital.filter((p) => p.price > 2700 && p.price <= 9900), // $47-$99
    premium: digital.filter((p) => p.price > 9900), // $100+
  }
}
