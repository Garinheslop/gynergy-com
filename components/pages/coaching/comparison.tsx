"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

// SVG Check Icon
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#AFECDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

// SVG Dash Icon
const DashIcon = () => (
  <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
)

interface ComparisonRow {
  feature: string
  coaching: string | boolean
  lvl5: string | boolean
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "5-Pillar Transformation Framework",
    coaching: "Same",
    lvl5: "Same"
  },
  {
    feature: "Garin's Direct Guidance",
    coaching: "100% Private",
    lvl5: "Group + 4 Private Sessions"
  },
  {
    feature: "Elite Peer Community",
    coaching: false,
    lvl5: "52 Weekly Mastermind Calls"
  },
  {
    feature: "Accountability Partners",
    coaching: false,
    lvl5: "Matched with Peers"
  },
  {
    feature: "In-Person Retreats",
    coaching: "By Arrangement",
    lvl5: "2 Included"
  },
  {
    feature: "ARIA AI Coaching",
    coaching: true,
    lvl5: true
  },
  {
    feature: "Investment",
    coaching: "$60K+/year",
    lvl5: "$15,000"
  },
  {
    feature: "Best For",
    coaching: "Maximum Privacy & Speed",
    lvl5: "Community Acceleration & Value"
  }
]

export function CoachingComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? <CheckIcon /> : <DashIcon />
    }
    return <span className="text-white/80 text-sm">{value}</span>
  }

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AFECDB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#AFECDB]/50" />
            <span className="text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#AFECDB]">
              The Same Framework
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#AFECDB]/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4"
          >
            SAME METHOD.{" "}
            <span className="text-[#AFECDB]">DIFFERENT FORMAT.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto font-inter text-lg"
          >
            Whether you choose 1-on-1 coaching or LVL 5 LIFE, you get the same proven
            5-Pillar transformation methodology. The only question: private attention or community acceleration?
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="overflow-hidden rounded-xl border border-[#2E2E2E] bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-[#0D0D0D] border-b border-[#2E2E2E]">
              <div className="p-4 md:p-6">
                <span className="text-white/40 text-xs font-oswald uppercase tracking-wider">Feature</span>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-[#2E2E2E]">
                <span className="text-white font-oswald text-sm md:text-base uppercase tracking-wide">1-on-1 Coaching</span>
                <p className="text-white/40 text-xs mt-1">$30K+</p>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-[#AFECDB]/30 bg-[#AFECDB]/5">
                <span className="text-[#AFECDB] font-oswald text-sm md:text-base uppercase tracking-wide">LVL 5 LIFE</span>
                <p className="text-[#AFECDB]/60 text-xs mt-1">$15,000</p>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${
                  index !== comparisonData.length - 1 ? "border-b border-[#2E2E2E]/50" : ""
                }`}
              >
                <div className="p-4 md:p-6 flex items-center">
                  <span className="text-white/70 text-sm">{row.feature}</span>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-l border-[#2E2E2E]/50">
                  {renderCell(row.coaching)}
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center border-l border-[#AFECDB]/20 bg-[#AFECDB]/5">
                  {renderCell(row.lvl5)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <div className="border border-[#AFECDB]/30 bg-[#AFECDB]/5 rounded-xl p-8">
            <p className="font-oswald text-lg text-[#AFECDB] tracking-wide mb-3">
              THE KEY INSIGHT
            </p>
            <p className="text-white text-xl md:text-2xl font-inter mb-2">
              Community isn't the compromise.
            </p>
            <p className="text-[#AFECDB] text-xl md:text-2xl font-inter font-semibold">
              It's the multiplier.
            </p>
            <p className="text-white/50 text-sm mt-4 max-w-xl mx-auto">
              Private clients get Garin's undivided attention. LVL 5 LIFE members get the same framework
              PLUS an elite community that accelerates results through accountability, diverse perspectives,
              and shared victories.
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#apply" variant="primary" size="lg">
            Apply for 1-on-1 Coaching
          </Button>
          <Button href="https://lvl5life.com" variant="outline" size="lg">
            Explore LVL 5 LIFE
          </Button>
        </motion.div>

        {/* Choice Guide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* 1-on-1 Card */}
          <div className="border border-[#2E2E2E] bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-xl p-6">
            <h3 className="text-white font-oswald text-lg uppercase tracking-wide mb-4">
              Choose 1-on-1 Coaching When...
            </h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#AFECDB] mt-0.5">→</span>
                <span>You need 100% private attention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#AFECDB] mt-0.5">→</span>
                <span>Your situation requires maximum customization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#AFECDB] mt-0.5">→</span>
                <span>You want the fastest possible pivots</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#AFECDB] mt-0.5">→</span>
                <span>Complete confidentiality is essential</span>
              </li>
            </ul>
          </div>

          {/* LVL 5 LIFE Card */}
          <div className="border border-[#AFECDB]/30 bg-gradient-to-b from-[#AFECDB]/10 to-[#0D0D0D] rounded-xl p-6">
            <h3 className="text-[#AFECDB] font-oswald text-lg uppercase tracking-wide mb-4">
              Choose LVL 5 LIFE When...
            </h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#AFECDB] mt-0.5">→</span>
                <span>You want the same framework + community power</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#AFECDB] mt-0.5">→</span>
                <span>Peer accountability accelerates your results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#AFECDB] mt-0.5">→</span>
                <span>You value diverse perspectives from high-achievers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#AFECDB] mt-0.5">→</span>
                <span>More than 50% savings matters to you</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
