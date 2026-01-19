"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function SpeakingTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: "Garin's keynote was the highlight of our annual conference. The feedback from our team was incredible—people are still talking about it months later.",
      name: "Sarah Chen",
      title: "VP of People",
      company: "TechCorp Inc.",
      image: "👩‍💼"
    },
    {
      quote: "We've had many speakers over the years, but Garin's workshop actually changed how our leadership team communicates. Measurable impact.",
      name: "Michael Rodriguez",
      title: "CEO",
      company: "Venture Partners",
      image: "👨‍💼"
    },
    {
      quote: "The energy in the room was electric. Garin has a rare ability to connect with audiences of all sizes and backgrounds.",
      name: "Jennifer Walsh",
      title: "Event Director",
      company: "Global Summit",
      image: "👩‍🦰"
    }
  ]

  const logos = [
    "Fortune 500 Company",
    "Tech Startup",
    "Healthcare Corp",
    "Financial Services",
    "Media Company"
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Testimonials"
          labelVariant="teal"
          title="What Event Organizers Say"
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#AFECDB]">★</span>
                ))}
              </div>

              <blockquote className="text-white/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#AFECDB]/10 flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/50 text-xs">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center gap-8 text-white/30">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-bold tracking-wide">
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
