"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

// Step Icons
const GratitudeStepIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

const CommunityStepIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const ServiceStepIcon = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

export function ThreeStepPlanSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      icon: <GratitudeStepIcon />,
      title: "Begin With Gratitude",
      description: "Start your 45-day awakening journey with the Date Zero Journal. Transform your perspective through daily gratitude practice.",
      cta: "Get the Journal",
      ctaHref: "/shop",
      price: "From $197"
    },
    {
      number: "02",
      icon: <CommunityStepIcon />,
      title: "Join The Community",
      description: "Connect with GYNERGY.AI and a tribe of like-minded transformers. Get 24/7 coaching, progress tracking, and accountability.",
      cta: "Explore GYNERGY.AI",
      ctaHref: "/gynergy-ai",
      price: "From $49/mo"
    },
    {
      number: "03",
      icon: <ServiceStepIcon />,
      title: "Serve & Transform",
      description: "Complete your transformation at our Ensenada Service Retreat. Build homes, serve communities, and discover your true purpose.",
      cta: "Reserve Your Spot",
      ctaHref: "/service-retreat",
      price: "$1,497"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AFECDB]/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-heading font-semibold tracking-[0.2em] uppercase text-[#AFECDB] mb-4"
          >
            Your Path to Transformation
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-white tracking-wide mb-4"
          >
            THREE STEPS TO YOUR
            <br />
            <span className="text-[#AFECDB]">LEVEL 5 LIFE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 font-body max-w-2xl mx-auto"
          >
            A proven pathway that's transformed hundreds of lives. Start wherever you are—each step builds on the last.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="relative group"
            >
              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gradient-to-r from-[#AFECDB]/30 to-transparent -translate-x-1/2" />
              )}

              <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-8 h-full transition-all duration-500 hover:border-[#AFECDB]/30 group-hover:shadow-lg group-hover:shadow-[#AFECDB]/5">
                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-5xl text-[#AFECDB]/20 leading-none">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center text-[#AFECDB] transition-transform duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wider mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Price + CTA */}
                <div className="mt-auto">
                  <p className="text-[#AFECDB] font-display text-lg mb-3">
                    {step.price}
                  </p>
                  <Button href={step.ctaHref} variant="secondary" size="sm" className="w-full">
                    {step.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 font-body text-sm mb-4">
            Ready for the complete transformation?
          </p>
          <Button href="/the-45-day-awakening" size="lg">
            Get the Full Experience — $1,497
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
