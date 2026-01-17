"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

export function EventsUpcoming() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const events = [
    {
      title: "Level 5 Life Kick-Off Weekend",
      type: "Workshop",
      date: "March 15-16, 2025",
      location: "Los Angeles, CA",
      description: "Launch your transformation journey with an immersive weekend of clarity, connection, and commitment.",
      spots: "12 spots left",
      price: "Included with L5L",
      icon: (
        <svg className="w-10 h-10 text-[#AFECDB]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ),
      featured: true
    },
    {
      title: "The 45 Day Awakening Workshop",
      type: "Workshop",
      date: "April 5, 2025",
      location: "Virtual Event",
      description: "A transformative workshop to deepen your connection with yourself through gratitude and purpose.",
      spots: "20 spots left",
      price: "$197",
      icon: (
        <svg className="w-10 h-10 text-white/70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      featured: false
    },
    {
      title: "The GYNERGY Effect Live",
      type: "Podcast Recording",
      date: "April 20, 2025",
      location: "Austin, TX",
      description: "Join us for a live podcast recording with special guests and audience Q&A.",
      spots: "50 spots left",
      price: "Free",
      icon: (
        <svg className="w-10 h-10 text-white/70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
        </svg>
      ),
      featured: false
    }
  ]

  return (
    <section id="upcoming" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Coming Soon"
          labelVariant="teal"
          title="Upcoming Events"
          subtitle="Join us for live experiences that accelerate your transformation."
        />

        {/* Events list */}
        <div className="mt-16 space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border p-6 lg:p-8 ${
                event.featured
                  ? "border-[#AFECDB]/30"
                  : "border-[#2E2E2E] hover:border-white/20"
              } transition-all`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    event.featured
                      ? "bg-[#AFECDB]/10 border border-[#AFECDB]/30"
                      : "bg-[#2E2E2E]"
                  }`}
                >
                  {event.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#AFECDB]/10 text-[#AFECDB] text-xs font-medium">
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="px-3 py-1 rounded-full bg-[#F8F812]/10 text-[#F8F812] text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 font-inter">
                    {event.title}
                  </h3>
                  <p className="text-white/60 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-white/50">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {event.location}
                    </span>
                    <span className="flex items-center gap-2 text-[#AFECDB]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"/>
                      </svg>
                      {event.spots}
                    </span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="lg:text-right flex-shrink-0">
                  <p className="text-2xl font-bold text-white font-inter mb-2">
                    {event.price}
                  </p>
                  <Button
                    href="#register"
                    variant={event.featured ? "secondary" : "outline"}
                    size="sm"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No events fallback message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 mb-4">Want to be notified about new events?</p>
          <Button href="#newsletter" variant="ghost">
            Join the Waitlist →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
