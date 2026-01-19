"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"
import { getAttributionData } from "@/lib/utm-tracking"
import { trackConversion } from "@/components/analytics/google-analytics"

export function CoachingApplication() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const timeline = formData.get("timeline") as string
    const investment = formData.get("investment") as string

    // Get UTM attribution data
    const attribution = getAttributionData()

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      tags: ["coaching-application", "1on1-coaching", "gynergy-com", `timeline-${timeline}`, `investment-${investment}`],
      source: "gynergy.com/coaching",
      customFields: {
        ...attribution,
        occupation: formData.get("occupation") as string,
        biggest_challenge: formData.get("biggestChallenge") as string,
        goals: formData.get("goals") as string,
        timeline: timeline,
        investment_readiness: investment,
        commitment_reason: formData.get("commitment") as string,
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
        trackConversion.coachingApplication()

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
      <section id="apply" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
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
              <h2 className="text-3xl font-bold text-white mb-4 font-body">Application Received!</h2>
              <p className="text-white/70">
                Thank you for applying. Our team will review your application and
                reach out within 48 hours if you're a fit for private coaching.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Apply Now"
          labelVariant="teal"
          title="Ready to Transform Your Life?"
          subtitle="Complete this application to be considered for private coaching. We review every application personally."
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
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/70 text-sm mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/70 text-sm mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Occupation *</label>
                <input
                  type="text"
                  name="occupation"
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50"
                  placeholder="What do you do?"
                />
              </div>
            </div>

            {/* Challenges */}
            <div>
              <label className="block text-white/70 text-sm mb-2">
                What is your biggest challenge right now? *
              </label>
              <textarea
                name="biggestChallenge"
                required
                rows={3}
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50 resize-none"
                placeholder="Be specific about what's holding you back..."
              />
            </div>

            {/* Goals */}
            <div>
              <label className="block text-white/70 text-sm mb-2">
                What would your life look like if you achieved your goals? *
              </label>
              <textarea
                name="goals"
                required
                rows={3}
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50 resize-none"
                placeholder="Paint the picture of your ideal life..."
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-white/70 text-sm mb-2">
                When are you looking to start? *
              </label>
              <select
                name="timeline"
                required
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white focus:outline-none focus:border-[#AFECDB]/50"
              >
                <option value="">Select...</option>
                <option value="immediately">Immediately</option>
                <option value="1-month">Within 1 month</option>
                <option value="1-3-months">1-3 months</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>

            {/* Investment */}
            <div>
              <label className="block text-white/70 text-sm mb-2">
                Are you ready to invest in yourself? *
              </label>
              <select
                name="investment"
                required
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white focus:outline-none focus:border-[#AFECDB]/50"
              >
                <option value="">Select...</option>
                <option value="yes-ready">Yes, I'm ready to invest</option>
                <option value="need-info">I need more information first</option>
                <option value="concerned">Concerned about cost</option>
              </select>
            </div>

            {/* Commitment */}
            <div>
              <label className="block text-white/70 text-sm mb-2">
                Why are you committed to change right now? *
              </label>
              <textarea
                name="commitment"
                required
                rows={3}
                className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#AFECDB]/50 resize-none"
                placeholder="What makes this the right time for you?"
              />
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </Button>
              <p className="text-white/40 text-xs text-center mt-4">
                By submitting, you agree to be contacted about coaching opportunities.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
