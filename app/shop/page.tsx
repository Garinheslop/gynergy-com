"use client"

import { PRODUCTS, formatPrice, ProductId, getProductsByCategory } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { SectionHeader } from "@/components/ui/section-label"
import Link from "next/link"

export default function ShopPage() {
  const { addItem } = useCart()

  // Get flagship products (physical one-time purchases)
  const flagshipProducts = getProductsByCategory("physical")
  // Get subscription products
  const subscriptionProducts = getProductsByCategory("subscription")

  const handleAddToCart = (productId: ProductId) => {
    addItem(productId, 1)
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          label="Shop"
          labelVariant="teal"
          title="TRANSFORMATION TOOLS"
          subtitle="Premium resources designed to accelerate your journey of personal transformation."
        />

        {/* Category Navigation */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link
            href="/shop"
            className="px-6 py-3 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider text-sm"
          >
            Flagship Programs
          </Link>
          <Link
            href="/shop/digital"
            className="px-6 py-3 border border-[#2E2E2E] text-white/80 font-heading font-bold uppercase tracking-wider text-sm hover:border-[#AFECDB]/50 hover:text-[#AFECDB] transition-colors"
          >
            Digital Products
          </Link>
          <Link
            href="/gynergy-ai"
            className="px-6 py-3 border border-[#2E2E2E] text-white/80 font-heading font-bold uppercase tracking-wider text-sm hover:border-[#AFECDB]/50 hover:text-[#AFECDB] transition-colors"
          >
            Subscriptions
          </Link>
        </div>

        {/* Flagship Products Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {flagshipProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#0A0A0A] border border-[#2E2E2E] hover:border-[#AFECDB]/50 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="aspect-square bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-center p-8">
                    <span className="text-[#AFECDB] font-display text-2xl tracking-wider">
                      GYNERGY
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <h3 className="font-display text-xl text-white uppercase tracking-wide">
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
                    onClick={() => handleAddToCart(product.id as ProductId)}
                    className="px-6 py-3 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider text-sm hover:bg-[#7DD8C0] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Badge for Bundle */}
              {product.id === "awakening-retreat-bundle" && (
                <div className="absolute top-4 right-4 bg-[#AFECDB] text-black px-3 py-1 font-heading font-bold text-xs uppercase tracking-wider">
                  Save $500
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-24 text-center">
          <p className="text-white/40 font-body text-sm max-w-2xl mx-auto">
            All digital products include lifetime access. Physical products ship within 3-5 business days.
            Questions? Contact us at <a href="mailto:support@gynergy.com" className="text-[#AFECDB] hover:underline">support@gynergy.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
