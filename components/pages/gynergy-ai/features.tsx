"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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

export function GynergyAIFeatures() {
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

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AFECDB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#AFECDB]/50" />
            <span className="text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#AFECDB]">
              What You Get
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#AFECDB]/50" />
          </div>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4">
            THREE PILLARS OF{" "}
            <span className="text-[#AFECDB]">ARIA</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
            </motion.div>
          ))}
        </motion.div>

        {/* What ARIA Is NOT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="font-oswald text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-8 text-center">
            What ARIA Is NOT
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#1A1A1A]/30 border border-[#2E2E2E]/50 p-4">
              <p className="text-red-400/80 text-sm font-inter mb-1">Not A Wellness App</p>
              <p className="text-white/40 text-xs font-inter">Those measure steps and calories—useful, but limited</p>
            </div>
            <div className="bg-[#1A1A1A]/30 border border-[#2E2E2E]/50 p-4">
              <p className="text-red-400/80 text-sm font-inter mb-1">Not A Meditation App</p>
              <p className="text-white/40 text-xs font-inter">Good for 10 minutes, then you&apos;re back in chaos</p>
            </div>
            <div className="bg-[#1A1A1A]/30 border border-[#2E2E2E]/50 p-4">
              <p className="text-red-400/80 text-sm font-inter mb-1">Not A Chatbot</p>
              <p className="text-white/40 text-xs font-inter">ChatGPT doesn&apos;t know your history or goals</p>
            </div>
            <div className="bg-[#1A1A1A]/30 border border-[#2E2E2E]/50 p-4">
              <p className="text-red-400/80 text-sm font-inter mb-1">Not A Generic Coach</p>
              <p className="text-white/40 text-xs font-inter">One voice trying to solve 5 different problems</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-[#AFECDB] font-oswald text-lg tracking-wide">
              ARIA IS: 5 specialized coaches. One interface. A methodology that transforms all 5 pillars simultaneously.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
