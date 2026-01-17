"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* Subtle diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(255,215,0,0.1) 100px,
            rgba(255,215,0,0.1) 101px
          )`
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#FFD700] mb-6"
            >
              Master The Self To Serve The World
            </motion.span>

            {/* Main Headline - Bebas Neue */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 tracking-wide leading-[0.9]"
            >
              TRANSFORM SUCCESS
              <br />
              <span className="text-[#FFD700]">INTO SIGNIFICANCE</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-inter"
            >
              Join Garin & Yesi on a transformational journey through health,
              relationships, wealth, mindset, and purpose. Your Level 5 Life awaits.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button href="/level-5-life" size="lg">
                Start Your Journey
              </Button>
              <Button href="/about" variant="secondary" size="lg">
                Meet Garin & Yesi
              </Button>
            </motion.div>

            {/* Trust indicators - no emojis */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-white/50 text-sm font-inter"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#FFD700]" />
                <span>Elite Mastermind</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#AFECDB]" />
                <span>Service Retreat</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#FFD700]" />
                <span>1-on-1 Coaching</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FFD700]/20 via-transparent to-[#AFECDB]/20 blur-xl" />

              {/* Image container with real founder image */}
              <div className="relative overflow-hidden border border-white/10">
                <Image
                  src="/founders/garin-yesi-optimized.webp"
                  alt="Garin & Yesi - Founders of GYNERGY"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge - sharp corners per spec */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-[#FFD700] text-black px-6 py-3 font-oswald font-bold text-sm tracking-wider shadow-lg shadow-[#FFD700]/20"
              >
                EST. 2024
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#FFD700]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
