"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-label"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

// Service icons
const TransportIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
)

const BeachIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const FoodIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
)

const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)

const TeachIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
)

export function ServiceRetreatTeaser() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const inclusions = [
    {
      icon: <TransportIcon />,
      title: "Transportation",
      description: "Round-trip from San Diego to Ensenada"
    },
    {
      icon: <BeachIcon />,
      title: "Beach Lodging",
      description: "Accommodations right on the beach"
    },
    {
      icon: <FoodIcon />,
      title: "All Meals",
      description: "Every meal included throughout the retreat"
    },
    {
      icon: <HomeIcon />,
      title: "Build a Home",
      description: "Donation covers home building + furniture for a family"
    },
    {
      icon: <HeartIcon />,
      title: "Orphanage Experience",
      description: "Visit and serve local orphanages with meaningful donations"
    },
    {
      icon: <TeachIcon />,
      title: "Break Free Teachings",
      description: "Transformational workshops and guided experiences"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background pattern - gold grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 215, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Service & Transformation"
          labelVariant="gold"
          title="Ensenada Service Retreat"
          subtitle="Master the self to serve the world. This isn't a luxury vacation—it's a life-changing experience where you'll build homes for families in need while discovering your own capacity for transformation."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <ImagePlaceholder
                aspect="4/3"
                variant="card"
                label="Ensenada beach sunrise - service retreat location"
                className="w-full h-full"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Location badge */}
              <div className="absolute top-4 left-4 bg-[#FFD700]/20 border border-[#FFD700]/30 px-4 py-2">
                <p className="text-[#FFD700] text-xs font-oswald uppercase tracking-wider">Ensenada, Mexico</p>
              </div>

              {/* Impact stat */}
              <div className="absolute bottom-4 left-4 bg-[#1A1A1A]/90 border border-[#2E2E2E] px-4 py-3">
                <p className="text-[#AFECDB] font-bebas text-2xl">Service</p>
                <p className="text-white/50 text-xs font-inter">Build Homes For Families</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#FFD700]/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Pricing options */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] px-6 py-4 flex-1 min-w-[200px]">
                <p className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1">Retreat Only</p>
                <p className="text-[#AFECDB] font-bebas text-3xl">$1,497</p>
              </div>
              <div className="bg-gradient-to-br from-[#FFD700]/10 to-[#1A1A1A] border border-[#FFD700]/30 px-6 py-4 flex-1 min-w-[200px] relative">
                <div className="absolute -top-3 right-4 bg-[#FFD700] text-black px-3 py-1 text-xs font-oswald font-bold uppercase tracking-wider">
                  SAVE $500
                </div>
                <p className="text-white/40 text-xs font-inter uppercase tracking-wider mb-1">Bundle: Retreat + 45 Day Awakening</p>
                <p className="text-[#FFD700] font-bebas text-3xl">$2,497</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/60 font-inter leading-relaxed mb-8">
              Just a short drive from San Diego, you'll spend transformative days on the beach,
              building a home for a family who needs it, serving at local orphanages, and
              experiencing the "Break Free" teachings that will shift your perspective forever.
            </p>

            {/* What's included grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {inclusions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center flex-shrink-0 text-[#FFD700]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-oswald font-semibold uppercase tracking-wide">
                      {item.title}
                    </p>
                    <p className="text-white/40 text-xs font-inter">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="/service-retreat" variant="primary" size="lg">
                Reserve Your Spot
              </Button>
              <Button href="/the-45-day-awakening" variant="ghost">
                Get the Bundle
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="w-12 h-px bg-[#FFD700]/30 mx-auto mb-6" />
          <p className="text-white/50 text-lg font-inter italic">
            "The moment you hand the keys to a family who never thought they'd have a home—that's when everything changes."
          </p>
          <p className="text-[#FFD700] text-sm font-oswald mt-4 uppercase tracking-wider">
            — Garin Heslop, Founder
          </p>
        </motion.div>

        {/* Spots remaining urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="w-2 h-2 bg-[#FF4444] animate-pulse" />
          <span className="text-white/60 text-sm font-inter">
            Limited to <span className="text-white font-semibold">12 participants</span> per retreat
          </span>
        </motion.div>
      </div>
    </section>
  )
}
