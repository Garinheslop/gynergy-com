"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function DateZeroTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: "Date Zero saved our marriage. We were on the verge of separation, and within 8 weeks, we found our way back to each other. The communication tools alone were worth 10x the investment.",
      name: "Sarah & Michael",
      location: "Los Angeles, CA",
      years: "12 years married",
      image: "👫"
    },
    {
      quote: "We thought we had a good marriage, but Date Zero showed us what GREAT looks like. The intimacy exercises and shared vision work transformed how we show up for each other every day.",
      name: "Jennifer & David",
      location: "Austin, TX",
      years: "5 years married",
      image: "💑"
    },
    {
      quote: "As a couple who'd been together for 20 years, we didn't think we needed help. Date Zero proved us wrong—in the best way. We're more connected now than our first year of dating.",
      name: "Lisa & Robert",
      location: "Miami, FL",
      years: "20 years married",
      image: "🥰"
    }
  ]

  const stats = [
    { value: "95%", label: "Report improved communication" },
    { value: "89%", label: "Feel more connected than ever" },
    { value: "92%", label: "Would recommend to friends" },
    { value: "500+", label: "Couples transformed" }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Success Stories"
          labelVariant="teal"
          title="Couples Who Transformed"
          subtitle="Real couples, real results. Here's what happens when you commit to your relationship."
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
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F8F812]">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#AFECDB]/10 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">
                    {testimonial.location} • {testimonial.years}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl lg:text-5xl font-bold text-[#AFECDB] font-inter mb-2">
                {stat.value}
              </p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="relative aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] overflow-hidden group cursor-pointer">
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#AFECDB]/20 border-2 border-[#AFECDB] flex items-center justify-center group-hover:bg-[#AFECDB] group-hover:scale-110 transition-all">
                  <svg
                    className="w-8 h-8 text-[#AFECDB] group-hover:text-black transition-colors ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white font-medium">Watch Success Stories</p>
                <p className="text-white/50 text-sm mt-1">2:34 video</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
