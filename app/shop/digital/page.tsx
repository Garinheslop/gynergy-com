"use client"

import { getDigitalProductsByTier, formatPrice, ProductId, Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { SectionHeader } from "@/components/ui/section-label"
import { ProductImagePlaceholder } from "@/components/shop/product-image-placeholder"
import Link from "next/link"

/** Map product IDs to product types for placeholder images */
function getProductType(productId: string): "pdf" | "ebook" | "video-course" | "audio" | "email-course" | "challenge" | "bundle" | "assessment" | "coaching" {
  const typeMap: Record<string, "pdf" | "ebook" | "video-course" | "audio" | "email-course" | "challenge" | "bundle" | "assessment" | "coaching"> = {
    "5-pillar-quick-start": "pdf",
    "morning-mastery-routine": "email-course",
    "gratitude-framework-guide": "pdf",
    "relationship-reset-workbook": "pdf",
    "wealth-mindset-masterclass": "video-course",
    "7-day-transformation-challenge": "challenge",
    "aria-mastery-course": "video-course",
    "health-pillar-deep-dive": "video-course",
    "mindset-mastery-program": "video-course",
    "assessment-coaching-call": "assessment",
    "transformation-toolkit": "bundle",
    "date-zero-journal": "ebook",
    "45-day-awakening": "coaching",
    "awakening-retreat-bundle": "bundle",
  }
  return typeMap[productId] || "pdf"
}

/** Check if image URL is valid (not a placeholder path) */
function isValidImageUrl(url: string | undefined): boolean {
  if (!url) return false
  // Check if it's a real URL (not just a placeholder path that doesn't exist)
  if (url.startsWith("http")) return true
  // Local paths that start with /images/ are likely placeholders
  if (url.startsWith("/images/products/")) return false
  return true
}

function ProductCard({ product, onAddToCart, badge }: {
  product: Product
  onAddToCart: (id: ProductId) => void
  badge?: string
}) {
  const hasValidImage = isValidImageUrl(product.image)
  const productType = getProductType(product.id)

  return (
    <div className="group relative bg-[#0A0A0A] border border-[#2E2E2E] hover:border-[#AFECDB]/50 transition-all duration-300">
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 bg-[#AFECDB] text-black px-3 py-1 font-heading font-bold text-xs uppercase tracking-wider z-10">
          {badge}
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-[4/3] bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
        {hasValidImage ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ProductImagePlaceholder
            productType={productType}
            productName={product.name}
            size="full"
            className="aspect-[4/3] group-hover:opacity-90 transition-opacity"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-lg text-white uppercase tracking-wide">
          {product.name}
        </h3>
        <p className="text-white/60 font-body text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        {product.features && (
          <ul className="space-y-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                <svg className="w-4 h-4 mt-0.5 text-[#AFECDB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price & CTA */}
        <div className="pt-4 border-t border-[#2E2E2E] flex items-center justify-between">
          <span className="font-display text-2xl text-[#AFECDB]">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => onAddToCart(product.id as ProductId)}
            className="px-5 py-2.5 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider text-sm hover:bg-[#7DD8C0] transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

function TierSection({
  title,
  subtitle,
  products,
  onAddToCart,
  tierBadge
}: {
  title: string
  subtitle: string
  products: Product[]
  onAddToCart: (id: ProductId) => void
  tierBadge?: string
}) {
  if (products.length === 0) return null

  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2 className="font-display text-3xl text-white uppercase tracking-wider mb-2">
          {title}
        </h2>
        <p className="text-white/60 font-body text-lg">
          {subtitle}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            badge={tierBadge}
          />
        ))}
      </div>
    </section>
  )
}

export default function DigitalShopPage() {
  const { addItem } = useCart()
  const tiers = getDigitalProductsByTier()

  const handleAddToCart = (productId: ProductId) => {
    addItem(productId, 1)
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          label="Digital Products"
          labelVariant="teal"
          title="INSTANT TRANSFORMATION TOOLS"
          subtitle="Digital guides, courses, and resources you can access immediately. Start your transformation today."
        />

        {/* Breadcrumb */}
        <div className="mt-8 mb-12">
          <Link
            href="/shop"
            className="text-white/50 hover:text-[#AFECDB] font-body text-sm transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Products
          </Link>
        </div>

        {/* Tier 1: Micro Products */}
        <TierSection
          title="Quick Start Guides"
          subtitle="Perfect entry points to begin your transformation journey — $17 to $27"
          products={tiers.micro}
          onAddToCart={handleAddToCart}
          tierBadge="Best Value"
        />

        {/* Tier 2: Mini Courses */}
        <TierSection
          title="Mini-Courses & Challenges"
          subtitle="Structured programs for deeper transformation — $47 to $97"
          products={tiers.mini}
          onAddToCart={handleAddToCart}
        />

        {/* Tier 3: Premium Digital */}
        <TierSection
          title="Premium Experiences"
          subtitle="High-impact coaching and comprehensive bundles — $197 to $297"
          products={tiers.premium}
          onAddToCart={handleAddToCart}
          tierBadge="Premium"
        />

        {/* Upsell Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1A1A1A] to-[#0A0A0A] border border-[#2E2E2E] p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider mb-4">
              Ready for Complete Transformation?
            </h3>
            <p className="text-white/60 font-body text-lg mb-8">
              These digital tools are a great start. When you&apos;re ready for the full experience,
              explore our flagship programs with live coaching and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/the-45-day-awakening"
                className="px-8 py-4 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider hover:bg-[#7DD8C0] transition-colors text-center"
              >
                The 45 Day Awakening — $1,497
              </Link>
              <Link
                href="/gynergy-ai"
                className="px-8 py-4 border border-[#AFECDB] text-[#AFECDB] font-heading font-bold uppercase tracking-wider hover:bg-[#AFECDB]/10 transition-colors text-center"
              >
                GYNERGY.AI — From $49/mo
              </Link>
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/40 font-body text-sm max-w-2xl mx-auto">
            All digital products include lifetime access and are delivered instantly via email after purchase.
            Questions? Contact us at <a href="mailto:support@gynergy.com" className="text-[#AFECDB] hover:underline">support@gynergy.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
