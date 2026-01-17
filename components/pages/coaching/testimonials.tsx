"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function CoachingTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote: "Working with Garin 1-on-1 was the best investment I've ever made in myself. In 6 months, I transformed my health, saved my marriage, and doubled my business. He sees things in you that you can't see in yourself.",
      name: "Marcus T.",
      title: "Entrepreneur",
      result: "10x ROI on investment",
      image: "👨‍💼"
    },
    {
      quote: "I came to Garin burnt out and disconnected. He helped me rebuild from the ground up—not with quick fixes, but with real, sustainable change. I'm a completely different man now.",
      name: "David R.",
      title: "Tech Executive",
      result: "Lost 40 lbs, promoted to VP",
      image: "👨‍💻"
    },
    {
      quote: "The level of care and attention Garin gives is unmatched. He's not just a coach—he's a partner in your transformation. I've worked with many coaches, and Garin is in a league of his own.",
      name: "James W.",
      title: "Business Owner",
      result: "Best year of his life at 52",
      image: "👔"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Client Success"
          labelVariant="gold"
          title="Transformations That Speak for Themselves"
          subtitle="Real results from real clients who committed to the process."
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

              {/* Result badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#AFECDB]/10 text-[#AFECDB] text-xs font-medium">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8F812]/10 flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/50 text-xs">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="aspect-video bg-[#1A1A1A] border border-[#2E2E2E] rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F8F812]/10 flex items-center justify-center">
                <span className="text-4xl">🎬</span>
              </div>
              <p className="text-white/40">Client Success Stories</p>
              <p className="text-white/20 text-sm">Video placeholder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
