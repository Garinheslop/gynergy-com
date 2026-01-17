"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function SpeakingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F812]/5 via-black to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase bg-[#F8F812]/10 text-[#F8F812] border border-[#F8F812]/20 mb-6">
              Speaking & Events
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-inter leading-tight">
              Inspire Your{" "}
              <span className="text-[#F8F812]">Audience</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Bring transformational energy to your organization, conference, or
              event. Garin delivers powerful keynotes, interactive workshops, and
              corporate training that create lasting impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#book" size="lg">
                Book Garin
              </Button>
              <Button href="#topics" variant="outline" size="lg">
                View Topics
              </Button>
            </div>

            {/* Value Props */}
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <p className="text-2xl font-bold text-[#F8F812] font-inter">5 Pillars</p>
                <p className="text-white/50">Transformation Framework</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#AFECDB] font-inter">Custom</p>
                <p className="text-white/50">Tailored Content</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-inter">Impact</p>
                <p className="text-white/50">Lasting Change</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F8F812]/20 via-transparent to-[#AFECDB]/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-black">
                <div className="aspect-[4/5] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F8F812]/20 to-[#AFECDB]/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#F8F812]/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
                      </svg>
                    </div>
                    <p className="text-white/40 text-sm">
                      Garin on Stage
                      <br />
                      <span className="text-xs text-white/30">Photo placeholder</span>
                    </p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-[#F8F812] text-black px-5 py-2 rounded-full font-bold text-sm"
              >
                Available 2025
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
