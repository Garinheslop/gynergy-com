"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { NewsletterForm } from "@/components/ui/newsletter-form"

export function EventsNewsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="newsletter" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#AFECDB]/5 via-transparent to-[#AFECDB]/5" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#2E2E2E] p-8 lg:p-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#AFECDB]/10 border border-[#AFECDB]/30 flex items-center justify-center">
              <span className="text-3xl">🎟️</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-inter">
              Never Miss an Event
            </h2>

            <p className="text-white/60 mb-8">
              Be the first to know about new retreats, workshops, and live events.
              Get early access and member-only pricing.
            </p>

            <div className="max-w-md mx-auto">
              <NewsletterForm variant="default" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
