"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function SpeakingTopics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const topics = [
    {
      title: "The Level 5 Life Framework",
      subtitle: "Keynote | 45-60 min",
      description: "Transform your health, relationships, mindset, and purpose simultaneously. A powerful framework for holistic success.",
      audiences: ["Corporate leaders", "Entrepreneurs", "High achievers"],
      icon: "🎯"
    },
    {
      title: "The Art of Connection",
      subtitle: "Keynote | 45-60 min",
      description: "How to build meaningful relationships that fuel both personal fulfillment and professional success.",
      audiences: ["Teams", "Couples events", "Leadership"],
      icon: "❤️"
    },
    {
      title: "Mindset of Elite Performers",
      subtitle: "Workshop | 2-4 hours",
      description: "Breakthrough limiting beliefs and develop the mental frameworks used by the world's top achievers.",
      audiences: ["Sales teams", "Athletes", "Executives"],
      icon: "🧠"
    },
    {
      title: "Communication Mastery",
      subtitle: "Workshop | Half/Full Day",
      description: "Transform how your team communicates. Reduce conflict, increase clarity, and build trust.",
      audiences: ["Corporate teams", "Leadership", "Managers"],
      icon: "🗣️"
    },
    {
      title: "Purpose-Driven Leadership",
      subtitle: "Keynote | 45-60 min",
      description: "Lead with meaning and inspire your team to achieve extraordinary results through aligned purpose.",
      audiences: ["C-suite", "Founders", "Team leads"],
      icon: "🌟"
    },
    {
      title: "Custom Programs",
      subtitle: "Tailored Experience",
      description: "Work with Garin to design a custom keynote or workshop tailored to your organization's specific needs.",
      audiences: ["Any organization"],
      icon: "✨"
    }
  ]

  return (
    <section id="topics" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Speaking Topics"
          labelVariant="gold"
          title="Topics That Transform"
          subtitle="Each presentation is tailored to your audience and can be delivered as a keynote, workshop, or multi-day training."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-6 hover:border-[#F8F812]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#F8F812]/10 border border-[#F8F812]/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {topic.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 font-inter group-hover:text-[#F8F812] transition-colors">
                {topic.title}
              </h3>
              <p className="text-[#F8F812] text-xs mb-3">{topic.subtitle}</p>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {topic.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {topic.audiences.map((audience) => (
                  <span
                    key={audience}
                    className="px-2 py-1 rounded-md bg-[#2E2E2E] text-white/50 text-xs"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Formats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "Keynotes", time: "45-90 min", icon: "🎤" },
            { title: "Workshops", time: "Half/Full Day", icon: "📋" },
            { title: "Corporate Programs", time: "Multi-day", icon: "🏢" }
          ].map((format) => (
            <div
              key={format.title}
              className="flex items-center gap-4 p-4 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl"
            >
              <span className="text-2xl">{format.icon}</span>
              <div>
                <p className="text-white font-semibold">{format.title}</p>
                <p className="text-white/50 text-sm">{format.time}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
