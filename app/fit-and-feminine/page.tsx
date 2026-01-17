"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function FitAndFemininePage() {
  return (
    <>
      <FitFeminineHero />
      <FitFemininePillars />
      <FitFeminineExpect />
      <FitFeminineAbout />
      <FitFeminineCTA />
    </>
  )
}

// Waitlist Form Component
function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setStep(2)
  }

  const handleFullSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStep(3)
    setIsSubmitting(false)
  }

  if (step === 3) {
    return (
      <div className={`bg-[#1A1A1A] border border-rose-500/30 p-8 text-center ${className}`}>
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white font-bebas">YOU&apos;RE ON THE LIST!</h3>
        <p className="text-white/60 mt-2 font-inter">We&apos;ll notify you when doors open in May 2026.</p>
        <div className="mt-6 p-4 bg-black/50 border border-rose-500/20">
          <p className="text-rose-400 text-sm font-oswald">FOUNDING MEMBER BENEFITS LOCKED IN:</p>
          <ul className="text-white/50 text-sm mt-2 space-y-1 font-inter">
            <li>First access when enrollment opens</li>
            <li>Exclusive founding member pricing</li>
            <li>Direct line to Yesi</li>
          </ul>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <form onSubmit={handleFullSubmit} className={`space-y-4 ${className}`}>
        <p className="text-rose-400 text-sm font-oswald text-center">ALMOST THERE!</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your first name (optional)"
          className="w-full h-14 px-4 bg-[#1A1A1A] border border-[#2E2E2E] text-white placeholder-white/40 focus:border-rose-500/50 focus:outline-none font-inter"
        />
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="flex-1 h-12 border border-[#2E2E2E] text-white/60 hover:text-white hover:border-white/30 transition-colors font-oswald"
          >
            BACK
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 h-12 bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white font-bold font-oswald hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? "JOINING..." : "JOIN WAITLIST"}
          </button>
        </div>
      </form>
    )
  }

  return (
    <form onSubmit={handleEmailSubmit} className={`space-y-4 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="w-full h-14 px-4 bg-[#1A1A1A] border border-[#2E2E2E] text-white placeholder-white/40 focus:border-rose-500/50 focus:outline-none text-center font-inter"
      />
      <button
        type="submit"
        className="w-full h-14 bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white font-bold font-oswald text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L14.5 8.5L20.5 9L16 13.5L17.5 19.5L12 16L6.5 19.5L8 13.5L3.5 9L9.5 8.5L12 3Z"/>
        </svg>
        JOIN THE INTEREST LIST
      </button>
      <p className="text-white/40 text-xs text-center font-inter">
        Be first when doors open. No spam, ever.
      </p>
    </form>
  )
}

// Hero Section
function FitFeminineHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-950/30 via-black to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-rose-500/10 to-fuchsia-500/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-oswald tracking-wider">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="square" strokeLinejoin="miter" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            LAUNCHING MAY 2026
          </span>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-bebas">
            FIT &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">
              FEMININE
            </span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-2">
            <p className="text-lg text-white/70 uppercase tracking-[0.2em] font-oswald">
              The Women&apos;s Transformation Experience
            </p>
            <p className="text-white/40 font-inter">Led by Yesi</p>
          </div>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-inter">
            Transform your body, master your relationships, and reclaim your feminine power
            alongside women who get it.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <WaitlistForm className="max-w-md mx-auto" />
          </div>

          {/* Social proof */}
          <p className="text-sm text-white/40 font-inter">
            <span className="text-rose-400 font-semibold">Interest list growing</span> — Be first when doors open
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <svg className="w-6 h-6 text-white/30 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

// Pillars Section
function FitFemininePillars() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="square" d="M6.75 6.75h.75v.75h-.75zM6.75 16.5h.75v.75h-.75zM16.5 6.75h.75v.75h-.75zM16.5 16.5h.75v.75h-.75zM3 12h18M12 3v18" />
        </svg>
      ),
      title: "Physical Vitality",
      description: "Build strength and energy through a relationship with your body rooted in respect—not punishment.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: "Relationship Mastery",
      description: "Transform your relationships from a place of wholeness, whether partnered or seeking partnership.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="square" d="M12 18.75c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6z" />
          <path strokeLinecap="square" d="M12 12.75v-9M8 6l4-3 4 3" />
        </svg>
      ),
      title: "Feminine Energy",
      description: "Reclaim your feminine power in a world that rewards masculine energy in women.",
    },
  ]

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-black px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-bebas">
            THIS ISN&apos;T A WATERED-DOWN
            <br />
            <span className="text-white/40">VERSION OF A MEN&apos;S PROGRAM</span>
          </h2>
          <p className="text-white/60 mt-6 max-w-2xl mx-auto font-inter">
            Fit & Feminine is built from the ground up for how women transform—
            honoring your unique path to strength, fulfillment, and power.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] hover:border-rose-500/30 transition-colors"
            >
              <div className="w-14 h-14 mb-6 bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 flex items-center justify-center text-rose-400">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-oswald">{pillar.title}</h3>
              <p className="text-white/60 text-sm font-inter">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// What to Expect Section
function FitFeminineExpect() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const expectations = [
    { icon: "users", title: "Intimate Group (15 Women Max)", description: "Small cohorts for deep connection and accountability" },
    { icon: "calendar", title: "Weekly Coaching with Yesi", description: "Live sessions to guide your transformation" },
    { icon: "dumbbell", title: "Fitness + Inner Work", description: "Physical transformation integrated with mindset" },
    { icon: "home", title: "Service Retreat Option", description: "Build homes alongside the GYNERGY community" },
  ]

  const getIcon = (name: string) => {
    switch (name) {
      case "users":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="square" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
        )
      case "calendar":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="square" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        )
      case "dumbbell":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="square" d="M3 12h18M6 8v8M18 8v8M9 6v12M15 6v12" />
          </svg>
        )
      case "home":
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="square" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#050505] border-y border-[#1A1A1A] px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-rose-400 text-sm font-oswald tracking-wider">WHAT TO EXPECT</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 font-bebas">
            DETAILS COMING EARLY 2026
          </h2>
          <p className="text-white/60 mt-4 font-inter">Here&apos;s what we&apos;re building:</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {expectations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-5 bg-[#1A1A1A] border border-[#2E2E2E]"
            >
              <div className="w-10 h-10 mb-4 bg-rose-500/10 flex items-center justify-center text-rose-400">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-semibold text-white mb-2 font-oswald">{item.title}</h3>
              <p className="text-sm text-white/60 font-inter">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 text-white/40 text-sm font-inter"
        >
          Investment and full program details announced early 2026.
          <br />
          <span className="text-rose-400">Interest list members receive first access + founding member pricing.</span>
        </motion.p>
      </div>
    </section>
  )
}

// About Yesi Section
function FitFeminineAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-black px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] max-w-md mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-rose-500/20 via-transparent to-fuchsia-500/20 blur-xl" />
            <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-black h-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="square" d="M12 18.75c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6z" />
                    <path strokeLinecap="square" d="M12 12.75v-9M8 6l4-3 4 3" />
                  </svg>
                </div>
                <p className="text-white/40 text-sm font-inter">Yesi</p>
                <p className="text-white/30 text-xs font-inter mt-1">Co-Founder, GYNERGY</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-oswald">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              MEET YOUR GUIDE
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white font-bebas">
              ABOUT YESI
            </h2>

            <div className="space-y-4 text-white/60 font-inter">
              <p>
                Yesi embodies the integration she teaches. From first-generation engineer to
                wellness coach, from Goldman Sachs to building homes in Mexico—she&apos;s walked
                the path of transforming achievement into fulfillment.
              </p>
              <p>Her approach combines:</p>
            </div>

            <ul className="space-y-3">
              {[
                "10+ years of fitness and wellness expertise",
                "Deep work in feminine energy and relationship dynamics",
                "Real-world experience leading and partnering",
                "A commitment to service that grounds everything",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80 font-inter">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FitFeminineCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-b from-[#050505] to-black px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-bebas">
            BE FIRST WHEN DOORS OPEN
          </h2>
          <p className="text-white/60 text-lg font-inter">
            Join the interest list. No obligation. Just priority access.
          </p>

          <WaitlistForm className="max-w-md mx-auto" />

          <div className="flex items-center justify-center gap-6 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="font-inter">No Spam Ever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="font-inter">Your Data Stays Private</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Other programs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <p className="text-white/40 mb-6 font-inter">Looking for something else?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/date-zero" variant="outline">
            The 45 Day Awakening
          </Button>
          <Button href="/level-5-life" variant="outline">
            LVL 5 LIFE (Men&apos;s Program)
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
