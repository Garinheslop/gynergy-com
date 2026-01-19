"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"
import { getAttributionData } from "@/lib/utm-tracking"
import { trackConversion } from "@/components/analytics/google-analytics"

export function SpeakingBooking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const eventType = formData.get("eventType") as string

    // Get UTM attribution data
    const attribution = getAttributionData()

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      tags: ["speaking-inquiry", "gynergy-com", `event-${eventType}`],
      source: "gynergy.com/speaking",
      customFields: {
        ...attribution,
        organization: formData.get("organization") as string,
        event_type: eventType,
        event_date: formData.get("eventDate") as string,
        audience_size: formData.get("audience") as string,
        event_details: formData.get("message") as string,
      }
    }

    try {
      const response = await fetch("/api/ghl/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        // Track conversion in GA
        trackConversion.speakingInquiry()

        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="book" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#AFECDB]/30 p-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#AFECDB]/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#AFECDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-body">Inquiry Received!</h2>
              <p className="text-white/70">
                Thank you for your interest. Our team will review your request and
                reach out within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="book" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Book Garin"
          labelVariant="teal"
          title="Bring Transformation to Your Event"
          subtitle="Complete the form below and our team will follow up within 48 hours."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/70 text-sm mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-sm mb-2">Organization *</label>
              <input
                type="text"
                name="organization"
                required
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50"
                placeholder="Company or Event Name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/70 text-sm mb-2">Event Type *</label>
                <select
                  name="eventType"
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white focus:outline-none focus:border-[#AFECDB]/50"
                >
                  <option value="">Select...</option>
                  <option value="keynote">Keynote Speech</option>
                  <option value="workshop">Workshop</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="conference">Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Event Date *</label>
                <input
                  type="text"
                  name="eventDate"
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50"
                  placeholder="e.g., March 2025 or TBD"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/70 text-sm mb-2">Expected Audience Size *</label>
              <select
                name="audience"
                required
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white focus:outline-none focus:border-[#AFECDB]/50"
              >
                <option value="">Select...</option>
                <option value="small">Under 50</option>
                <option value="medium">50-200</option>
                <option value="large">200-500</option>
                <option value="xlarge">500+</option>
              </select>
            </div>

            <div>
              <label className="block text-white/70 text-sm mb-2">Tell us about your event</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50 resize-none"
                placeholder="Share any details about your audience, goals, or specific topics of interest..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
