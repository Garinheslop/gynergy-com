"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { NewsletterForm } from "@/components/ui/newsletter-form"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    "Weekly transformation tips",
    "Early access to events",
    "Exclusive content & insights",
    "Community updates"
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-transparent to-[#AFECDB]/5" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#AFECDB]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-8 lg:p-12 relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              {/* Content */}
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-block text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#FFD700] mb-6"
                >
                  Join the Community
                </motion.span>

                <h2 className="font-bebas text-3xl lg:text-4xl text-white tracking-wide mb-4">
                  GET WEEKLY TRANSFORMATION
                </h2>

                <p className="text-white/60 mb-6 font-inter">
                  Join our growing community receiving weekly insights on health, relationships,
                  mindset, and purpose. No spam, just value.
                </p>

                {/* Benefits list - SVG checkmarks instead of emojis */}
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-white/70 text-sm font-inter"
                    >
                      <span className="w-5 h-5 bg-[#FFD700]/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <NewsletterForm variant="hero" />

                {/* Trust indicators */}
                <div className="mt-6 flex items-center justify-center gap-4 text-white/40 text-xs font-inter">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    No spam
                  </span>
                  <span>|</span>
                  <span>Unsubscribe anytime</span>
                  <span>|</span>
                  <span>Growing community</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner elements - sharp corners */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#FFD700]/20" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-[#AFECDB]/20" />
          </div>
        </motion.div>

        {/* Community callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm font-inter">
            Join our community of people committed to{" "}
            <span className="text-[#FFD700]">mastering the self to serve the world</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
