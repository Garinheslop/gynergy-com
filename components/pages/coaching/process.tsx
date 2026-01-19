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
      icon: (
        <svg className="w-8 h-8 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Discovery Call",
      description: "If you're a fit, we'll schedule a call to dive deeper into your vision and determine the best path forward.",
      icon: (
        <svg className="w-8 h-8 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Onboarding",
      description: "Complete comprehensive assessments across all five pillars. Receive your personalized transformation blueprint.",
      icon: (
        <svg className="w-8 h-8 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
        </svg>
      )
    },
    {
      number: "04",
      title: "Transform",
      description: "Begin your journey with regular coaching sessions, ongoing support, and accountability to ensure results.",
      icon: (
        <svg className="w-8 h-8 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3z"/>
        </svg>
      )
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="How It Works"
          labelVariant="teal"
          title="Your Journey Starts Here"
          subtitle="A proven process to ensure we're the right fit and set you up for transformation."
        />

        <div className="mt-16 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AFECDB]/30 to-transparent -translate-y-1/2" />

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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#AFECDB]/20 to-[#AFECDB]/20 rounded-2xl blur-lg" />
                  <div className="relative w-full h-full bg-[#1A1A1A] border border-[#AFECDB]/30 rounded-2xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <span className="text-[#AFECDB] font-bold text-sm tracking-wider">
                  STEP {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3 font-body">
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
