"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

export function AOEPricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const included = [
    "Weekly live coaching calls with Garin & Rolando",
    "Private community access (24/7)",
    "Monthly expert interviews",
    "5-Pillar transformation framework",
    "Accountability partner matching",
    "Monthly challenges & competitions",
    "Resource library & templates",
    "Direct access to founders",
  ]

  const comparisons = [
    { item: "Private coaching (1 call)", value: "$500+" },
    { item: "Masterclass community access", value: "$300/mo" },
    { item: "Accountability group", value: "$150/mo" },
    { item: "Expert interview access", value: "$100/mo" },
  ]

  return (
    <section id="join" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Join the Brotherhood"
          labelVariant="gold"
          title="Your Investment in Transformation"
          subtitle="Less than a coffee per day. More transformation than you thought possible."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#FFD700]/30 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FFD700]/10 to-transparent p-8 border-b border-[#FFD700]/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white font-inter">AOE Brotherhood</h3>
                  <p className="text-white/60 mt-1">Monthly Membership</p>
                </div>
                <div className="text-left lg:text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#FFD700] font-bebas tracking-wide">$79</span>
                    <span className="text-white/50 text-lg">/month</span>
                  </div>
                  <p className="text-white/40 text-sm">Cancel anytime</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* What's included */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Everything Included:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value comparison */}
              <div className="mb-8 p-6 bg-[#FFD700]/5 border border-[#FFD700]/20">
                <h4 className="text-white font-semibold mb-4">The Real Value:</h4>
                <div className="space-y-3">
                  {comparisons.map((comp) => (
                    <div key={comp.item} className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">{comp.item}</span>
                      <span className="text-white/40 line-through text-sm">{comp.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#FFD700]/20 flex justify-between items-center">
                  <span className="text-white font-semibold">Total Value</span>
                  <div className="text-right">
                    <span className="text-white/40 line-through text-lg">$1,050+</span>
                    <span className="text-[#FFD700] font-bold text-2xl ml-3">$79</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button href="/checkout?product=aoe-brotherhood" size="lg" className="w-full md:w-auto md:px-16">
                  Join the Brotherhood Now
                </Button>
                <p className="text-white/50 text-sm mt-4">
                  Join today and get immediate access to the community
                </p>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-[#1A1A1A] border-t border-[#2E2E2E] p-6">
              <div className="flex items-center justify-center gap-4 text-center">
                <svg className="w-8 h-8 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
                <div className="text-left">
                  <p className="text-white font-semibold">30-Day Money-Back Guarantee</p>
                  <p className="text-white/50 text-sm">Not for you? Full refund. No questions asked.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upgrade path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-[#1A1A1A]/50 border border-[#2E2E2E] p-6 max-w-xl">
              <p className="text-white/60 text-sm mb-2">
                Ready for the next level?
              </p>
              <p className="text-white font-inter mb-4">
                AOE members get priority access to <span className="text-[#FFD700] font-semibold">LVL 5 LIFE</span>,
                our exclusive $15,000 mastermind experience.
              </p>
              <a
                href="/level-5-life"
                className="text-[#FFD700] text-sm font-oswald uppercase tracking-wider hover:underline"
              >
                Learn About LVL 5 LIFE →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
