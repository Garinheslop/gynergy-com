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
      description: "Transform your health, relationships, wealth, mindset, and purpose simultaneously. A powerful framework for holistic success.",
      audiences: ["Corporate leaders", "Entrepreneurs", "High achievers"],
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
        </svg>
      )
    },
    {
      title: "The Art of Connection",
      subtitle: "Keynote | 45-60 min",
      description: "How to build meaningful relationships that fuel both personal fulfillment and professional success.",
      audiences: ["Teams", "Organizations", "Leadership"],
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    {
      title: "Mindset of Elite Performers",
      subtitle: "Workshop | 2-4 hours",
      description: "Breakthrough limiting beliefs and develop the mental frameworks used by the world's top achievers.",
      audiences: ["Sales teams", "Athletes", "Executives"],
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"/>
        </svg>
      )
    },
    {
      title: "Communication Mastery",
      subtitle: "Workshop | Half/Full Day",
      description: "Transform how your team communicates. Reduce conflict, increase clarity, and build trust.",
      audiences: ["Corporate teams", "Leadership", "Managers"],
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
        </svg>
      )
    },
    {
      title: "Purpose-Driven Leadership",
      subtitle: "Keynote | 45-60 min",
      description: "Lead with meaning and inspire your team to achieve extraordinary results through aligned purpose.",
      audiences: ["C-suite", "Founders", "Team leads"],
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      )
    },
    {
      title: "Custom Programs",
      subtitle: "Tailored Experience",
      description: "Work with Garin to design a custom keynote or workshop tailored to your organization's specific needs.",
      audiences: ["Any organization"],
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    }
  ]

  return (
    <section id="topics" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Speaking Topics"
          labelVariant="teal"
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
              className="group bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-6 hover:border-[#AFECDB]/30 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center text-[#AFECDB] mb-4 group-hover:scale-110 transition-transform">
                {topic.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-1 font-body group-hover:text-[#AFECDB] transition-colors">
                {topic.title}
              </h3>
              <p className="text-[#AFECDB] text-xs mb-3">{topic.subtitle}</p>
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
            {
              title: "Keynotes",
              time: "45-90 min",
              icon: (
                <svg className="w-6 h-6 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
                </svg>
              )
            },
            {
              title: "Workshops",
              time: "Half/Full Day",
              icon: (
                <svg className="w-6 h-6 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/>
                </svg>
              )
            },
            {
              title: "Corporate Programs",
              time: "Multi-day",
              icon: (
                <svg className="w-6 h-6 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              )
            }
          ].map((format) => (
            <div
              key={format.title}
              className="flex items-center gap-4 p-4 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl"
            >
              {format.icon}
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
