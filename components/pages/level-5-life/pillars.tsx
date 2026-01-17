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
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
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
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      color: "#F8F812",
      outcomes: [
        "Profound intimacy",
        "Clear communication",
        "Aligned partnerships",
        "Meaningful connections"
      ]
    },
    {
      id: "wealth",
      number: "03",
      title: "Wealth",
      subtitle: "Financial Abundance",
      description: "Build lasting financial freedom through strategic wealth creation and smart money management. Develop the mindset and systems that generate prosperity across generations.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      color: "#AFECDB",
      outcomes: [
        "Financial freedom",
        "Wealth multiplication",
        "Strategic investments",
        "Generational prosperity"
      ]
    },
    {
      id: "mindset",
      number: "04",
      title: "Mindset",
      subtitle: "Mental Mastery",
      description: "Rewire limiting beliefs and develop unshakeable confidence. Master your thoughts, emotions, and responses to become the person who achieves your biggest goals.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.89-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"/>
        </svg>
      ),
      color: "#F8F812",
      outcomes: [
        "Bulletproof confidence",
        "Emotional intelligence",
        "Growth orientation",
        "Mental resilience"
      ]
    },
    {
      id: "purpose",
      number: "05",
      title: "Purpose",
      subtitle: "Meaningful Impact",
      description: "Discover and pursue your unique calling. Align your daily actions with your deepest values and build a life of significance that leaves a lasting legacy.",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
        </svg>
      ),
      color: "#AFECDB",
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
          label="The Five Pillars"
          labelVariant="gold"
          title="Transform Every Dimension"
          subtitle="Level 5 Life addresses the five fundamental areas that determine your quality of life. When all five are optimized, you experience a level of fulfillment most people never achieve."
        />

        {/* Pillars grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-8 transition-all duration-500 hover:shadow-xl hover:border-[#F8F812]/30"
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
                    className="w-14 h-14 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}30`,
                      borderWidth: '1px',
                      color: pillar.color
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
                          className="w-1.5 h-1.5"
                          style={{ backgroundColor: pillar.color }}
                        />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-[#2E2E2E]">
            <svg className="w-4 h-4 text-[#F8F812]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
            <span className="text-white/70 text-sm">
              All five pillars work together—progress in one accelerates growth in all
            </span>
            <svg className="w-4 h-4 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
