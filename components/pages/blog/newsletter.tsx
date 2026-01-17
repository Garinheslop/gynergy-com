"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function BlogNewsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/ghl/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "blog-newsletter"
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      }
    } catch (error) {
      console.error("Newsletter error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#2E2E2E] p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F8F812]/10 border border-[#F8F812]/20 flex items-center justify-center">
              <span className="text-3xl">✉️</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-inter">
              Get Weekly Insights
            </h2>

            <p className="text-white/60 mb-8 leading-relaxed">
              Join 5,000+ high-performers receiving practical wisdom on health,
              relationships, mindset, and purpose every week.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-[#AFECDB]/10 border border-[#AFECDB]/20 rounded-xl"
              >
                <p className="text-[#AFECDB] font-medium">
                  You're in! Check your inbox for a welcome message.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-[#0D0D0D] border border-[#2E2E2E] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-[#F8F812]/50"
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "..." : "Subscribe"}
                </Button>
              </form>
            )}

            <p className="text-white/30 text-xs mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
