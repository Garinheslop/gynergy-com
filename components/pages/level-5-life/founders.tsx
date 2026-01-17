"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function L5LFounders() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F8F812]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F8F812]/20 via-transparent to-[#AFECDB]/20 rounded-2xl blur-xl" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-black">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#1A1A1A] via-[#0D0D0D] to-black flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F8F812]/20 to-[#AFECDB]/20 flex items-center justify-center">
                      <span className="text-5xl">👫</span>
                    </div>
                    <p className="text-white/40 text-sm">
                      Garin & Yesi
                      <br />
                      <span className="text-xs text-white/30">Photo placeholder</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl px-5 py-3"
              >
                <p className="text-[#F8F812] font-bold text-xl">10+ Years</p>
                <p className="text-white/50 text-xs">Coaching Experience</p>
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
              label="Your Coaches"
              labelVariant="gold"
              title="Meet Garin & Yesi"
              subtitle=""
              align="left"
            />

            <div className="mt-6 space-y-6 text-white/70 leading-relaxed">
              <p>
                <strong className="text-white">Garin</strong> is a serial entrepreneur,
                certified coach, and the visionary behind GYNERGY. After building and
                selling multiple businesses, he dedicated his life to helping others
                achieve their highest potential.
              </p>
              <p>
                <strong className="text-white">Yesi</strong> brings heart, intuition,
                and deep expertise in relationships and emotional intelligence. Together,
                they've coached hundreds of individuals and couples to breakthrough results.
              </p>
              <p>
                Their combined approach addresses both the strategic and emotional
                aspects of transformation—because lasting change requires both.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Clients Coached", value: "500+" },
                { label: "Countries Reached", value: "15+" },
                { label: "Retreats Hosted", value: "20+" },
                { label: "Lives Transformed", value: "1,000+" }
              ].map((stat) => (
                <div key={stat.label} className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-4">
                  <p className="text-2xl font-bold text-[#F8F812] font-inter">{stat.value}</p>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-[#F8F812]/5 to-transparent border-l-4 border-[#F8F812] rounded-r-xl"
            >
              <p className="text-white italic">
                "We've lived the transformation we teach. Level 5 Life isn't theory—it's
                the exact system we used to build the life we once only dreamed of."
              </p>
              <p className="text-white/50 text-sm mt-3">— Garin & Yesi</p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
