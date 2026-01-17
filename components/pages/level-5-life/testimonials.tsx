"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function L5LTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: "Level 5 Life completely transformed how I approach everything. I lost 40 pounds, saved my marriage, and doubled my business income—all in 12 months. The ROI is incalculable.",
      name: "Marcus T.",
      role: "Tech Entrepreneur",
      location: "San Francisco",
      results: ["Lost 40 lbs", "2x Income", "Saved Marriage"],
      image: "👨‍💼"
    },
    {
      quote: "I came for the business coaching and got a complete life overhaul. The community alone is worth the investment—these are people who push you to be your best.",
      name: "Amanda K.",
      role: "Real Estate Investor",
      location: "Miami",
      results: ["3x Net Worth", "Found Purpose", "New Relationship"],
      image: "👩‍💼"
    },
    {
      quote: "The retreats were life-changing. Something shifts when you do this work in person with people who are equally committed. I'm not the same person I was a year ago.",
      name: "David R.",
      role: "Physician",
      location: "Austin",
      results: ["Work-Life Balance", "Mental Clarity", "Deep Relationships"],
      image: "👨‍⚕️"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Transformations"
          labelVariant="gold"
          title="Members Who Made It Happen"
          subtitle="These are real people who committed to the process and achieved extraordinary results."
        />

        {/* Testimonials grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-6 lg:p-8"
            >
              {/* Results badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.results.map((result) => (
                  <span
                    key={result}
                    className="px-3 py-1 rounded-full bg-[#F8F812]/10 text-[#F8F812] text-xs"
                  >
                    {result}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#2E2E2E]">
                <div className="w-12 h-12 rounded-full bg-[#F8F812]/10 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F8F812]/20 border-2 border-[#F8F812] flex items-center justify-center group-hover:bg-[#F8F812] group-hover:scale-110 transition-all">
                  <svg
                    className="w-8 h-8 text-[#F8F812] group-hover:text-black transition-colors ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white font-medium">Watch Member Stories</p>
                <p className="text-white/50 text-sm mt-1">3:45 video</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: "97%", label: "Would recommend" },
            { value: "4.9/5", label: "Member rating" },
            { value: "85%", label: "Hit major goals" },
            { value: "100%", label: "Completion rate" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-[#F8F812] font-inter">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
