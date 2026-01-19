"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Complete Your Assessment",
      description:
        "Take our comprehensive 5-Pillar Assessment. In 15 minutes, ARIA understands where you are across Health, Relationships, Wealth, Mindset, and Purpose.",
    },
    {
      number: "02",
      title: "Meet Your Coaches",
      description:
        "Your 5 specialized AI coaches introduce themselves. Each learns your history, goals, and context. They work together behind the scenes, but speak to you individually.",
    },
    {
      number: "03",
      title: "Transform With Support",
      description:
        "Daily check-ins. Weekly deep-dives. Community calls. Your coaches adapt as you grow. Your dashboard shows progress across all 5 pillars. You see the whole picture.",
    },
  ]

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(175, 236, 219, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(175, 236, 219, 0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#AFECDB]/50" />
            <span className="text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#AFECDB]">
              The Process
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#AFECDB]/50" />
          </div>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4">
            HOW IT{" "}
            <span className="text-[#AFECDB]">WORKS</span>
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-2xl mx-auto">
            Three simple steps to complete clarity
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative flex items-start gap-6 md:gap-10 mb-12 last:mb-0"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#AFECDB]/10 border border-[#AFECDB]/30">
                  <span className="font-bebas text-3xl md:text-4xl text-[#AFECDB]">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="font-oswald text-xl md:text-2xl font-semibold text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/60 font-inter text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-10 top-20 md:top-24 w-px h-16 bg-gradient-to-b from-[#AFECDB]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 font-inter text-sm mb-4">
            Ready to see the complete picture?
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-[#AFECDB] font-oswald text-sm uppercase tracking-wider hover:gap-3 transition-all"
          >
            Choose Your Plan
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
