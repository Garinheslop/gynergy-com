"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function GynergyAICTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#050505] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#AFECDB]/10 via-[#AFECDB]/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(175, 236, 219, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-oswald uppercase tracking-wider">
              Your Transformation Starts Now
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-6">
            STOP SWITCHING APPS.
            <br />
            <span className="text-[#AFECDB]">START GETTING RESULTS.</span>
          </h2>

          {/* Description */}
          <p className="text-white/70 text-lg md:text-xl font-inter leading-relaxed mb-8 max-w-2xl mx-auto">
            You&apos;ve tried the fragmented approach. 7 apps. 7 logins. Zero
            coherence. It&apos;s time for something that actually works.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button href="#pricing" size="xl">
              Join the Founding Cohort
            </Button>
            <Button href="#how-it-works" variant="secondary" size="xl">
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#AFECDB]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#AFECDB]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#AFECDB]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              Founding member pricing locked in
            </span>
          </motion.div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-12 border-t border-[#2E2E2E]"
          >
            <div className="inline-block border border-[#AFECDB]/30 bg-[#AFECDB]/5 px-8 py-4">
              <p className="font-oswald text-sm uppercase tracking-wider text-[#AFECDB] mb-1">
                Limited to 100 Founding Members
              </p>
              <p className="text-white/60 text-xs font-inter">
                $49/month locked in forever. Price increases to $99/month Q2
                2026.
              </p>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex justify-center items-center gap-8 flex-wrap"
          >
            <div className="text-center">
              <p className="text-3xl font-bebas text-[#AFECDB]">5</p>
              <p className="text-white/50 text-xs">Specialized Coaches</p>
            </div>
            <div className="w-px h-12 bg-[#2E2E2E] hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bebas text-[#AFECDB]">24/7</p>
              <p className="text-white/50 text-xs">Available</p>
            </div>
            <div className="w-px h-12 bg-[#2E2E2E] hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bebas text-[#AFECDB]">1</p>
              <p className="text-white/50 text-xs">Unified Dashboard</p>
            </div>
            <div className="w-px h-12 bg-[#2E2E2E] hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bebas text-[#AFECDB]">∞</p>
              <p className="text-white/50 text-xs">Transformation</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
