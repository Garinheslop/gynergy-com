"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function L5LHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F812]/5 via-black to-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, rgba(248, 248, 18, 0.15) 0%, transparent 40%)`
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F8F812]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase bg-[#F8F812]/10 text-[#F8F812] border border-[#F8F812]/20 mb-8"
          >
            12-Month Mastermind Experience
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight font-inter leading-tight"
          >
            Live at Your{" "}
            <span className="text-[#F8F812]">Highest Potential</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Level 5 Life is a 12-month mastermind for high-achievers ready to transform
            every dimension of their existence—health, relationships, mindset, and purpose—
            with world-class coaching and an elite community.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button href="#apply" size="lg">
              Apply Now
            </Button>
            <Button href="#program" variant="outline" size="lg">
              Explore the Journey
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span>Limited to 20 Members</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <span>2 Exclusive Retreats</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span>AI-Powered Growth</span>
            </div>
          </motion.div>

          {/* Price anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16 inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-[#2E2E2E] rounded-full"
          >
            <span className="text-white/60">Investment:</span>
            <span className="text-2xl font-bold text-[#F8F812] font-inter">$15,000</span>
            <span className="text-white/40">/ 12 months</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#F8F812] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
