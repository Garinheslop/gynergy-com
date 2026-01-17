"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

export function L5LInvestment() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const included = [
    "52 weekly group coaching calls with Garin",
    "2 all-inclusive retreat experiences",
    "4 private 1:1 strategy sessions",
    "ARIA AI companion (Premium access)",
    "Complete curriculum & resources (lifetime access)",
    "Private elite community membership",
    "Partner & spouse inclusion in select sessions",
    "Priority access to future events"
  ]

  const bonuses = [
    { title: "Relationship Intensive", value: "$2,000", description: "Full Date Zero program included" },
    { title: "Health Optimization Protocol", value: "$1,500", description: "Custom nutrition & fitness plan" },
    { title: "Business Strategy Session", value: "$1,000", description: "1:1 with Garin on your ventures" }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F812]/5 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Investment"
          labelVariant="gold"
          title="Your Transformation Awaits"
          subtitle="This is not an expense—it's the most important investment you'll ever make in yourself."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#F8F812]/30 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#F8F812]/10 to-transparent p-8 border-b border-[#F8F812]/20">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white font-inter">Level 5 Life Mastermind</h3>
                  <p className="text-white/60 mt-1">12-Month Transformation Program</p>
                </div>
                <div className="text-left lg:text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#F8F812] font-inter">$15,000</span>
                  </div>
                  <p className="text-white/50 text-sm">or $1,400/mo for 12 months</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* What's included */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">Everything Included:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F8F812]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#F8F812]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonuses */}
              <div className="mb-8 p-6 bg-[#F8F812]/5 border border-[#F8F812]/20 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🎁</span>
                  <h4 className="text-white font-semibold">Exclusive Bonuses</h4>
                  <span className="text-[#F8F812] text-sm">(Limited Time)</span>
                </div>
                <div className="space-y-3">
                  {bonuses.map((bonus) => (
                    <div key={bonus.title} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm">{bonus.title}</p>
                        <p className="text-white/50 text-xs">{bonus.description}</p>
                      </div>
                      <span className="text-[#F8F812] font-semibold">{bonus.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#F8F812]/20 flex justify-between items-center">
                  <span className="text-white/70 text-sm">Total Bonus Value</span>
                  <span className="text-[#F8F812] font-bold text-lg">$4,500</span>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button href="#apply" size="lg" className="w-full md:w-auto md:px-16">
                  Apply for Level 5 Life
                </Button>
                <p className="text-white/50 text-sm mt-4">
                  Limited to 20 members per cohort • Application required
                </p>
              </div>
            </div>
          </motion.div>

          {/* Value comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 mb-4">Consider the value:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-white/40 line-through">52 coaching calls alone: $15,600+</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40 line-through">2 luxury retreats: $10,000+</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/40 line-through">4 private sessions: $4,000+</span>
              </div>
            </div>
            <p className="text-white mt-4">
              Total value: <span className="text-[#F8F812] font-bold">$30,000+</span> → Your investment: <span className="text-[#F8F812] font-bold">$15,000</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
