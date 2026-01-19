"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { getAttributionData } from "@/lib/utm-tracking"
import { trackConversion } from "@/components/analytics/google-analytics"

const DownloadIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

export function LeadMagnetSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError("")

    try {
      // Get UTM attribution data
      const attribution = getAttributionData()

      const response = await fetch("/api/ghl/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          tags: ["lead-magnet", "5-pillars-assessment", "gynergy-com"],
          source: "gynergy.com/lead-magnet",
          customFields: attribution,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe")
      }

      // Track conversion in GA
      trackConversion.leadMagnetDownload(email)

      setIsSuccess(true)
    } catch (err) {
      console.error("Lead magnet error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="relative py-16 lg:py-20 bg-gradient-to-b from-[#0A0A0A] to-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(175, 236, 219, 0.2) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center text-[#AFECDB]">
                    <DownloadIcon />
                  </div>
                  <span className="text-xs font-heading font-semibold tracking-[0.15em] uppercase text-[#AFECDB]">
                    Free Download
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide mb-3">
                  THE 5 PILLARS
                  <br />
                  <span className="text-[#AFECDB]">SELF-ASSESSMENT</span>
                </h3>

                <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
                  Discover where you stand in Health, Relationships, Wealth, Mindset, and Purpose.
                  Get your personalized score and actionable next steps.
                </p>

                <ul className="space-y-2 text-sm text-white/50 font-body">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#AFECDB]" />
                    <span>5-minute assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#AFECDB]" />
                    <span>Personalized pillar scores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#AFECDB]" />
                    <span>Actionable improvement plan</span>
                  </li>
                </ul>
              </div>

              {/* Form */}
              <div>
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#AFECDB]/20 border border-[#AFECDB]/30 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#AFECDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-heading font-bold text-white uppercase tracking-wider mb-2">
                      Check Your Email
                    </h4>
                    <p className="text-white/60 text-sm font-body">
                      Your 5 Pillars Self-Assessment is on its way.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="lead-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="lead-email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full px-4 py-4 bg-black border border-[#2E2E2E] text-white placeholder-white/40 font-body focus:outline-none focus:border-[#AFECDB]/50 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider hover:bg-[#7DD8C0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Get Your Free Assessment"}
                    </button>
                    {error && (
                      <p className="text-center text-red-400 text-xs font-body">
                        {error}
                      </p>
                    )}
                    <p className="text-center text-white/30 text-xs font-body">
                      Join 1,000+ on the path to their Level 5 Life
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
