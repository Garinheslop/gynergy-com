"use client"

import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/products"
import { useState } from "react"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    if (items.length === 0) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
          })),
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error("Checkout error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0A0A0A] border-l border-[#2E2E2E] z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2E2E2E]">
          <h2 className="font-display text-2xl text-white uppercase tracking-wide">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/60 font-body">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-[#1A1A1A] border border-[#2E2E2E]"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-20 h-20 bg-[#2E2E2E] flex-shrink-0 flex items-center justify-center">
                    <span className="text-[#AFECDB] text-xs font-heading">GYNERGY</span>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-white text-sm truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-[#AFECDB] font-heading font-bold mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id as any, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-8 h-8 bg-[#2E2E2E] text-white hover:bg-[#3E3E3E] transition-colors flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-white font-body">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id as any, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-8 h-8 bg-[#2E2E2E] text-white hover:bg-[#3E3E3E] transition-colors flex items-center justify-center"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id as any)}
                        aria-label="Remove item"
                        className="ml-auto text-white/40 hover:text-red-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#2E2E2E] space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-white/60 font-body">Total</span>
              <span className="text-white font-display text-2xl">{formatPrice(totalPrice)}</span>
            </div>

            {/* Checkout Button */}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full py-4 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider hover:bg-[#7DD8C0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Checkout"}
            </button>

            {/* Clear Cart */}
            <button
              type="button"
              onClick={clearCart}
              className="w-full py-3 border border-[#2E2E2E] text-white/60 font-heading text-sm uppercase tracking-wider hover:border-[#AFECDB] hover:text-white transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
