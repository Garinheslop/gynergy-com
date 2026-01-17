"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

// SVG Icons for The 45 Day Awakening
const GratitudeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const ServiceIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const DiscoverIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const TransformIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const JournalIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

export function DateZeroPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <GratitudeIcon />,
      title: "Gratitude",
      description: "45 days of intentional appreciation that rewires your perspective"
    },
    {
      icon: <ServiceIcon />,
      title: "Service",
      description: "Optional Mexico retreat building homes for families in need"
    },
    {
      icon: <DiscoverIcon />,
      title: "Discover",
      description: "Uncover your true self through guided self-reflection"
    },
    {
      icon: <TransformIcon />,
      title: "Transform",
      description: "Emerge with clarity, purpose, and lasting change"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-[#AFECDB]/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-[#AFECDB]/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Section header */}
            <span className="inline-block text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#AFECDB] mb-4">
              Personal Transformation
            </span>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4">
              THE 45 DAY AWAKENING
            </h2>
            <p className="text-white/60 max-w-lg font-inter leading-relaxed mb-4">
              A transformative 45-day journey that begins with gratitude and ends with
              a completely new perspective on life. This isn't just a journal—it's an
              entire self-guided experience designed to help you master the self to serve the world.
            </p>
            <p className="text-white/40 text-sm font-inter mb-8">
              <span className="text-[#AFECDB]">Includes the Date Zero Gratitude Journal</span> —
              45 days of guided reflection, prompts, and exercises.
            </p>

            {/* Features grid - SVG icons */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center flex-shrink-0 text-[#AFECDB]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-oswald font-semibold text-sm mb-1 tracking-wide uppercase">
                      {feature.title}
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed font-inter">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-6 items-center"
            >
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] px-5 py-3">
                <p className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1">Full Experience</p>
                <p className="text-[#FFD700] font-bebas text-2xl">$1,497</p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] px-5 py-3">
                <p className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1">Journal Only</p>
                <p className="text-[#AFECDB] font-bebas text-2xl">$197</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="/the-45-day-awakening" variant="secondary">
                Start Your Awakening
              </Button>
              <Button href="/the-45-day-awakening#journal" variant="ghost">
                Get the Journal
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative ring - sharp aesthetic */}
              <div className="absolute inset-0 border border-[#AFECDB]/20" />
              <div className="absolute inset-4 border border-[#AFECDB]/10" />
              <div className="absolute inset-8 border border-[#AFECDB]/5" />

              {/* Center content */}
              <div className="absolute inset-16 bg-gradient-to-br from-[#AFECDB]/10 to-transparent flex items-center justify-center">
                <div className="text-center">
                  {/* Journal Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#AFECDB]/20 border border-[#AFECDB]/30 flex items-center justify-center text-[#AFECDB]">
                    <JournalIcon />
                  </div>
                  <p className="text-[#AFECDB] font-bebas text-3xl tracking-wide">45 DAYS</p>
                  <p className="text-white/60 text-sm font-inter">To Awakening</p>
                </div>
              </div>

              {/* Floating elements - sharp squares */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#AFECDB]" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FFD700]" />
              </motion.div>

              {/* Stats badges - sharp corners */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute top-10 right-0 bg-[#1A1A1A] border border-[#2E2E2E] px-4 py-3"
              >
                <p className="text-[#AFECDB] font-bebas text-2xl">95%</p>
                <p className="text-white/50 text-xs font-inter">Complete The Journey</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute bottom-10 left-0 bg-[#1A1A1A] border border-[#2E2E2E] px-4 py-3"
              >
                <p className="text-[#FFD700] font-bebas text-2xl">500+</p>
                <p className="text-white/50 text-xs font-inter">Lives Transformed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
