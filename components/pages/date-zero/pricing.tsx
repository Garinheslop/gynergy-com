"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

export function DateZeroPricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tiers = [
    {
      name: "Essential",
      price: "$497",
      description: "Perfect for couples ready to start their transformation journey.",
      features: [
        "All 8 video modules",
        "Weekly workbooks & exercises",
        "Private community access",
        "ARIA AI companion (Basic)",
        "Date night ideas library",
        "30-day satisfaction guarantee"
      ],
      popular: false,
      accent: "#AFECDB",
      cta: "Start Essential"
    },
    {
      name: "Complete",
      price: "$997",
      description: "Everything in Essential plus live coaching and premium support.",
      features: [
        "Everything in Essential",
        "Weekly live group coaching calls",
        "Priority community support",
        "ARIA AI companion (Premium)",
        "Private couple check-ins (2x)",
        "Bonus: Communication Toolkit",
        "60-day satisfaction guarantee"
      ],
      popular: true,
      accent: "#F8F812",
      cta: "Start Complete"
    },
    {
      name: "VIP",
      price: "$2,497",
      description: "The ultimate transformation with private 1:1 coaching.",
      features: [
        "Everything in Complete",
        "4 private couple coaching sessions",
        "Direct message access to Garin & Yesi",
        "Personalized transformation plan",
        "Bonus: Intimacy Mastery Workshop",
        "Bonus: Conflict Resolution Intensive",
        "90-day satisfaction guarantee"
      ],
      popular: false,
      accent: "#AFECDB",
      cta: "Apply for VIP"
    }
  ]

  return (
    <section id="pricing" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#AFECDB]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F8F812]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Investment"
          labelVariant="teal"
          title="Choose Your Path"
          subtitle="Every package is backed by our satisfaction guarantee. If you don't see meaningful progress, we'll work with you or refund your investment."
        />

        {/* Pricing cards */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#F8F812] text-black px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border p-8 transition-all hover:shadow-xl ${
                  tier.popular
                    ? 'border-[#F8F812]/50 shadow-lg shadow-[#F8F812]/10'
                    : 'border-[#2E2E2E] hover:border-white/20'
                }`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h3
                    className="text-xl font-bold mb-2 font-inter"
                    style={{ color: tier.accent }}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-4xl font-bold text-white font-inter">
                      {tier.price}
                    </span>
                    <span className="text-white/40 text-sm">one-time</span>
                  </div>
                  <p className="text-white/60 text-sm">{tier.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${tier.accent}20` }}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={tier.accent}
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  href={tier.name === "VIP" ? "/date-zero/apply" : "/date-zero/checkout"}
                  variant={tier.popular ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-[#2E2E2E] rounded-full">
            <span className="text-2xl">🛡️</span>
            <span className="text-white/70 text-sm">
              <strong className="text-white">Risk-Free:</strong> Full refund if you don't see progress
            </span>
          </div>
        </motion.div>

        {/* Payment options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 text-center text-white/40 text-sm"
        >
          <p>Payment plans available • Secure checkout • Instant access</p>
        </motion.div>
      </div>
    </section>
  )
}
