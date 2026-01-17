"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      title: "Gratitude",
      description: "The foundation of all transformation begins with appreciation for where you are.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Growth",
      description: "Continuous evolution through challenge, reflection, and intentional action.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Grace",
      description: "Patience with yourself and others as you navigate the journey of becoming.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ]

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#AFECDB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#FFD700] mb-8"
          >
            Our Mission
          </motion.span>

          {/* Main quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Quote marks - minimal design */}
            <span className="absolute -top-8 -left-4 text-8xl text-[#FFD700]/10 font-serif leading-none">
              "
            </span>

            <p className="font-bebas text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8 tracking-wide">
              WE BELIEVE EVERY PERSON DESERVES TO LIVE AT THEIR{" "}
              <span className="text-[#FFD700]">HIGHEST POTENTIAL</span>—IN HEALTH,
              RELATIONSHIPS, WEALTH, MINDSET, AND PURPOSE.
            </p>

            <span className="absolute -bottom-12 -right-4 text-8xl text-[#FFD700]/10 font-serif leading-none">
              "
            </span>
          </motion.blockquote>

          {/* Founders attribution with real images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <div className="flex -space-x-3">
              <div className="relative w-12 h-12 overflow-hidden border-2 border-black">
                <Image
                  src="/founders/Garin.JPEG"
                  alt="Garin Hess"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative w-12 h-12 overflow-hidden border-2 border-black">
                <Image
                  src="/founders/YESI.JPG"
                  alt="Yesi Hess"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-left">
              <p className="text-white font-oswald font-medium tracking-wide">GARIN & YESI</p>
              <p className="text-white/50 text-sm font-inter">Co-Founders, GYNERGY</p>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"
          />

          {/* Values grid - no emojis, SVG icons instead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] flex items-center justify-center text-[#FFD700]">
                  {value.icon}
                </div>
                <h3 className="font-oswald text-lg font-semibold text-white mb-2 tracking-wide uppercase">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-inter">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
