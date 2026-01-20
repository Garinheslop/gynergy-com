"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Founding member spots - can be updated via env or API later
const TOTAL_FOUNDING_SPOTS = 100
const SPOTS_CLAIMED = 22 // Update this as spots fill

interface WaitlistFormProps {
  selectedTier?: string
  onSuccess?: () => void
}

export function WaitlistForm({ selectedTier, onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [tier, setTier] = useState(selectedTier || "essential")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const spotsRemaining = TOTAL_FOUNDING_SPOTS - SPOTS_CLAIMED

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/ghl/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: name || undefined,
          tags: [
            "gynergy-ai-waitlist",
            "founding-member",
            `tier-interest-${tier}`,
            "gynergy-com",
          ],
          source: "gynergy.com/gynergy-ai",
          customFields: {
            waitlist_tier_interest: tier,
            waitlist_join_date: new Date().toISOString(),
          },
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setIsSuccess(true)
      onSuccess?.()

      // Track conversion (if analytics is set up)
      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "waitlist_signup", {
          event_category: "conversion",
          event_label: tier,
        })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 mx-auto mb-4 bg-[#AFECDB]/20 border border-[#AFECDB]/50 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#AFECDB]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-bebas text-2xl text-white mb-2">
          YOU&apos;RE ON THE LIST!
        </h3>
        <p className="text-white/60 text-sm font-inter mb-4">
          Check your inbox for confirmation and exclusive founding member updates.
        </p>
        <div className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30">
          <p className="text-[#AFECDB] text-xs font-oswald uppercase tracking-wider">
            Founding Member Status: Confirmed
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Spots Remaining Counter */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/50 border border-[#AFECDB]/30">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-[#AFECDB] animate-pulse" />
            <span className="font-bebas text-2xl text-[#AFECDB]">{spotsRemaining}</span>
          </div>
          <span className="text-white/60 text-xs font-inter">
            founding spots remaining
          </span>
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="waitlist-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="w-full px-4 py-3 bg-black border border-[#2E2E2E] text-white placeholder-white/40 font-inter text-sm focus:outline-none focus:border-[#AFECDB]/50 transition-colors"
        />
      </div>

      {/* Name Input (Optional) */}
      <div>
        <label htmlFor="waitlist-name" className="sr-only">
          Your name (optional)
        </label>
        <input
          type="text"
          id="waitlist-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full px-4 py-3 bg-black border border-[#2E2E2E] text-white placeholder-white/40 font-inter text-sm focus:outline-none focus:border-[#AFECDB]/50 transition-colors"
        />
      </div>

      {/* Tier Selection */}
      <div>
        <p className="text-white/40 text-xs font-oswald uppercase tracking-wider mb-2">
          I&apos;m most interested in:
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: "essential", label: "Essential", price: "$49" },
            { id: "accelerator", label: "Accelerator", price: "$99" },
            { id: "mastery", label: "Mastery", price: "$197" },
          ].map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setTier(option.id)}
              className={`px-3 py-2 border text-xs font-oswald uppercase tracking-wider transition-all ${
                tier === option.id
                  ? "bg-[#AFECDB]/10 border-[#AFECDB]/50 text-[#AFECDB]"
                  : "bg-transparent border-[#2E2E2E] text-white/50 hover:border-[#2E2E2E]"
              }`}
            >
              {option.label}
              <span className="block text-[10px] opacity-70">{option.price}/mo</span>
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-inter"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || !email}
        className="w-full py-4 bg-[#AFECDB] text-black font-oswald text-sm uppercase tracking-wider font-bold transition-all hover:bg-[#AFECDB]/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Joining...
          </span>
        ) : (
          "Secure My Founding Spot"
        )}
      </button>

      {/* Trust Indicators */}
      <div className="flex items-center justify-center gap-4 text-white/40 text-xs">
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" />
          </svg>
          No spam
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          Free to join
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          $49/mo locked in
        </span>
      </div>
    </form>
  )
}
