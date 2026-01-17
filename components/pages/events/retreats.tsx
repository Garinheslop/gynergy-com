"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

export function EventsRetreats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const inclusions = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      title: "Transportation from San Diego",
      description: "Round-trip transportation included"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
        </svg>
      ),
      title: "Beach Lodging",
      description: "Accommodations ON THE BEACH"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05l-4.34-.96 4.35 17.9zM1 21.99h21v-2H1v2zM9 5.18V3.5c0-.83-.67-1.5-1.5-1.5S6 2.67 6 3.5v1.68c-.83.52-1.33 1.5-1.33 2.57v.55H3.5c-.83 0-1.5.67-1.5 1.5v.3c0 .83.67 1.5 1.5 1.5h.17v.3c0 1.07.5 2.05 1.33 2.57V18c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3.13c.83-.52 1.33-1.5 1.33-2.57v-.3h.17c.83 0 1.5-.67 1.5-1.5v-.3c0-.83-.67-1.5-1.5-1.5h-.17v-.55C11.33 6.68 10.83 5.7 10 5.18z"/>
        </svg>
      ),
      title: "All Meals Included",
      description: "Authentic Mexican cuisine"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"/>
        </svg>
      ),
      title: "Home Building",
      description: "Build homes for families in need"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: "Orphanage Experiences",
      description: "Connect with local children"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: "Break Free Teachings",
      description: "Transformative workshops & sessions"
    }
  ]

  return (
    <section id="retreats" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Service Retreat"
          labelVariant="gold"
          title="Transform Through Service"
          subtitle="Experience profound transformation through giving back. Build homes, serve communities, and discover your purpose in beautiful Ensenada, Mexico."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Main retreat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#F8F812]/30 overflow-hidden"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#F8F812]/10 to-[#AFECDB]/10 p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-8 h-8 text-[#F8F812]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-[#AFECDB] text-sm font-medium uppercase tracking-wider">Ensenada, Mexico</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white font-inter">
                    GYNERGY Service Retreat
                  </h3>
                  <p className="text-white/60 mt-2">
                    5-Day Transformative Experience • Building homes, changing lives
                  </p>
                </div>
                <div className="text-left lg:text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#F8F812] font-inter">$1,497</span>
                  </div>
                  <p className="text-white/50 text-sm mt-1">Everything included</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              {/* What's included */}
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Everything Included
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {inclusions.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-4 bg-black/30 border border-[#2E2E2E] rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#F8F812]/10 border border-[#F8F812]/20 flex items-center justify-center flex-shrink-0 text-[#F8F812]">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="text-white text-sm font-medium">{item.title}</h5>
                        <p className="text-white/50 text-xs">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bundle offer */}
              <div className="p-6 bg-gradient-to-r from-[#AFECDB]/10 to-[#F8F812]/10 border border-[#AFECDB]/30 rounded-2xl mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#AFECDB]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">Bundle & Save $500</h5>
                      <p className="text-white/60 text-sm">45 Day Awakening + Service Retreat</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-white/40 line-through text-sm">$2,994</span>
                      <span className="text-2xl font-bold text-[#AFECDB] font-inter ml-2">$2,497</span>
                    </div>
                    <Button href="/the-45-day-awakening" size="sm" variant="secondary">
                      Get Bundle
                    </Button>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button href="#apply" size="lg" className="w-full md:w-auto md:px-16">
                  Reserve Your Spot
                </Button>
                <p className="text-white/50 text-sm mt-4">
                  Limited spots available • Dates announced quarterly
                </p>
              </div>
            </div>
          </motion.div>

          {/* Impact note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1A1A1A] border border-[#2E2E2E] rounded-full">
              <svg className="w-5 h-5 text-[#F8F812]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-white/70 text-sm">
                Your participation builds homes and supports local orphanages
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
