"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle, ArrowRight } from "lucide-react"

interface NewsletterFormProps {
  variant?: "default" | "footer" | "hero"
  className?: string
}

export function NewsletterForm({
  variant = "default",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  )
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Submit to GHL
      const response = await fetch("/api/ghl/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          tags: ["newsletter", "gynergy-com", "website-signup"],
          source: "gynergy.com",
        }),
      })

      if (!response.ok) throw new Error("Failed to subscribe")

      setStatus("success")
      setEmail("")
      setName("")

      // Reset after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#F8F812]/50 transition-colors text-sm"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#F8F812]/50 transition-colors text-sm"
          required
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full px-6 py-3 bg-[#F8F812] text-black font-archivo font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#E6E610] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Subscribed!
            </>
          ) : (
            "Subscribe"
          )}
        </button>
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-xs"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    )
  }

  if (variant === "hero") {
    return (
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col sm:flex-row gap-3 ${className}`}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-[#F8F812]/50 transition-colors"
          required
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="px-8 py-4 bg-[#F8F812] text-black font-archivo font-bold uppercase tracking-wider rounded-full hover:bg-[#E6E610] disabled:opacity-50 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {status === "loading" ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : status === "success" ? (
            <>
              <CheckCircle className="h-5 w-5" />
              Subscribed!
            </>
          ) : (
            <>
              Get Started
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
    )
  }

  // Default variant
  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#F8F812]/50 transition-colors"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#F8F812]/50 transition-colors"
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="w-full px-8 py-4 bg-[#F8F812] text-black font-archivo font-bold uppercase tracking-wider rounded-full hover:bg-[#E6E610] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Subscribing...
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle className="h-5 w-5" />
            You&apos;re In!
          </>
        ) : (
          "Sign Up Now"
        )}
      </button>
      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-400 text-sm text-center"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
