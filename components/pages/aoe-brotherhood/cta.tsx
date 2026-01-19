"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function AOECTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 via-[#FFD700]/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)`
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-oswald uppercase tracking-wider">
              Your Next Chapter Starts Now
            </span>
          </motion.div>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-6">
            STOP WAITING.{" "}
            <span className="text-[#FFD700]">START BECOMING.</span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl font-inter leading-relaxed mb-8 max-w-2xl mx-auto">
            You&apos;ve been thinking about making a change. You&apos;ve been waiting for the right time.
            The right time is now. The right place is here. The right people are waiting.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <Button href="/checkout?product=aoe-brotherhood" size="xl">
              Join the Brotherhood — $79/month
            </Button>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Instant access
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                30-day guarantee
              </span>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-[#2E2E2E]"
          >
            <p className="text-white/40 text-sm mb-6">Join men who are already transforming</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-3xl font-bebas text-[#FFD700]">100+</p>
                <p className="text-white/50 text-xs">Active Members</p>
              </div>
              <div className="w-px h-12 bg-[#2E2E2E] hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl font-bebas text-[#FFD700]">52</p>
                <p className="text-white/50 text-xs">Calls Per Year</p>
              </div>
              <div className="w-px h-12 bg-[#2E2E2E] hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl font-bebas text-[#FFD700]">5</p>
                <p className="text-white/50 text-xs">Pillars of Life</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
