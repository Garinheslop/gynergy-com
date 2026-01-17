"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function DateZeroCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#AFECDB]/5 via-transparent to-[#AFECDB]/5" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#AFECDB]/20 to-[#AFECDB]/5 flex items-center justify-center"
          >
            <span className="text-5xl">💑</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Your Relationship Deserves{" "}
            <span className="text-[#AFECDB]">This Investment</span>
          </h2>

          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            In 8 weeks, you could be living the relationship you've always dreamed of.
            Or you could be exactly where you are today. The choice is yours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button href="#pricing" size="lg" variant="secondary">
              Start Your Transformation
            </Button>
            <Button href="/date-zero/quiz" variant="outline" size="lg">
              Not Sure? Take the Quiz
            </Button>
          </div>

          {/* Urgency/social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>12 couples enrolled this week</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Secure checkout</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Instant access</span>
            </div>
          </motion.div>

          {/* Guarantee reminder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-6 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl inline-block"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">🛡️</span>
              <div className="text-left">
                <p className="text-white font-semibold">Risk-Free Guarantee</p>
                <p className="text-white/60 text-sm">
                  Complete the program and see results, or get a full refund. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
