// Structured Data Components for AEO/SEO
// JSON-LD Schema.org markup for rich search results

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GYNERGY",
    alternateName: "Gynergy Coaching",
    url: "https://gynergy.com",
    logo: "https://gynergy.com/logo.png",
    description:
      "Master the self to serve the world. GYNERGY helps high-achievers transform their health, relationships, wealth, mindset, and purpose through coaching, programs, and AI-powered transformation tools.",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Garin Heslop",
        jobTitle: "Co-Founder",
        url: "https://gynergy.com/about/garin",
      },
      {
        "@type": "Person",
        name: "Yesi Heslop",
        jobTitle: "Co-Founder",
        url: "https://gynergy.com/about/yesi",
      },
    ],
    sameAs: [
      "https://www.instagram.com/gynergy",
      "https://www.youtube.com/@gynergy",
      "https://www.facebook.com/gynergy",
      "https://www.linkedin.com/company/gynergy",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@gynergy.com",
      availableLanguage: ["English"],
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Personal transformation",
      "Executive coaching",
      "Life coaching",
      "Health optimization",
      "Relationship coaching",
      "Mindset development",
      "Purpose discovery",
      "Wealth coaching",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GYNERGY",
    url: "https://gynergy.com",
    description:
      "Transform success into significance. Coaching, programs, and AI-powered tools for life transformation.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://gynergy.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ProductSchemaProps {
  name: string
  description: string
  price: number
  currency?: string
  image?: string
  url: string
  sku: string
  brand?: string
  availability?: "InStock" | "OutOfStock" | "PreOrder"
  ratingValue?: number
  reviewCount?: number
}

export function ProductSchema({
  name,
  description,
  price,
  currency = "USD",
  image,
  url,
  sku,
  brand = "GYNERGY",
  availability = "InStock",
  ratingValue,
  reviewCount,
}: ProductSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image || "https://gynergy.com/og-gynergy.jpg",
    url,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url,
      seller: {
        "@type": "Organization",
        name: "GYNERGY",
      },
    },
  }

  if (ratingValue && reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface CourseSchemaProps {
  name: string
  description: string
  provider?: string
  price: number
  currency?: string
  url: string
  duration?: string
  image?: string
}

export function CourseSchema({
  name,
  description,
  provider = "GYNERGY",
  price,
  currency = "USD",
  url,
  duration,
  image,
}: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://gynergy.com",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      duration: duration || "P45D", // 45 days default
    },
    image: image || "https://gynergy.com/og-gynergy.jpg",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Service schema for coaching services
interface ServiceSchemaProps {
  name: string
  description: string
  provider?: string
  price?: number
  priceRange?: string
  url: string
}

export function ServiceSchema({
  name,
  description,
  provider = "GYNERGY",
  price,
  priceRange,
  url,
}: ServiceSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://gynergy.com",
    },
    url,
    areaServed: "Worldwide",
    serviceType: "Life Coaching",
  }

  if (price) {
    schema.offers = {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
    }
  } else if (priceRange) {
    schema.priceRange = priceRange
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
