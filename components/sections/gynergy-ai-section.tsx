"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

// SVG Icons
const BoardIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const UnifiedIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    />
  </svg>
)

const TribeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

export function GynergyAISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <BoardIcon />,
      title: "5 Dedicated Coaches",
      description:
        "Not one generic chatbot. Health Coach, Wealth Coach, Relationships Coach, Mindset Coach, Legacy Coach—each a specialist in their domain who knows your history and goals.",
    },
    {
      icon: <UnifiedIcon />,
      title: "One Unified Dashboard",
      description:
        "Health metrics. Financial progress. Relationship depth. Mindset clarity. Purpose alignment. Not just data—insight. See patterns that were invisible when everything was scattered.",
    },
    {
      icon: <TribeIcon />,
      title: "Your Transformation Tribe",
      description:
        "Weekly community calls. Real accountability. Shared wins. High-achievers like you—working all 5 pillars simultaneously. You push each other. You celebrate each other.",
    },
  ]

  const tiers = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Your foundation for transformation",
      perfectFor: "Testing the methodology, exploring which pillar to focus first",
      outcome: "Clearer on what's actually broken, excited about the framework",
      cta: "Start Essential",
    },
    {
      name: "Accelerator",
      price: "$99",
      period: "/month",
      description: "For committed transformers",
      perfectFor: "Serious about transformation, ready to invest in yourself",
      outcome: "Real progress in 90 days, seen by your coaches, compounding wins",
      cta: "Accelerate Now",
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
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AFECDB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header - New Compelling Copy */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#AFECDB]/50" />
            <span className="text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#AFECDB]">
              The Technology
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#AFECDB]/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4"
          >
            ARIA: Your Personal{" "}
            <span className="text-[#AFECDB]">Board of Directors</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto font-inter text-lg mb-2"
          >
            Stop switching apps. Start getting real results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white/50 max-w-xl mx-auto font-inter text-base"
          >
            One unified interface. 5 specialized coaches. Complete clarity.
          </motion.p>
        </div>

        {/* The Problem - Emotional Hook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <div className="bg-gradient-to-b from-[#1A1A1A]/50 to-transparent border border-[#2E2E2E]/50 p-8">
            <p className="text-white/70 font-inter text-base leading-relaxed mb-4">
              Health app. Finance tracker. Meditation. Therapy. Coaching.
              Journal. Workout app.
            </p>
            <p className="text-white/50 font-inter text-sm mb-4">
              That&apos;s 7 different tools. 7 different logins. 7 different
              feedback loops.
              <br />
              Nothing talks to each other. It feels fragmented because it{" "}
              <span className="text-white/80">is</span> fragmented.
            </p>
            <p className="text-[#AFECDB] font-oswald text-lg tracking-wide">
              ARIA changes everything.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-8 transition-all duration-500 hover:border-[#AFECDB]/30"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#AFECDB]/10 border border-[#AFECDB]/20 text-[#AFECDB] mb-6 transition-transform duration-500 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-oswald text-xl font-semibold text-white mb-3 tracking-wide uppercase">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Pricing Tiers - Outcome Focused */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-center font-oswald text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-8">
            Choose Your Path
          </h3>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
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
                    href="/gynergy-ai"
                    variant={tier.featured ? "primary" : "secondary"}
                    size="sm"
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Founding Member Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
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
