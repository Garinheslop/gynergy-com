"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

// SVG Icons
const ARIAIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
    <path strokeLinecap="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01" />
  </svg>
)

const CommunityIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const ProgressIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

export function GynergyAISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <ARIAIcon />,
      title: "ARIA AI Coach",
      description: "24/7 personalized coaching powered by our proprietary transformation intelligence. Your growth companion that learns and evolves with you."
    },
    {
      icon: <CommunityIcon />,
      title: "Community Matching",
      description: "Connect with like-minded individuals on similar journeys. Build your tribe of high-performers committed to growth."
    },
    {
      icon: <ProgressIcon />,
      title: "Progress Tracking",
      description: "Measure what matters across all five pillars. Data-driven insights to accelerate your transformation."
    }
  ]

  const tiers = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "For individuals starting their journey",
      cta: "Get Started"
    },
    {
      name: "Accelerator",
      price: "$99",
      period: "/month",
      description: "For committed transformers",
      cta: "Accelerate",
      featured: true
    },
    {
      name: "Mastery",
      price: "$197",
      period: "/month",
      description: "For serious high-performers",
      cta: "Master"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AFECDB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            GYNERGY<span className="text-[#AFECDB]">.AI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto font-inter text-lg"
          >
            The AI-powered platform behind every GYNERGY transformation.
            Technology that learns, adapts, and grows with you.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
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

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-center font-oswald text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-8">
            Choose Your Path
          </h3>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                <div className="text-center">
                  <p className="font-oswald text-sm uppercase tracking-wider text-white/50 mb-2">
                    {tier.name}
                  </p>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="font-bebas text-4xl text-white">{tier.price}</span>
                    <span className="text-white/40 text-sm font-inter">{tier.period}</span>
                  </div>
                  <p className="text-white/50 text-xs font-inter mb-4">
                    {tier.description}
                  </p>
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

        {/* B2B & Enterprise */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-white/40 font-inter">
            <a href="/partners" className="hover:text-[#AFECDB] transition-colors">
              For Coaches & Programs
            </a>
            <span className="w-1 h-1 bg-white/20" />
            <a href="/enterprise" className="hover:text-[#AFECDB] transition-colors">
              Enterprise Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
