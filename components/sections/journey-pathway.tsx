"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

// SVG Icons for each pillar
const HealthIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const RelationshipsIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const MindsetIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const WealthIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const PurposeIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
)

export function JourneyPathway() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pathways = [
    {
      number: "01",
      title: "Health",
      subtitle: "Physical Vitality",
      description: "Optimize your body through nutrition, movement, and recovery. Build sustainable habits that energize every aspect of your life.",
      icon: <HealthIcon />,
      color: "#AFECDB",
      href: "/level-5-life#health"
    },
    {
      number: "02",
      title: "Relationships",
      subtitle: "Deep Connection",
      description: "Transform your closest relationships. Learn communication, deepen intimacy, and build the partnership you've always wanted.",
      icon: <RelationshipsIcon />,
      color: "#FFD700",
      href: "/date-zero"
    },
    {
      number: "03",
      title: "Wealth",
      subtitle: "Financial Freedom",
      description: "Build true financial abundance and freedom. Create sustainable wealth that supports the life and legacy you're building.",
      icon: <WealthIcon />,
      color: "#AFECDB",
      href: "/level-5-life#wealth"
    },
    {
      number: "04",
      title: "Mindset",
      subtitle: "Mental Mastery",
      description: "Rewire limiting beliefs and develop unshakeable confidence. Master your thoughts to master your outcomes.",
      icon: <MindsetIcon />,
      color: "#FFD700",
      href: "/level-5-life#mindset"
    },
    {
      number: "05",
      title: "Purpose",
      subtitle: "Meaningful Impact",
      description: "Discover your unique gifts and how to share them with the world. Build a life of significance and lasting legacy.",
      icon: <PurposeIcon />,
      color: "#AFECDB",
      href: "/level-5-life#purpose"
    }
  ]

  return (
    <section id="journey" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      {/* Connecting lines background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-[#2E2E2E] to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#FFD700] mb-4"
          >
            The Five Pillars
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4"
          >
            YOUR JOURNEY TO LEVEL 5
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto font-inter"
          >
            True transformation happens when all five pillars of life are aligned.
            Our programs guide you through each dimension, creating lasting change.
          </motion.p>
        </div>

        {/* Pathway cards - 5 pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {pathways.map((pathway, index) => (
            <motion.a
              key={pathway.title}
              href={pathway.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-6 transition-all duration-500 hover:border-white/20 hover:shadow-xl">
                {/* Number */}
                <div
                  className="text-xs font-oswald font-bold tracking-widest mb-4"
                  style={{ color: pathway.color }}
                >
                  {pathway.number}
                </div>

                {/* Icon - SVG instead of emoji */}
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${pathway.color}15`,
                    borderColor: `${pathway.color}30`,
                    borderWidth: '1px',
                    color: pathway.color
                  }}
                >
                  {pathway.icon}
                </div>

                {/* Content */}
                <h3 className="font-oswald text-xl font-semibold text-white mb-1 tracking-wide uppercase group-hover:text-[#FFD700] transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-white/50 text-xs font-oswald uppercase tracking-wider mb-4">
                  {pathway.subtitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6 font-inter">
                  {pathway.description}
                </p>

                {/* Arrow */}
                <div
                  className="flex items-center text-sm font-oswald font-medium tracking-wide transition-all duration-300 group-hover:translate-x-2"
                  style={{ color: pathway.color }}
                >
                  <span>EXPLORE</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${pathway.color}05 0%, transparent 100%)`
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Center CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-white/60 text-sm mb-4 font-inter">
              Ready to transform all five pillars?
            </p>
            <Button href="/level-5-life" size="lg">
              Discover Level 5 Life
            </Button>
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-[#AFECDB]/30" />
            <div className="w-2 h-2 bg-[#FFD700]" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-[#AFECDB]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
