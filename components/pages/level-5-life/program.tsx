"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function L5LProgram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const inclusions = [
    {
      icon: "📞",
      title: "Weekly Coaching Calls",
      description: "Live group coaching with Garin every week. Get direct guidance, hot seats, and breakthrough strategies.",
      highlight: "52 calls/year"
    },
    {
      icon: "🏝️",
      title: "2 In-Person Retreats",
      description: "Immersive retreat experiences in stunning locations. Deep work, breakthrough exercises, and lifelong bonds.",
      highlight: "All-inclusive"
    },
    {
      icon: "👥",
      title: "Elite Community",
      description: "Private community of high-achievers on the same journey. Accountability, support, and collaboration.",
      highlight: "24/7 access"
    },
    {
      icon: "🤖",
      title: "ARIA AI Companion",
      description: "Personal AI coach available anytime. Custom guidance, habit tracking, and daily optimization.",
      highlight: "Included"
    },
    {
      icon: "📚",
      title: "Complete Curriculum",
      description: "Comprehensive modules covering all four pillars with exercises, resources, and implementation guides.",
      highlight: "Lifetime access"
    },
    {
      icon: "🎯",
      title: "1:1 Strategy Sessions",
      description: "Private coaching sessions with Garin to create your personalized transformation roadmap.",
      highlight: "4 sessions"
    }
  ]

  const timeline = [
    { month: "Month 1-3", focus: "Foundation", description: "Establish baselines, set goals, build habits" },
    { month: "Month 4-6", focus: "Acceleration", description: "Deep work on pillars, first retreat, breakthroughs" },
    { month: "Month 7-9", focus: "Integration", description: "Connect the pillars, optimize systems, scale results" },
    { month: "Month 10-12", focus: "Mastery", description: "Cement transformation, second retreat, future planning" }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="What's Included"
          labelVariant="gold"
          title="The Complete Experience"
          subtitle="Everything you need for a total life transformation, delivered over 12 months of focused growth."
        />

        {/* Inclusions grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-6 hover:border-[#F8F812]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8F812]/10 border border-[#F8F812]/20 flex items-center justify-center flex-shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white font-inter">
                      {item.title}
                    </h3>
                    <span className="px-2 py-1 rounded-md bg-[#F8F812]/10 text-[#F8F812] text-xs whitespace-nowrap">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12 font-inter">
            Your 12-Month Journey
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8F812]/30 to-transparent hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.month}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="relative"
                >
                  {/* Connector dot */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F8F812] hidden lg:block" />

                  <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 text-center lg:mt-8">
                    <p className="text-[#F8F812] text-sm font-medium mb-2">{phase.month}</p>
                    <h4 className="text-white font-bold text-lg mb-2 font-inter">{phase.focus}</h4>
                    <p className="text-white/50 text-sm">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
