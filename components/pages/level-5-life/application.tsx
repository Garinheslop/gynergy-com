"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

export function L5LApplication() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      occupation: formData.get("occupation"),
      goals: formData.get("goals"),
      commitment: formData.get("commitment"),
      investment: formData.get("investment"),
      source: "level-5-life-application"
    }

    try {
      const response = await fetch("/api/ghl/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Application error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="apply" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#F8F812]/30 p-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#F8F812]/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#F8F812]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-inter">Application Received!</h2>
              <p className="text-white/70 mb-6">
                Thank you for applying to Level 5 Life. Our team will review your application and
                reach out within 48 hours to schedule your discovery call.
              </p>
              <p className="text-white/50 text-sm">
                In the meantime, check your email for next steps.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F8F812]/5 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Apply Now"
          labelVariant="gold"
          title="Begin Your Transformation"
          subtitle="Level 5 Life is by application only. We select members who are committed, coachable, and ready to do the work."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#2E2E2E] overflow-hidden">
            {/* Progress bar */}
            <div className="p-6 border-b border-[#2E2E2E]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">Step {step} of 2</span>
                <span className="text-[#F8F812] text-sm font-medium">{step === 1 ? "Your Info" : "Your Goals"}</span>
              </div>
              <div className="h-2 bg-[#2E2E2E] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#F8F812] transition-all duration-500"
                  style={{ width: `${step * 50}%` }}
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              {step === 1 ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-white/70 text-sm mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#F8F812]/50 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-white/70 text-sm mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#F8F812]/50 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#F8F812]/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white/70 text-sm mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#F8F812]/50 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="occupation" className="block text-white/70 text-sm mb-2">
                      What do you do? *
                    </label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      required
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#F8F812]/50 transition-colors"
                      placeholder="Entrepreneur, Executive, etc."
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full"
                    size="lg"
                  >
                    Continue
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="goals" className="block text-white/70 text-sm mb-2">
                      What are your top 3 goals for the next 12 months? *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#F8F812]/50 transition-colors resize-none"
                      placeholder="1. Health: ...&#10;2. Relationships: ...&#10;3. Business/Purpose: ..."
                    />
                  </div>

                  <div>
                    <label htmlFor="commitment" className="block text-white/70 text-sm mb-2">
                      Why are you committed to transformation now? *
                    </label>
                    <textarea
                      id="commitment"
                      name="commitment"
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#F8F812]/50 transition-colors resize-none"
                      placeholder="What makes this the right time for you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="investment" className="block text-white/70 text-sm mb-2">
                      Are you prepared to invest $15,000 (or $1,400/mo) in your transformation? *
                    </label>
                    <select
                      id="investment"
                      name="investment"
                      required
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white focus:outline-none focus:border-[#F8F812]/50 transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="yes-full">Yes, I can pay in full</option>
                      <option value="yes-plan">Yes, I prefer the payment plan</option>
                      <option value="exploring">I'm exploring options</option>
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setStep(1)}
                      variant="ghost"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>Secure & confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>Response within 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>Discovery call included</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
