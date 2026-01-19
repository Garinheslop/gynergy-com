"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function DateZeroTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: "The 45 Day Awakening completely shifted my perspective. I went from constant anxiety and negativity to waking up with genuine gratitude. The Date Zero journal became my anchor—45 days that rewired how I see my life.",
      name: "Marcus T.",
      location: "San Diego, CA",
      transformation: "From burnout to purpose",
      initials: "MT"
    },
    {
      quote: "I was skeptical about a 'gratitude program' actually changing anything. But the combination of the journal, coaching calls, and community support created a transformation I didn't think was possible. I found peace I've been searching for my whole life.",
      name: "Jennifer K.",
      location: "Austin, TX",
      transformation: "Found inner peace",
      initials: "JK"
    },
    {
      quote: "The service retreat in Mexico was the culmination of everything. Building homes for families while surrounded by others on the same journey—it showed me what life is really about. Gratitude isn't just a practice, it's a way of being.",
      name: "David R.",
      location: "Phoenix, AZ",
      transformation: "Discovered purpose through service",
      initials: "DR"
    }
  ]

  const stats = [
    { value: "95%", label: "Report lasting mindset shift" },
    { value: "89%", label: "Say gratitude became natural" },
    { value: "92%", label: "Would recommend to others" },
    { value: "45", label: "Days to transformation" }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#AFECDB] text-sm font-medium tracking-wider uppercase font-heading">
            TRANSFORMATIONS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 font-display">
            LIVES CHANGED THROUGH GRATITUDE
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
            Real people, real transformations. Here's what happens when you commit
            to 45 days of intentional gratitude practice.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-6 lg:p-8"
            >
              {/* Stars - SVG instead of text */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 leading-relaxed mb-6 font-body">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#AFECDB]/10 flex items-center justify-center text-[#AFECDB] font-bold font-heading">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-white font-semibold font-heading">{testimonial.name}</p>
                  <p className="text-white/50 text-sm font-body">
                    {testimonial.location}
                  </p>
                  <p className="text-[#AFECDB] text-xs font-body mt-1">
                    {testimonial.transformation}
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
              <p className="text-4xl lg:text-5xl font-bold text-[#AFECDB] font-display mb-2">
                {stat.value}
              </p>
              <p className="text-white/50 text-sm font-body">{stat.label}</p>
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
          <div className="relative aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] overflow-hidden group cursor-pointer">
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#AFECDB]/20 border-2 border-[#AFECDB] flex items-center justify-center group-hover:bg-[#AFECDB] group-hover:scale-110 transition-all">
                  <svg
                    className="w-8 h-8 text-[#AFECDB] group-hover:text-black transition-colors ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white font-medium font-heading">Watch Transformation Stories</p>
                <p className="text-white/50 text-sm mt-1 font-body">Real journeys, real results</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
