"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function DateZeroProgram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases = [
    {
      phase: "Days 1-15",
      title: "Foundation of Gratitude",
      description: "Establish your daily gratitude practice. Learn to see abundance where you once saw scarcity. Begin shifting your fundamental perspective on life.",
      focus: "Awareness",
      highlights: [
        "Daily Date Zero journal prompts",
        "Morning gratitude rituals",
        "Identifying limiting beliefs",
        "Creating your transformation vision"
      ]
    },
    {
      phase: "Days 16-30",
      title: "Deep Inner Work",
      description: "Dive deep into self-discovery. Confront the stories that have held you back. Begin rewriting your narrative with intention and purpose.",
      focus: "Transformation",
      highlights: [
        "Shadow work exercises",
        "Forgiveness practices",
        "Values clarification",
        "Weekly coaching calls"
      ]
    },
    {
      phase: "Days 31-45",
      title: "Integration & Service",
      description: "Integrate your transformation into daily life. Prepare for the Service Retreat. Learn how gratitude becomes the foundation for serving others.",
      focus: "Purpose",
      highlights: [
        "Service mindset development",
        "Community connection",
        "Mexico retreat preparation",
        "Lifelong practice establishment"
      ]
    }
  ]

  const inclusions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Date Zero Journal",
      description: "45 days of guided prompts and reflection exercises"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/>
        </svg>
      ),
      title: "Weekly Coaching",
      description: "Live group calls with Garin & Yesi"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: "Private Community",
      description: "Connect with fellow awakeners on the journey"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: "Service Retreat",
      description: "Life-changing trip to Ensenada, Mexico"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
      ),
      title: "ARIA AI Support",
      description: "24/7 AI companion for personalized guidance"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
        </svg>
      ),
      title: "Bonus Resources",
      description: "Meditations, guides, and bonus content"
    }
  ]

  return (
    <section id="program" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFD700] text-sm font-medium tracking-wider uppercase font-oswald">
            THE JOURNEY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 font-bebas">
            45 DAYS THAT WILL CHANGE YOUR LIFE
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-inter">
            This isn't a quick fix. It's a fundamental rewiring of how you experience
            life—built on the unshakeable foundation of gratitude.
          </p>
        </motion.div>

        {/* Program Phases */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] border border-[#2E2E2E] p-8 hover:border-[#FFD700]/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#FFD700] text-sm font-medium tracking-wider font-oswald">
                  {phase.phase}
                </span>
                <span className="px-2 py-1 bg-[#FFD700]/10 text-[#FFD700] text-xs font-oswald">
                  {phase.focus}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-oswald">
                {phase.title}
              </h3>
              <p className="text-white/60 mb-6 font-inter text-sm">
                {phase.description}
              </p>
              <ul className="space-y-2">
                {phase.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-[#AFECDB] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12 font-bebas">
            EVERYTHING YOU NEED TO TRANSFORM
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-[#1A1A1A] border border-[#2E2E2E]"
              >
                <div className="w-12 h-12 bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0 text-[#FFD700]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 font-oswald">{item.title}</h4>
                  <p className="text-white/50 text-sm font-inter">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
