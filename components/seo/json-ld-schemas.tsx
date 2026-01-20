/**
 * JSON-LD Schema Markup for AI Search Optimization
 *
 * This structured data helps AI assistants (ChatGPT, Claude, Perplexity, etc.)
 * and traditional search engines understand GYNERGY's brand, people, and offerings.
 *
 * Schemas included:
 * - Organization: GYNERGY brand identity
 * - Person: Garin Heslop & Yesi Heslop founder profiles
 * - WebSite: Site search and navigation
 * - PodcastSeries: The GYNERGY Effect podcast
 * - Product/Service: Key programs and offerings
 */

// Organization Schema - Core brand identity
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://gynergy.com/#organization",
  name: "GYNERGY",
  alternateName: ["GYNERGY Coaching", "GYNERGY Transformation"],
  url: "https://gynergy.com",
  logo: {
    "@type": "ImageObject",
    url: "https://gynergy.com/gynergy-logo.png",
    width: 512,
    height: 512,
  },
  image: "https://gynergy.com/og-gynergy.jpg",
  description:
    "GYNERGY empowers individuals to master the self and serve the world through transformational coaching, AI-powered personal development, and community-driven growth across 5 pillars: Health, Relationships, Wealth, Mindset, and Purpose.",
  slogan: "Master The Self To Serve The World",
  foundingDate: "2024",
  founders: [
    { "@id": "https://gynergy.com/#garin-heslop" },
    { "@id": "https://gynergy.com/#yesi-heslop" },
  ],
  knowsAbout: [
    "Personal Development",
    "Life Coaching",
    "Mindset Transformation",
    "Health Optimization",
    "Relationship Building",
    "Wealth Creation",
    "Purpose Discovery",
    "AI-Powered Coaching",
    "Men's Mastermind Groups",
    "Women's Wellness",
    "Gratitude Practices",
    "Service Leadership",
  ],
  sameAs: [
    "https://www.youtube.com/@TheGynergyEffect",
    "https://www.instagram.com/gynergy",
    "https://podcasts.apple.com/us/podcast/the-gynergy-effect/id1817206831",
    "https://open.spotify.com/show/2eluz219FRFpR52Uf8FBJV",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@gynergy.com",
    availableLanguage: ["English", "Spanish"],
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  brand: {
    "@type": "Brand",
    name: "GYNERGY",
    slogan: "Transform Success Into Significance",
  },
}

// Garin Heslop Person Schema
export const garinHeslopSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://gynergy.com/#garin-heslop",
  name: "Garin Heslop",
  givenName: "Garin",
  familyName: "Heslop",
  jobTitle: "Founder & CEO",
  description:
    "Garin Heslop is a transformational coach, entrepreneur, and co-founder of GYNERGY. He specializes in helping high-achieving men master their mindset, optimize their health, and build lives of purpose and significance. Garin leads LVL 5 LIFE, an exclusive men's mastermind program, and co-hosts The GYNERGY Effect podcast.",
  url: "https://gynergy.com/coaching/garin",
  image: "https://gynergy.com/founders/Garin.JPEG",
  worksFor: {
    "@id": "https://gynergy.com/#organization",
  },
  spouse: {
    "@id": "https://gynergy.com/#yesi-heslop",
  },
  knowsAbout: [
    "Business Coaching",
    "Men's Leadership Development",
    "Mindset Optimization",
    "High Performance Coaching",
    "Entrepreneurship",
    "Life Purpose Discovery",
    "Gratitude Practices",
    "Wealth Building Strategies",
  ],
  sameAs: [
    "https://www.linkedin.com/in/garinheslop",
    "https://www.instagram.com/garinheslop",
    "https://lvl5life.com",
  ],
  award: ["LVL 5 LIFE Mastermind Founder"],
  alumniOf: {
    "@type": "Organization",
    name: "Life Coaching Certification",
  },
}

// Yesi Heslop Person Schema
export const yesiHeslopSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://gynergy.com/#yesi-heslop",
  name: "Yesi Heslop",
  givenName: "Yesi",
  familyName: "Heslop",
  jobTitle: "Co-Founder & Wellness Director",
  description:
    "Yesi Heslop is a wellness expert, transformational coach, and co-founder of GYNERGY. She specializes in women's health, fitness, and feminine energy cultivation. Yesi leads the Fit & Feminine program and co-hosts The GYNERGY Effect podcast with her husband Garin.",
  url: "https://gynergy.com/coaching/yesi",
  image: "https://gynergy.com/founders/YESI.JPG",
  worksFor: {
    "@id": "https://gynergy.com/#organization",
  },
  spouse: {
    "@id": "https://gynergy.com/#garin-heslop",
  },
  knowsAbout: [
    "Women's Wellness",
    "Fitness Coaching",
    "Health Optimization",
    "Feminine Energy",
    "Nutrition",
    "Mindfulness",
    "Relationship Coaching",
    "Holistic Health",
  ],
  sameAs: ["https://www.instagram.com/yesiheslop"],
  award: ["Fit & Feminine Program Creator"],
}

// Website Schema with SearchAction
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://gynergy.com/#website",
  name: "GYNERGY",
  url: "https://gynergy.com",
  description:
    "Transform success into significance with GYNERGY. Coaching, programs, and AI-powered tools for health, relationships, wealth, mindset, and purpose.",
  publisher: {
    "@id": "https://gynergy.com/#organization",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://gynergy.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

// Podcast Schema - The GYNERGY Effect
export const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  "@id": "https://gynergy.com/#podcast",
  name: "The GYNERGY Effect",
  description:
    "Weekly conversations on transformation, relationships, health, mindset, and living life at Level 5. Hosted by Garin & Yesi Heslop, The GYNERGY Effect explores how to master the self to serve the world.",
  url: "https://gynergy.com/podcast",
  image: "https://gynergy.com/podcast-cover.jpg",
  author: [
    { "@id": "https://gynergy.com/#garin-heslop" },
    { "@id": "https://gynergy.com/#yesi-heslop" },
  ],
  publisher: {
    "@id": "https://gynergy.com/#organization",
  },
  webFeed: "https://feeds.buzzsprout.com/2506068.rss",
  inLanguage: "en-US",
  genre: ["Personal Development", "Self-Help", "Health & Wellness", "Relationships"],
  sameAs: [
    "https://podcasts.apple.com/us/podcast/the-gynergy-effect/id1817206831",
    "https://open.spotify.com/show/2eluz219FRFpR52Uf8FBJV",
    "https://www.youtube.com/@TheGynergyEffect",
  ],
}

// LVL 5 LIFE Product Schema
export const lvl5LifeSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://gynergy.com/#lvl5life",
  name: "LVL 5 LIFE Mastermind",
  description:
    "An exclusive men's mastermind program for high-achievers ready to transform all 5 pillars of life: Health, Relationships, Wealth, Mindset, and Purpose. Led by Garin Heslop, LVL 5 LIFE combines intensive coaching, community accountability, and in-person experiences.",
  url: "https://lvl5life.com",
  image: "https://gynergy.com/programs/lvl5life.jpg",
  brand: {
    "@id": "https://gynergy.com/#organization",
  },
  category: "Men's Coaching & Mastermind",
  offers: {
    "@type": "Offer",
    price: "15000",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    description: "By application only. Limited to 20 members per cohort.",
  },
  audience: {
    "@type": "PeopleAudience",
    audienceType: "High-achieving men",
    suggestedGender: "male",
    suggestedMinAge: 25,
  },
}

// The 45-Day Awakening Product Schema
export const fortyFiveDayAwakeningSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://gynergy.com/#45-day-awakening",
  name: "The 45-Day Awakening",
  alternateName: "Date Zero",
  description:
    "A transformational 45-day journey through gratitude, self-discovery, and intentional living. Includes the Date Zero journal, coaching support, community access, and optional service retreat in Ensenada, Mexico.",
  url: "https://gynergy.com/programs/the-45-day-awakening",
  image: "https://gynergy.com/programs/45-day-awakening.jpg",
  brand: {
    "@id": "https://gynergy.com/#organization",
  },
  category: "Personal Development Program",
  offers: [
    {
      "@type": "Offer",
      name: "Full Program",
      price: "1497",
      priceCurrency: "USD",
      description: "Complete 45-Day Awakening experience with coaching and community",
    },
    {
      "@type": "Offer",
      name: "Date Zero Journal Only",
      price: "197",
      priceCurrency: "USD",
      description: "Self-guided experience with the Date Zero gratitude journal",
    },
  ],
}

// GYNERGY.AI Product Schema
export const gynergyAISchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://gynergy.com/#gynergy-ai",
  name: "GYNERGY.AI",
  alternateName: "ARIA AI Coach",
  description:
    "AI-powered transformation platform featuring ARIA, your personal board of directors. Five specialized AI coaches (Health, Relationships, Wealth, Mindset, Purpose) work together to provide 24/7 personalized guidance, progress tracking, and accountability.",
  url: "https://gynergy.com/gynergy-ai",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web",
  offers: [
    {
      "@type": "Offer",
      name: "Essential",
      price: "49",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      description: "5-Pillar System + ARIA AI Coach + Community Access",
    },
    {
      "@type": "Offer",
      name: "Accelerator",
      price: "99",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      description: "Everything in Essential + Weekly Calls + Accountability",
    },
    {
      "@type": "Offer",
      name: "Mastery",
      price: "197",
      priceCurrency: "USD",
      billingIncrement: "P1M",
      description: "Everything + Monthly 1-on-1 + Priority Support",
    },
  ],
  publisher: {
    "@id": "https://gynergy.com/#organization",
  },
  featureList: [
    "24/7 AI Coaching",
    "5-Pillar System Integration",
    "Progress Dashboard",
    "Community Access",
    "Personalized Recommendations",
  ],
}

// Service Retreat Schema
export const serviceRetreatSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": "https://gynergy.com/#service-retreat",
  name: "GYNERGY Service Retreat",
  description:
    "A transformational service retreat in Ensenada, Mexico. Build homes for families in need, experience the 'Break Free' teachings, and connect with a community of change-makers. Includes transportation from San Diego, beach lodging, meals, and all materials.",
  url: "https://gynergy.com/programs/service-retreat",
  location: {
    "@type": "Place",
    name: "Ensenada, Mexico",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ensenada",
      addressRegion: "Baja California",
      addressCountry: "MX",
    },
  },
  organizer: {
    "@id": "https://gynergy.com/#organization",
  },
  performer: [
    { "@id": "https://gynergy.com/#garin-heslop" },
    { "@id": "https://gynergy.com/#yesi-heslop" },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Service Retreat",
      price: "1497",
      priceCurrency: "USD",
      description: "Standalone service retreat experience",
    },
    {
      "@type": "Offer",
      name: "Bundle with 45-Day Awakening",
      price: "2497",
      priceCurrency: "USD",
      description: "Combined 45-Day Awakening + Service Retreat (Save $500)",
    },
  ],
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
}

// Fit & Feminine Product Schema
export const fitFeminineSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://gynergy.com/#fit-feminine",
  name: "Fit & Feminine",
  description:
    "A women's wellness program led by Yesi Heslop, focusing on health optimization, feminine energy cultivation, and holistic transformation. Launching May 2026.",
  url: "https://gynergy.com/programs/fit-and-feminine",
  image: "https://gynergy.com/programs/fit-feminine.jpg",
  brand: {
    "@id": "https://gynergy.com/#organization",
  },
  category: "Women's Wellness Program",
  audience: {
    "@type": "PeopleAudience",
    audienceType: "Women seeking health and wellness transformation",
    suggestedGender: "female",
  },
}

// Combined schema graph for comprehensive structured data
export const completeSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    garinHeslopSchema,
    yesiHeslopSchema,
    websiteSchema,
    podcastSchema,
    lvl5LifeSchema,
    fortyFiveDayAwakeningSchema,
    gynergyAISchema,
    serviceRetreatSchema,
    fitFeminineSchema,
  ],
}

/**
 * JsonLdScript Component
 * Renders JSON-LD structured data in a script tag
 */
export function JsonLdScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * AllSchemasScript Component
 * Renders all GYNERGY schemas as a single graph
 */
export function AllSchemasScript() {
  return <JsonLdScript schema={completeSchemaGraph} />
}
