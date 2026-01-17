"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function EventsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#AFECDB]/5 via-black to-black" />
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
            Events & Retreats
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-inter leading-tight"
          >
            Transform In{" "}
            <span className="text-[#AFECDB]">Person</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Join us for immersive retreats, live workshops, and transformational
            events in stunning locations around the world.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="#upcoming" size="lg" variant="secondary">
              View Upcoming Events
            </Button>
            <Button href="#retreats" variant="outline" size="lg">
              Explore Retreats
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
