"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a production app, you would verify the session with Stripe here
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#AFECDB] mx-auto"></div>
          <p className="mt-4 text-white/60 font-body">Processing your order...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto w-20 h-20 bg-[#AFECDB]/10 rounded-full flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-[#AFECDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wide mb-4">
          Thank You!
        </h1>
        <p className="text-white/60 font-body text-lg mb-8">
          Your order has been confirmed and is being processed.
        </p>

        {/* Order Details Card */}
        <div className="bg-[#0A0A0A] border border-[#2E2E2E] p-8 mb-8">
          <h2 className="font-heading font-bold text-white uppercase tracking-wider mb-4">
            What Happens Next?
          </h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#AFECDB]/10 rounded-full flex items-center justify-center text-[#AFECDB] font-heading font-bold">
                1
              </span>
              <div>
                <h3 className="text-white font-heading font-bold">Confirmation Email</h3>
                <p className="text-white/60 font-body text-sm">You&apos;ll receive an email with your order details and receipt.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#AFECDB]/10 rounded-full flex items-center justify-center text-[#AFECDB] font-heading font-bold">
                2
              </span>
              <div>
                <h3 className="text-white font-heading font-bold">Access Your Content</h3>
                <p className="text-white/60 font-body text-sm">Digital products will be available immediately via email.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-[#AFECDB]/10 rounded-full flex items-center justify-center text-[#AFECDB] font-heading font-bold">
                3
              </span>
              <div>
                <h3 className="text-white font-heading font-bold">Start Your Journey</h3>
                <p className="text-white/60 font-body text-sm">Begin your transformation with the tools and guidance provided.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider hover:bg-[#7DD8C0] transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/shop"
            className="px-8 py-4 border border-[#2E2E2E] text-white font-heading font-bold uppercase tracking-wider hover:border-[#AFECDB] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Support */}
        <p className="mt-12 text-white/40 font-body text-sm">
          Questions about your order? Contact us at{" "}
          <a href="mailto:support@gynergy.com" className="text-[#AFECDB] hover:underline">
            support@gynergy.com
          </a>
        </p>
      </div>
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#AFECDB] mx-auto"></div>
        <p className="mt-4 text-white/60 font-body">Loading...</p>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CheckoutSuccessContent />
    </Suspense>
  )
}
