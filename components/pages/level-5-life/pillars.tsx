"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function L5LPillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pillars = [
    {
      id: "health",
      number: "01",
      title: "Health",
      subtitle: "Physical Vitality",
      description: "Optimize your body through cutting-edge nutrition, strategic movement, and recovery protocols. Build sustainable habits that give you boundless energy for everything that matters.",
      icon: "💪",
      color: "#AFECDB",
      outcomes: [
        "Peak physical performance",
        "Sustainable energy levels",
        "Optimal body composition",
        "Enhanced longevity"
      ]
    },
    {
      id: "relationships",
      number: "02",
      title: "Relationships",
      subtitle: "Deep Connection",
      description: "Transform your closest relationships into sources of growth and fulfillment. Master communication, deepen intimacy, and build partnerships that elevate every area of life.",
      icon: "❤️",
      color: "#F8F812",
      outcomes: [
        "Profound intimacy",
        "Clear communication",
        "Aligned partnerships",
        "Meaningful connections"
      ]
    },
    {
      id: "mindset",
      number: "03",
      title: "Mindset",
      subtitle: "Mental Mastery",
      description: "Rewire limiting beliefs and develop unshakeable confidence. Master your thoughts, emotions, and responses to become the person who achieves your biggest goals.",
      icon: "🧠",
      color: "#AFECDB",
      outcomes: [
        "Bulletproof confidence",
        "Emotional intelligence",
        "Growth orientation",
        "Mental resilience"
      ]
    },
    {
      id: "purpose",
      number: "04",
      title: "Purpose",
      subtitle: "Meaningful Impact",
      description: "Discover and pursue your unique calling. Align your daily actions with your deepest values and build a life of significance that leaves a lasting legacy.",
      icon: "🎯",
      color: "#F8F812",
      outcomes: [
        "Crystal-clear vision",
        "Aligned actions",
        "Meaningful contribution",
        "Lasting legacy"
      ]
    }
  ]

  return (
    <section id="program" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-[#F8F812]/20" />
      <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent to-[#F8F812]/20" />

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="The Four Pillars"
          labelVariant="gold"
          title="Transform Every Dimension"
          subtitle="Level 5 Life addresses the four fundamental areas that determine your quality of life. When all four are optimized, you experience a level of fulfillment most people never achieve."
        />

        {/* Pillars grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              id={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-8 transition-all duration-500 hover:shadow-xl"
                style={{
                  ["--hover-color" as string]: pillar.color,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: pillar.color }}
                    >
                      {pillar.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1 font-inter group-hover:text-[#F8F812] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-white/50 text-sm">{pillar.subtitle}</p>
                  </div>
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}30`,
                      borderWidth: '1px'
                    }}
                  >
                    {pillar.icon}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Outcomes */}
                <div className="space-y-2">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
                    Outcomes
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {pillar.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="flex items-center gap-2 text-sm text-white/70"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: pillar.color }}
                        />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${pillar.color}05 0%, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-[#2E2E2E] rounded-full">
            <span className="text-[#F8F812]">✦</span>
            <span className="text-white/70 text-sm">
              All four pillars work together—progress in one accelerates growth in all
            </span>
            <span className="text-[#AFECDB]">✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
