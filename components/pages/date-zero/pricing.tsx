"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function DateZeroPricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tiers = [
    {
      name: "Date Zero Journal",
      price: "$197",
      description: "The standalone self-guided gratitude experience. Perfect for those ready to start their transformation independently.",
      features: [
        "45-day guided journal with daily prompts",
        "Morning & evening gratitude rituals",
        "Reflection exercises for each phase",
        "Digital companion guide",
        "Lifetime access to journal content",
        "30-day satisfaction guarantee"
      ],
      popular: false,
      accent: "#AFECDB",
      cta: "Get the Journal"
    },
    {
      name: "The 45 Day Awakening",
      price: "$1,497",
      description: "The complete transformation experience with coaching, community, and the Date Zero Journal included.",
      features: [
        "Date Zero Journal (included)",
        "Weekly live coaching with Garin & Yesi",
        "Private community of fellow awakeners",
        "ARIA AI companion for 24/7 support",
        "Shadow work & forgiveness practices",
        "Service mindset development",
        "Mexico retreat preparation materials",
        "45-day satisfaction guarantee"
      ],
      popular: true,
      accent: "#FFD700",
      cta: "Begin Your Awakening"
    },
    {
      name: "Awakening + Retreat Bundle",
      price: "$2,497",
      originalPrice: "$2,994",
      savings: "SAVE $500",
      description: "The ultimate transformation: 45 Day Awakening + Service Retreat in Ensenada, Mexico.",
      features: [
        "Everything in The 45 Day Awakening",
        "Service Retreat in Ensenada, Mexico",
        "Transportation from San Diego",
        "Beachfront lodging included",
        "All meals provided",
        "Home building service project",
        "Orphanage visit & donations",
        "\"Break Free\" teachings & workshops",
        "90-day satisfaction guarantee"
      ],
      popular: false,
      accent: "#AFECDB",
      cta: "Get the Bundle"
    }
  ]

  return (
    <section id="pricing" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#AFECDB]/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFD700]/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFD700] text-sm font-medium tracking-wider uppercase font-oswald">
            INVESTMENT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 font-bebas">
            CHOOSE YOUR PATH TO TRANSFORMATION
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-inter">
            Every option is backed by our satisfaction guarantee. If you commit to the work
            and don't experience meaningful transformation, we'll make it right.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6">
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
                  <span className="bg-[#FFD700] text-black px-4 py-1 text-xs font-bold font-oswald">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Savings badge for bundle */}
              {tier.savings && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#AFECDB] text-black px-4 py-1 text-xs font-bold font-oswald">
                    {tier.savings}
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border p-8 transition-all hover:shadow-xl ${
                  tier.popular
                    ? 'border-[#FFD700]/50 shadow-lg shadow-[#FFD700]/10'
                    : 'border-[#2E2E2E] hover:border-white/20'
                }`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h3
                    className="text-xl font-bold mb-2 font-oswald"
                    style={{ color: tier.accent }}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2 mb-3">
                    {tier.originalPrice && (
                      <span className="text-white/40 text-lg line-through">
                        {tier.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-white font-inter">
                      {tier.price}
                    </span>
                    <span className="text-white/40 text-sm">one-time</span>
                  </div>
                  <p className="text-white/60 text-sm font-inter">{tier.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div
                        className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"
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
                      <span className="text-white/70 font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  href="#contact"
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

        {/* Guarantee badge - SVG shield icon instead of emoji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-[#2E2E2E]">
            <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            <span className="text-white/70 text-sm font-inter">
              <strong className="text-white">Risk-Free Guarantee:</strong> Complete the program and see transformation, or get a full refund
            </span>
          </div>
        </motion.div>

        {/* Payment options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 text-center text-white/40 text-sm font-inter"
        >
          <p>Payment plans available • Secure checkout • Instant access</p>
        </motion.div>
      </div>
    </section>
  )
}
