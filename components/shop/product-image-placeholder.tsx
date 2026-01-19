"use client"

import { cn } from "@/lib/utils"

type ProductType =
  | "pdf"
  | "ebook"
  | "video-course"
  | "audio"
  | "email-course"
  | "challenge"
  | "subscription"
  | "coaching"
  | "bundle"
  | "assessment"
  | "retreat"
  | "community"

interface ProductImagePlaceholderProps {
  /** Product type determines the icon displayed */
  productType: ProductType
  /** Product name for label */
  productName: string
  /** Price for display */
  price?: string
  /** Additional className */
  className?: string
  /** Size variant */
  size?: "sm" | "md" | "lg" | "full"
  /** Show price badge */
  showPrice?: boolean
  /** Featured product styling */
  featured?: boolean
  /** Alt text for accessibility */
  alt?: string
}

/** Product type icons as SVG components */
const ProductIcons = {
  pdf: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  ebook: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  ),
  "video-course": (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  ),
  audio: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
      />
    </svg>
  ),
  "email-course": (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  challenge: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  ),
  subscription: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  coaching: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  bundle: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  assessment: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  ),
  retreat: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  community: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
}

/** Product type labels for display */
const ProductTypeLabels: Record<ProductType, string> = {
  pdf: "PDF Guide",
  ebook: "Digital Book",
  "video-course": "Video Course",
  audio: "Audio Program",
  "email-course": "Email Course",
  challenge: "Challenge",
  subscription: "Platform Access",
  coaching: "Coaching Program",
  bundle: "Bundle",
  assessment: "Assessment",
  retreat: "Retreat Experience",
  community: "Community Access",
}

/** Color accents by product type */
const ProductTypeColors: Record<ProductType, string> = {
  pdf: "#AFECDB",
  ebook: "#AFECDB",
  "video-course": "#FFD700",
  audio: "#C084FC",
  "email-course": "#60A5FA",
  challenge: "#F97316",
  subscription: "#FFD700",
  coaching: "#22C55E",
  bundle: "#FFD700",
  assessment: "#AFECDB",
  retreat: "#F472B6",
  community: "#8B5CF6",
}

/**
 * Premium product image placeholder for digital products.
 * Displays product-type-specific icons with premium styling.
 * Use until actual product mockup images are created.
 */
export function ProductImagePlaceholder({
  productType,
  productName,
  price,
  className,
  size = "md",
  showPrice = false,
  featured = false,
  alt,
}: ProductImagePlaceholderProps) {
  const sizeClasses = {
    sm: "h-32 w-full",
    md: "h-48 w-full",
    lg: "h-64 w-full",
    full: "h-80 w-full",
  }

  const accentColor = ProductTypeColors[productType]

  return (
    <div
      role="img"
      aria-label={alt || `${productName} - ${ProductTypeLabels[productType]}`}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]",
        "border border-[#2E2E2E]",
        featured && "border-[#FFD700]/30 shadow-lg shadow-[#FFD700]/10",
        sizeClasses[size],
        className
      )}
    >
      {/* Radial gradient accent */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 70%)`,
        }}
      />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, ${accentColor} 25%, transparent 25%),
              linear-gradient(-45deg, ${accentColor} 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, ${accentColor} 75%),
              linear-gradient(-45deg, transparent 75%, ${accentColor} 75%)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          }}
        />
      </div>

      {/* Product type badge */}
      <div
        className="absolute top-3 left-3 px-2 py-1 text-xs font-medium uppercase tracking-wider"
        style={{
          backgroundColor: `${accentColor}20`,
          color: accentColor,
          border: `1px solid ${accentColor}30`,
        }}
      >
        {ProductTypeLabels[productType]}
      </div>

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 right-3 px-2 py-1 text-xs font-medium uppercase tracking-wider bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30">
          Featured
        </div>
      )}

      {/* Icon */}
      <div
        className="relative z-10 opacity-40 mb-4"
        style={{ color: accentColor }}
      >
        {ProductIcons[productType]}
      </div>

      {/* Product name */}
      <h3 className="relative z-10 text-white/70 text-sm font-medium text-center px-4 max-w-[85%] line-clamp-2">
        {productName}
      </h3>

      {/* Price badge */}
      {showPrice && price && (
        <div
          className="absolute bottom-3 right-3 px-3 py-1.5 font-semibold text-sm"
          style={{
            backgroundColor: `${accentColor}15`,
            color: accentColor,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {price}
        </div>
      )}

      {/* Decorative corner accents */}
      <div
        className="absolute top-0 left-0 w-8 h-8 opacity-20"
        style={{
          borderTop: `2px solid ${accentColor}`,
          borderLeft: `2px solid ${accentColor}`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-8 h-8 opacity-20"
        style={{
          borderBottom: `2px solid ${accentColor}`,
          borderRight: `2px solid ${accentColor}`,
        }}
      />
    </div>
  )
}

/**
 * Product card with placeholder image - ready-to-use card component
 */
export function ProductCard({
  productType,
  productName,
  description,
  price,
  features,
  ctaText = "Learn More",
  ctaHref,
  featured = false,
  className,
}: {
  productType: ProductType
  productName: string
  description: string
  price: string
  features?: string[]
  ctaText?: string
  ctaHref?: string
  featured?: boolean
  className?: string
}) {
  const accentColor = ProductTypeColors[productType]

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden",
        "bg-[#0D0D0D] border border-[#2E2E2E]",
        featured && "border-[#FFD700]/30 shadow-lg shadow-[#FFD700]/10",
        className
      )}
    >
      <ProductImagePlaceholder
        productType={productType}
        productName={productName}
        size="md"
        featured={featured}
      />

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-display text-white mb-2">{productName}</h3>
        <p className="text-white/60 text-sm mb-4 flex-1">{description}</p>

        {features && features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.slice(0, 4).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: accentColor }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white/70">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2E2E2E]">
          <span className="text-2xl font-display text-[#FFD700]">{price}</span>
          {ctaHref ? (
            <a
              href={ctaHref}
              className="px-4 py-2 bg-[#FFD700] text-black font-semibold text-sm uppercase tracking-wider hover:bg-[#FFD700]/90 transition-colors"
            >
              {ctaText}
            </a>
          ) : (
            <button className="px-4 py-2 bg-[#FFD700] text-black font-semibold text-sm uppercase tracking-wider hover:bg-[#FFD700]/90 transition-colors">
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Subscription tier card with placeholder
 */
export function SubscriptionTierCard({
  tierName,
  price,
  description,
  features,
  popular = false,
  ctaText = "Get Started",
  ctaHref,
  className,
}: {
  tierName: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
  ctaHref?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-6",
        "bg-[#0D0D0D] border border-[#2E2E2E]",
        popular && "border-[#FFD700]/50 shadow-lg shadow-[#FFD700]/10",
        className
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFD700] text-black text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <ProductImagePlaceholder
        productType="subscription"
        productName={tierName}
        size="sm"
        featured={popular}
        className="mb-6"
      />

      <h3 className="text-2xl font-display text-white mb-2">{tierName}</h3>
      <p className="text-white/60 text-sm mb-4">{description}</p>

      <div className="mb-6">
        <span className="text-4xl font-display text-[#FFD700]">{price}</span>
        <span className="text-white/50 text-sm">/month</span>
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <svg
              className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#AFECDB]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
      </ul>

      {ctaHref ? (
        <a
          href={ctaHref}
          className={cn(
            "w-full py-3 text-center font-semibold text-sm uppercase tracking-wider transition-colors",
            popular
              ? "bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
              : "bg-white/10 text-white hover:bg-white/20"
          )}
        >
          {ctaText}
        </a>
      ) : (
        <button
          className={cn(
            "w-full py-3 font-semibold text-sm uppercase tracking-wider transition-colors",
            popular
              ? "bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
              : "bg-white/10 text-white hover:bg-white/20"
          )}
        >
          {ctaText}
        </button>
      )}
    </div>
  )
}

export default ProductImagePlaceholder
