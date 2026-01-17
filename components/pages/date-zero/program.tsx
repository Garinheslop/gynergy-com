"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function DateZeroProgram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const weeks = [
    {
      week: 1,
      title: "The Reset",
      description: "Clear the slate and create space for your new beginning. Address unresolved tensions and establish new communication patterns.",
      focus: "Foundation"
    },
    {
      week: 2,
      title: "Rediscovery",
      description: "Remember who you fell in love with. Reconnect with the qualities that first attracted you to each other.",
      focus: "Connection"
    },
    {
      week: 3,
      title: "Communication Mastery",
      description: "Learn the art of truly hearing and being heard. Transform how you express needs and navigate conflict.",
      focus: "Understanding"
    },
    {
      week: 4,
      title: "Emotional Intimacy",
      description: "Deepen your emotional connection. Build trust through vulnerability and create safe spaces for authentic expression.",
      focus: "Intimacy"
    },
    {
      week: 5,
      title: "Physical Connection",
      description: "Reignite physical intimacy with intention. Explore new ways to express love and desire.",
      focus: "Passion"
    },
    {
      week: 6,
      title: "Shared Vision",
      description: "Align on your future together. Create shared goals, dreams, and a roadmap for your relationship.",
      focus: "Alignment"
    },
    {
      week: 7,
      title: "Growth Partnership",
      description: "Learn to support each other's individual growth while strengthening your bond as a couple.",
      focus: "Support"
    },
    {
      week: 8,
      title: "Forever Forward",
      description: "Cement your transformation with rituals and practices that will sustain your connection for life.",
      focus: "Sustainability"
    }
  ]

  const inclusions = [
    {
      icon: "📹",
      title: "Video Modules",
      description: "8 comprehensive video lessons with Garin & Yesi"
    },
    {
      icon: "📝",
      title: "Workbooks",
      description: "Interactive exercises and reflection prompts for each week"
    },
    {
      icon: "👥",
      title: "Live Coaching",
      description: "Weekly group coaching calls with Q&A"
    },
    {
      icon: "💬",
      title: "Community",
      description: "Private community of couples on the same journey"
    },
    {
      icon: "🤖",
      title: "ARIA AI",
      description: "24/7 AI companion for personalized guidance"
    },
    {
      icon: "🎁",
      title: "Bonuses",
      description: "Date night ideas, conversation starters, and more"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="The Journey"
          labelVariant="teal"
          title="8 Weeks to Transform Your Relationship"
          subtitle="Each week builds on the last, creating a comprehensive transformation that addresses every aspect of your relationship."
        />

        {/* Week timeline */}
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#AFECDB]/50 via-[#AFECDB]/20 to-transparent hidden lg:block" />

          <div className="grid gap-6">
            {weeks.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative lg:pl-20"
              >
                {/* Week number indicator */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#AFECDB]/10 border border-[#AFECDB]/30 flex items-center justify-center hidden lg:flex">
                  <span className="text-[#AFECDB] font-bold">{week.week}</span>
                </div>

                <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-6 hover:border-[#AFECDB]/30 transition-all">
                  <div className="flex flex-wrap items-start gap-4 justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="lg:hidden text-[#AFECDB] text-sm font-medium">
                          Week {week.week}
                        </span>
                        <span className="px-2 py-1 rounded-md bg-[#AFECDB]/10 text-[#AFECDB] text-xs">
                          {week.focus}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-inter">
                        {week.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {week.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12 font-inter">
            What's Included
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#AFECDB]/10 flex items-center justify-center flex-shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
