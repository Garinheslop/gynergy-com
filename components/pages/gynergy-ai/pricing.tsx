"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const tiers = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Your foundation for transformation",
      perfectFor: "Testing the methodology, exploring which pillar to focus first",
      outcome: "Clearer on what's actually broken, excited about the framework",
      cta: "Start Essential",
      href: "/checkout?product=gynergy-ai-essential",
    },
    {
      name: "Accelerator",
      price: "$99",
      period: "/month",
      description: "For committed transformers",
      perfectFor: "Serious about transformation, ready to invest in yourself",
      outcome: "Real progress in 90 days, seen by your coaches, compounding wins",
      cta: "Accelerate Now",
      href: "/checkout?product=gynergy-ai-accelerator",
      featured: true,
    },
    {
      name: "Mastery",
      price: "$197",
      period: "/month",
      description: "White-glove transformation",
      perfectFor: "Going all-in, running a high-stress life, need personal guidance",
      outcome: "Like having a personal board of directors, fast-tracked to breakthrough",
      cta: "Join Mastery",
      href: "/checkout?product=gynergy-ai-mastery",
    },
  ]

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#050505] to-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#AFECDB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#AFECDB]/50" />
            <span className="text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#AFECDB]">
              Choose Your Path
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#AFECDB]/50" />
          </div>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4">
            INVESTMENT{" "}
            <span className="text-[#AFECDB]">OPTIONS</span>
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-2xl mx-auto">
            Pick the tier that matches your commitment level
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative p-6 border transition-all duration-300 ${
                tier.featured
                  ? "bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-[#AFECDB]/50 shadow-lg shadow-[#AFECDB]/10"
                  : "bg-[#0D0D0D] border-[#2E2E2E] hover:border-[#2E2E2E]"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#AFECDB] text-black text-xs font-oswald font-bold tracking-wider">
                  POPULAR
                </div>
              )}
              <div>
                <p className="font-oswald text-sm uppercase tracking-wider text-white/50 mb-2 text-center">
                  {tier.name}
                </p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="font-bebas text-4xl text-white">
                    {tier.price}
                  </span>
                  <span className="text-white/40 text-sm font-inter">
                    {tier.period}
                  </span>
                </div>
                <p className="text-white/70 text-sm font-inter mb-4 text-center">
                  {tier.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-white/40 text-xs font-oswald uppercase tracking-wider mb-1">
                      Perfect if you&apos;re:
                    </p>
                    <p className="text-white/60 text-xs font-inter">
                      {tier.perfectFor}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-oswald uppercase tracking-wider mb-1">
                      What you&apos;ll feel:
                    </p>
                    <p className="text-[#AFECDB]/80 text-xs font-inter">
                      {tier.outcome}
                    </p>
                  </div>
                </div>

                <Button
                  href={tier.href}
                  variant={tier.featured ? "primary" : "secondary"}
                  size="sm"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founding Member Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto text-center mb-12"
        >
          <div className="border border-[#AFECDB]/30 bg-[#AFECDB]/5 p-6">
            <p className="font-oswald text-lg text-[#AFECDB] tracking-wide mb-2">
              JOIN THE FOUNDING COHORT
            </p>
            <p className="text-white/60 text-sm font-inter mb-3">
              Early-stage pricing locked in for founding members.
              <br />
              <span className="text-white/80">
                $49/month locked in forever.
              </span>
            </p>
            <p className="text-white/40 text-xs font-inter">
              Limited to 100 founding members. Free to join waitlist.
            </p>
          </div>
        </motion.div>

        {/* B2B & Enterprise */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-white/40 font-inter">
            <a
              href="/partners"
              className="hover:text-[#AFECDB] transition-colors"
            >
              For Coaches & Programs
            </a>
            <span className="w-1 h-1 bg-white/20" />
            <a
              href="/enterprise"
              className="hover:text-[#AFECDB] transition-colors"
            >
              Enterprise Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
