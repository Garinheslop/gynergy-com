"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ARIAIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#050505] overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6">
        {/* Who This Is For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-oswald text-sm font-semibold tracking-[0.2em] uppercase text-[#AFECDB] mb-6">
            Who This Is For
          </h2>
          <p className="text-white/80 font-inter text-lg leading-relaxed mb-4">
            You&apos;re a high-achiever.
          </p>
          <p className="text-white/60 font-inter text-lg leading-relaxed">
            Career is strong. Health is... complicated.
            <br />
            Relationships feel surface-level.
            <br />
            You know you&apos;re not maximizing what life can be.
          </p>
        </motion.div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-b from-[#1A1A1A]/50 to-transparent border border-[#2E2E2E]/50 p-8 md:p-12">
            <h3 className="font-oswald text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-6 text-center">
              The Problem
            </h3>
            <p className="text-white/70 font-inter text-base leading-relaxed mb-4 text-center">
              Health app. Finance tracker. Meditation. Therapy.
              <br />
              Coaching. Journal. Workout app.
            </p>
            <p className="text-white/50 font-inter text-sm mb-6 text-center">
              That&apos;s 7 different tools.
              <br />
              7 different logins.
              <br />
              7 different input streams.
              <br />
              7 different feedback loops.
            </p>
            <p className="text-white/60 font-inter text-sm text-center mb-6">
              Nothing talks to each other.
              <br />
              You&apos;re making decisions in isolation.
              <br />
              It feels fragmented because it <span className="text-white/80 font-medium">IS</span> fragmented.
            </p>
            <p className="text-[#AFECDB] font-oswald text-xl tracking-wide text-center">
              ARIA changes everything.
            </p>
          </div>
        </motion.div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="font-oswald text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-6">
            The Solution
          </h3>
          <p className="text-white/70 font-inter text-base leading-relaxed mb-6">
            Imagine one interface where:
          </p>
          <div className="space-y-3 text-left max-w-xl mx-auto mb-8">
            <p className="text-white/60 font-inter text-sm flex items-start gap-3">
              <span className="text-[#AFECDB] mt-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </span>
              Your <span className="text-white/80">Health Coach</span> knows your daily energy patterns
            </p>
            <p className="text-white/60 font-inter text-sm flex items-start gap-3">
              <span className="text-[#AFECDB] mt-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </span>
              Your <span className="text-white/80">Wealth Coach</span> sees how work stress impacts financial decisions
            </p>
            <p className="text-white/60 font-inter text-sm flex items-start gap-3">
              <span className="text-[#AFECDB] mt-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </span>
              Your <span className="text-white/80">Relationships Coach</span> understands why isolation is hurting you
            </p>
            <p className="text-white/60 font-inter text-sm flex items-start gap-3">
              <span className="text-[#AFECDB] mt-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </span>
              Your <span className="text-white/80">Mindset Coach</span> predicts when you&apos;re heading toward overwhelm
            </p>
          </div>
          <p className="text-[#AFECDB] font-oswald text-xl tracking-wide">
            One coherent narrative. One transformation journey.
            <br />
            <span className="text-2xl">That&apos;s ARIA.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
