"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function DateZeroHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#AFECDB]/5 via-black to-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(175, 236, 219, 0.1) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 text-xs font-medium tracking-wider uppercase bg-[#AFECDB]/10 text-[#AFECDB] border border-[#AFECDB]/20 mb-8"
          >
            45-Day Personal Transformation
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight font-display leading-tight"
          >
            THE 45 DAY{" "}
            <span className="text-[#AFECDB]">AWAKENING</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-4 leading-relaxed max-w-2xl mx-auto font-body"
          >
            A transformational journey through gratitude that will fundamentally
            change how you see yourself, your relationships, and your purpose.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg text-[#AFECDB] mb-8 font-heading"
          >
            Featuring the Date Zero Journal - Your Daily Companion for Transformation
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button href="#pricing" size="lg" variant="primary">
              BEGIN YOUR AWAKENING
            </Button>
            <Button href="#program" variant="outline" size="lg">
              LEARN MORE
            </Button>
          </motion.div>

          {/* Trust indicators - SVG icons, no emojis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
              <span>45 Days of Guided Transformation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>Gratitude-Centered Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Service Retreat Included</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#AFECDB]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
