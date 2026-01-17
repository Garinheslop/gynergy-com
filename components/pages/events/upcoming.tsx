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
      image: "🎯",
      featured: true
    },
    {
      title: "Date Zero Live Workshop",
      type: "Workshop",
      date: "April 5, 2025",
      location: "Virtual Event",
      description: "A hands-on workshop for couples ready to deepen their connection and communication.",
      spots: "20 spots left",
      price: "$197/couple",
      image: "💑",
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
      image: "🎙️",
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
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 ${
                    event.featured
                      ? "bg-[#AFECDB]/10 border border-[#AFECDB]/30"
                      : "bg-[#2E2E2E]"
                  }`}
                >
                  {event.image}
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
                      <span>📅</span> {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <span>📍</span> {event.location}
                    </span>
                    <span className="flex items-center gap-2 text-[#AFECDB]">
                      <span>🎟️</span> {event.spots}
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
