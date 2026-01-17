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
            className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase bg-[#AFECDB]/10 text-[#AFECDB] border border-[#AFECDB]/20 mb-8"
          >
            8-Week Relationship Transformation
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight font-inter leading-tight"
          >
            Rediscover the{" "}
            <span className="text-[#AFECDB]">Love</span>{" "}
            That Brought You Together
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Date Zero is a proven 8-week program designed for couples ready to transform
            their relationship from the ground up—whether you're reigniting a spark or
            building a stronger foundation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button href="#pricing" size="lg" variant="secondary">
              Start Your Transformation
            </Button>
            <Button href="/date-zero/quiz" variant="outline" size="lg">
              Take the Relationship Quiz
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
              <span className="text-2xl">💑</span>
              <span>500+ Couples Transformed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>100% Satisfaction Guarantee</span>
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
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#AFECDB] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
