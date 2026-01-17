"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function CoachingApproach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pillars = [
    {
      icon: "💪",
      title: "Health",
      description: "Optimize your physical vitality, energy, and longevity through evidence-based protocols tailored to your body."
    },
    {
      icon: "❤️",
      title: "Relationships",
      description: "Deepen your connections, improve communication, and create the love life you've always wanted."
    },
    {
      icon: "🧠",
      title: "Mindset",
      description: "Break through limiting beliefs, develop unshakeable confidence, and master your emotional state."
    },
    {
      icon: "🎯",
      title: "Purpose",
      description: "Clarify your vision, align with your calling, and build a life of meaning and impact."
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="The Approach"
          labelVariant="gold"
          title="Holistic Transformation"
          subtitle="We don't just fix one area of your life. We transform everything simultaneously through the Level 5 Life framework."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-6 hover:border-[#F8F812]/30 transition-all text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-[#F8F812]/10 border border-[#F8F812]/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-inter group-hover:text-[#F8F812] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-xl md:text-2xl text-white/80 italic leading-relaxed">
            "Private coaching is for those who want to move faster, go deeper, and create results that others think are impossible."
          </blockquote>
          <p className="mt-4 text-[#F8F812]">— Garin Heslop</p>
        </motion.div>
      </div>
    </section>
  )
}
