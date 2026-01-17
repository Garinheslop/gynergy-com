"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CoachingHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AFECDB]/5 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-wider uppercase bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/20 mb-6 font-oswald">
              Private Coaching
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-bebas leading-tight">
              1-ON-1 COACHING WITH{" "}
              <span className="text-[#FFD700]">GARIN & YESI</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed font-inter">
              Deep, transformational work for high-performers ready to break
              through their limitations and create extraordinary results in
              health, relationships, mindset, and purpose.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#apply" size="lg" variant="primary">
                Apply Now
              </Button>
              <Button href="#packages" variant="outline" size="lg">
                View Packages
              </Button>
            </div>

            {/* Key points - SVG checkmarks, no emojis */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                "Personalized approach",
                "Direct access to coaches",
                "Accelerated results",
                "Application required"
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#FFD700] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="text-white/60 font-inter">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coach Images - Garin & Yesi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="flex gap-4 max-w-lg mx-auto">
              {/* Garin */}
              <div className="relative flex-1">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#FFD700]/20 via-transparent to-[#FFD700]/10 blur-xl" />
                <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
                  <Image
                    src="/founders/Garin.JPEG"
                    alt="Garin - Co-Founder of GYNERGY"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-white font-semibold font-oswald">GARIN</p>
                  <p className="text-white/50 text-xs font-inter">Business, Mindset, Purpose</p>
                </div>
              </div>

              {/* Yesi */}
              <div className="relative flex-1">
                <div className="absolute -inset-2 bg-gradient-to-br from-rose-500/20 via-transparent to-fuchsia-500/10 blur-xl" />
                <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
                  <Image
                    src="/founders/YESI.JPG"
                    alt="Yesi - Co-Founder of GYNERGY"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-white font-semibold font-oswald">YESI</p>
                  <p className="text-white/50 text-xs font-inter">Health, Relationships, Feminine Energy</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black px-5 py-2 font-bold text-sm font-oswald"
            >
              Limited Spots Available
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
