"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import Image from "next/image"

export function AOEFounders() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const founders = [
    {
      name: "Garin Heslop",
      title: "Founder, GYNERGY",
      image: "/founders/Garin.JPEG",
      bio: "Entrepreneur, coach, and founder of LVL 5 LIFE. Garin has spent 15+ years helping high-achievers transform every area of their lives through the 5-Pillar framework. He brings strategic clarity, business acumen, and a no-BS approach to personal development.",
      specialties: ["Business Strategy", "Mindset Mastery", "High-Performance Systems"],
    },
    {
      name: "Rolando",
      title: "Co-Founder, AOE Brotherhood",
      image: "/founders/rolando.jpg", // Placeholder - will need actual image
      bio: "Rolando brings raw energy and real-world wisdom to the brotherhood. His journey from struggle to success makes him uniquely qualified to guide men through their own transformation. He leads with authenticity and challenges members to step into their greatness.",
      specialties: ["Accountability", "Mindset Shifts", "Breakthrough Coaching"],
    },
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Your Guides"
          labelVariant="gold"
          title="Led by Men Who Walk the Talk"
          subtitle="Not motivational speakers. Not theorists. Men who live the principles they teach."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] overflow-hidden group hover:border-[#FFD700]/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent z-10" />
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                {/* Fallback background if image fails */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-[#1A1A1A] -z-10" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-bebas text-3xl text-white tracking-wide mb-1">
                  {founder.name}
                </h3>
                <p className="text-[#FFD700] font-oswald text-sm uppercase tracking-wider mb-4">
                  {founder.title}
                </p>
                <p className="text-white/60 text-sm leading-relaxed font-inter mb-6">
                  {founder.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {founder.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-xs font-oswald tracking-wider"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-xl md:text-2xl text-white/80 font-inter italic leading-relaxed">
            &ldquo;We didn&apos;t create AOE to build another community.
            We created it because we needed it ourselves.
            A place where men could be real, be challenged, and be transformed.&rdquo;
          </blockquote>
          <p className="mt-6 text-[#FFD700] font-oswald tracking-wider">
            — Garin & Rolando
          </p>
        </motion.div>
      </div>
    </section>
  )
}
