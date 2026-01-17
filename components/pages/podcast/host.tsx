"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function PodcastHost() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const topics = [
    "Relationship dynamics & communication",
    "Health optimization & longevity",
    "Mindset & mental performance",
    "Purpose & meaningful work",
    "Entrepreneurship & leadership",
    "Personal transformation stories"
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F8F812]/20 via-transparent to-[#AFECDB]/20 rounded-2xl blur-xl" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-black">
                <div className="aspect-square bg-gradient-to-br from-[#1A1A1A] via-[#0D0D0D] to-black flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F8F812]/20 to-[#AFECDB]/20 flex items-center justify-center">
                      <span className="text-5xl">🎙️</span>
                    </div>
                    <p className="text-white/40 text-sm">
                      Garin & Yesi
                      <br />
                      <span className="text-xs text-white/30">Your Hosts</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-[#F8F812] text-black px-5 py-2 rounded-full font-bold text-sm"
              >
                New Episode Weekly
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SectionHeader
              label="Your Hosts"
              labelVariant="gold"
              title="Garin & Yesi"
              align="left"
            />

            <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
              <p>
                Every week, Garin and Yesi bring you authentic conversations
                about the real challenges and breakthroughs on the path to
                living at Level 5.
              </p>
              <p>
                No fluff, no hype—just practical wisdom from their own journey
                and insights from extraordinary guests who've transformed their lives.
              </p>
            </div>

            {/* Topics covered */}
            <div className="mt-8">
              <p className="text-white/40 text-sm uppercase tracking-wider mb-4">
                Topics We Cover
              </p>
              <div className="grid grid-cols-2 gap-3">
                {topics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F8F812]" />
                    {topic}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Be a guest CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 p-6 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#AFECDB]/10 flex items-center justify-center text-2xl">
                  🎤
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold">Want to be a guest?</h4>
                  <p className="text-white/50 text-sm">Share your transformation story</p>
                </div>
                <a
                  href="mailto:podcast@gynergy.com"
                  className="px-4 py-2 bg-[#AFECDB]/10 text-[#AFECDB] rounded-lg text-sm font-medium hover:bg-[#AFECDB]/20 transition-colors"
                >
                  Apply
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
