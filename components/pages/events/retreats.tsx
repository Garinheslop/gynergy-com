"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

export function EventsRetreats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const retreats = [
    {
      title: "Costa Rica Transformation",
      subtitle: "Jungle Immersion",
      date: "June 2025",
      duration: "5 Days",
      description: "Deep transformation in the heart of the rainforest. Disconnect to reconnect with what matters most.",
      inclusions: ["Luxury eco-lodge", "All meals", "Daily workshops", "Adventure excursions"],
      image: "🌴",
      status: "Waitlist Open",
      color: "#AFECDB"
    },
    {
      title: "Bali Awakening",
      subtitle: "Spiritual Renewal",
      date: "September 2025",
      duration: "7 Days",
      description: "A journey of spiritual awakening in the Island of the Gods. Ancient wisdom meets modern transformation.",
      inclusions: ["Beachfront villa", "Spa treatments", "Temple visits", "Yoga & meditation"],
      image: "🏝️",
      status: "Coming Soon",
      color: "#F8F812"
    },
    {
      title: "Greece: Mind & Body",
      subtitle: "Mediterranean Reset",
      date: "October 2025",
      duration: "6 Days",
      description: "Health optimization in the birthplace of wellness. Mediterranean diet, movement, and mindset work.",
      inclusions: ["Oceanview accommodations", "Healthy cuisine", "Fitness sessions", "Cultural experiences"],
      image: "🏛️",
      status: "Planning",
      color: "#AFECDB"
    }
  ]

  return (
    <section id="retreats" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Global Retreats"
          labelVariant="gold"
          title="Immersive Experiences"
          subtitle="Step away from the ordinary and into extraordinary transformation. Our retreats combine world-class destinations with life-changing experiences."
        />

        {/* Retreats grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {retreats.map((retreat, index) => (
            <motion.div
              key={retreat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-xl">
                {/* Image area */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#0D0D0D] to-black flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
                    {retreat.image}
                  </span>

                  {/* Status badge */}
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${retreat.color}20`,
                      color: retreat.color
                    }}
                  >
                    {retreat.status}
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                    {retreat.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/50 text-sm">{retreat.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 font-inter group-hover:text-[#F8F812] transition-colors">
                    {retreat.title}
                  </h3>
                  <p
                    className="text-sm mb-3"
                    style={{ color: retreat.color }}
                  >
                    {retreat.subtitle}
                  </p>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {retreat.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-2 mb-6">
                    {retreat.inclusions.map((inclusion) => (
                      <div
                        key={inclusion}
                        className="flex items-center gap-2 text-xs text-white/50"
                      >
                        <div
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: retreat.color }}
                        />
                        {inclusion}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    href="#interest"
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Express Interest
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-2xl">✨</span>
              <h4 className="text-white font-semibold">Level 5 Life Members</h4>
            </div>
            <p className="text-white/60 text-sm">
              2 retreats are included with your Level 5 Life membership.
              Non-members can apply for available spots.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
