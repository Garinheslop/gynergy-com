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
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
        </svg>
      ),
      title: "Weekly Coaching Calls",
      description: "Live group coaching with Garin every week. Get direct guidance, hot seats, and breakthrough strategies.",
      highlight: "52 calls/year"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
        </svg>
      ),
      title: "2 In-Person Retreats",
      description: "Immersive retreat experiences in stunning locations. Deep work, breakthrough exercises, and lifelong bonds.",
      highlight: "All-inclusive"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "Elite Community",
      description: "Private community of high-achievers on the same journey. Accountability, support, and collaboration.",
      highlight: "24/7 access"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S9.83 13 9 13s-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-1-4c-.83 0-1.5-.67-1.5-1.5S14.17 10 15 10s1.5.67 1.5 1.5S15.83 13 15 13z"/>
        </svg>
      ),
      title: "ARIA AI Companion",
      description: "Personal AI coach available anytime. Custom guidance, habit tracking, and daily optimization.",
      highlight: "Included"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
        </svg>
      ),
      title: "Complete Curriculum",
      description: "Comprehensive modules covering all five pillars with exercises, resources, and implementation guides.",
      highlight: "Lifetime access"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
        </svg>
      ),
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
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-6 hover:border-[#F8F812]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F8F812]/10 border border-[#F8F812]/20 flex items-center justify-center flex-shrink-0 text-[#F8F812]">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white font-inter">
                      {item.title}
                    </h3>
                    <span className="px-2 py-1 bg-[#F8F812]/10 text-[#F8F812] text-xs whitespace-nowrap">
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
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#F8F812] hidden lg:block" />

                  <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6 text-center lg:mt-8">
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
