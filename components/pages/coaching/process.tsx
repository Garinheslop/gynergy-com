"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function CoachingProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Complete the application form below. Tell us about your goals, challenges, and why you're ready for transformation.",
      icon: "📝"
    },
    {
      number: "02",
      title: "Discovery Call",
      description: "If you're a fit, we'll schedule a call to dive deeper into your vision and determine the best path forward.",
      icon: "📞"
    },
    {
      number: "03",
      title: "Onboarding",
      description: "Complete comprehensive assessments across all four pillars. Receive your personalized transformation blueprint.",
      icon: "🎯"
    },
    {
      number: "04",
      title: "Transform",
      description: "Begin your journey with regular coaching sessions, ongoing support, and accountability to ensure results.",
      icon: "🚀"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="How It Works"
          labelVariant="gold"
          title="Your Journey Starts Here"
          subtitle="A proven process to ensure we're the right fit and set you up for transformation."
        />

        <div className="mt-16 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8F812]/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Number badge */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F8F812]/20 to-[#AFECDB]/20 rounded-2xl blur-lg" />
                  <div className="relative w-full h-full bg-[#1A1A1A] border border-[#F8F812]/30 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                </div>

                <span className="text-[#F8F812] font-bold text-sm tracking-wider">
                  STEP {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 font-inter">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Commitment note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 text-center">
            <h4 className="text-white font-bold mb-2">Important Note</h4>
            <p className="text-white/60 text-sm">
              Private coaching requires full commitment. We only work with clients who are
              ready to do the work and invest in their transformation. If you're looking
              for a quick fix, this isn't for you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
