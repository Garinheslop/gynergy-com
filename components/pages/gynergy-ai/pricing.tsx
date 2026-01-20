"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { WaitlistForm } from "./waitlist-form"

export function PricingSection() {
  const ref = useRef(null)
  const waitlistRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedTier, setSelectedTier] = useState<string>("essential")

  const tiers = [
    {
      id: "essential",
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Your foundation for transformation",
      perfectFor: "Testing the methodology, exploring which pillar to focus first",
      outcome: "Clearer on what's actually broken, excited about the framework",
      features: [
        "5-Pillar System Access",
        "ARIA AI Coach (24/7)",
        "Progress Dashboard",
        "Community Access",
      ],
    },
    {
      id: "accelerator",
      name: "Accelerator",
      price: "$99",
      period: "/month",
      description: "For committed transformers",
      perfectFor: "Serious about transformation, ready to invest in yourself",
      outcome: "Real progress in 90 days, seen by your coaches, compounding wins",
      featured: true,
      features: [
        "Everything in Essential",
        "Weekly Deep-Dive Calls",
        "Accountability Partner Matching",
        "Advanced Analytics",
      ],
    },
    {
      id: "mastery",
      name: "Mastery",
      price: "$197",
      period: "/month",
      description: "White-glove transformation",
      perfectFor: "Going all-in, running a high-stress life, need personal guidance",
      outcome: "Like having a personal board of directors, fast-tracked to breakthrough",
      features: [
        "Everything in Accelerator",
        "Monthly 1-on-1 Coaching Call",
        "Priority Support",
        "Exclusive Content Library",
        "White-Glove Onboarding",
      ],
    },
  ]

  const scrollToWaitlist = (tierId: string) => {
    setSelectedTier(tierId)
    waitlistRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#050505] to-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#AFECDB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Prelaunch Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30">
            <span className="w-2 h-2 bg-[#AFECDB] animate-pulse" />
            <span className="text-[#AFECDB] text-xs font-oswald uppercase tracking-wider">
              Prelaunch - Founding Member Access Open
            </span>
          </div>
        </motion.div>

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
            Pick the tier that matches your commitment level.{" "}
            <span className="text-[#AFECDB]">Join the waitlist to lock in founding member pricing.</span>
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
              className={`relative p-6 border transition-all duration-300 cursor-pointer ${
                tier.featured
                  ? "bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-[#AFECDB]/50 shadow-lg shadow-[#AFECDB]/10"
                  : selectedTier === tier.id
                  ? "bg-[#0D0D0D] border-[#AFECDB]/30"
                  : "bg-[#0D0D0D] border-[#2E2E2E] hover:border-[#2E2E2E]"
              }`}
              onClick={() => scrollToWaitlist(tier.id)}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#AFECDB] text-black text-xs font-oswald font-bold tracking-wider">
                  MOST POPULAR
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

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/60 font-inter">
                      <svg
                        className="w-4 h-4 text-[#AFECDB] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

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

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    scrollToWaitlist(tier.id)
                  }}
                  className={`w-full py-3 text-sm font-oswald uppercase tracking-wider font-bold transition-all ${
                    tier.featured
                      ? "bg-[#AFECDB] text-black hover:bg-[#AFECDB]/90"
                      : "bg-transparent border border-[#AFECDB]/50 text-[#AFECDB] hover:bg-[#AFECDB]/10"
                  }`}
                >
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founding Member Waitlist Section */}
        <motion.div
          ref={waitlistRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto mb-12"
          id="waitlist"
        >
          <div className="border border-[#AFECDB]/30 bg-gradient-to-b from-[#AFECDB]/10 to-transparent p-8">
            <div className="text-center mb-6">
              <p className="font-oswald text-xl text-[#AFECDB] tracking-wide mb-2">
                JOIN THE FOUNDING COHORT
              </p>
              <p className="text-white/60 text-sm font-inter">
                Early-stage pricing locked in for founding members.
              </p>
              <p className="text-white/80 text-lg font-inter mt-2">
                <span className="text-[#AFECDB] font-bold">$49/month</span> locked in forever.
              </p>
              <p className="text-white/40 text-xs font-inter mt-1">
                Price increases to $99/month Q2 2026.
              </p>
            </div>

            <WaitlistForm selectedTier={selectedTier} />
          </div>
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-10 h-10 mx-auto mb-3 bg-[#AFECDB]/10 border border-[#AFECDB]/30 flex items-center justify-center">
                <span className="font-bebas text-lg text-[#AFECDB]">1</span>
              </div>
              <p className="font-oswald text-sm uppercase tracking-wider text-white/70 mb-1">
                Join Waitlist
              </p>
              <p className="text-white/40 text-xs font-inter">
                Free to join. No credit card required.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 mx-auto mb-3 bg-[#AFECDB]/10 border border-[#AFECDB]/30 flex items-center justify-center">
                <span className="font-bebas text-lg text-[#AFECDB]">2</span>
              </div>
              <p className="font-oswald text-sm uppercase tracking-wider text-white/70 mb-1">
                Get Early Access
              </p>
              <p className="text-white/40 text-xs font-inter">
                Founding members get first access when we launch.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 mx-auto mb-3 bg-[#AFECDB]/10 border border-[#AFECDB]/30 flex items-center justify-center">
                <span className="font-bebas text-lg text-[#AFECDB]">3</span>
              </div>
              <p className="font-oswald text-sm uppercase tracking-wider text-white/70 mb-1">
                Lock In $49/mo
              </p>
              <p className="text-white/40 text-xs font-inter">
                Your founding member rate stays locked forever.
              </p>
            </div>
          </div>
        </motion.div>

        {/* B2B & Enterprise */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
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
