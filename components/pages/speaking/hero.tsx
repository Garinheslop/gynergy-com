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

            {/* Stats */}
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <p className="text-2xl font-bold text-[#F8F812] font-inter">100+</p>
                <p className="text-white/50">Events Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#AFECDB] font-inter">50K+</p>
                <p className="text-white/50">Audience Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-inter">4.9★</p>
                <p className="text-white/50">Speaker Rating</p>
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
                      <span className="text-5xl">🎤</span>
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
