"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

// SVG Icons
const CallIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
)

const CommunityIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const ExpertIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>
)

const ChallengeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
)

const AccountabilityIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const FrameworkIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
    />
  </svg>
)

export function AOEBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: <CallIcon />,
      title: "Weekly Live Calls",
      description:
        "Every week, join Garin and Rolando for deep-dive coaching sessions. Real talk. Real strategies. Real transformation happening in real time.",
    },
    {
      icon: <CommunityIcon />,
      title: "Private Brotherhood",
      description:
        "Access our members-only community of driven men. Share wins, get feedback, and build relationships with men who get it.",
    },
    {
      icon: <ExpertIcon />,
      title: "Expert Interviews",
      description:
        "Monthly sessions with world-class experts in health, wealth, relationships, and mindset. Learn from the best in every domain.",
    },
    {
      icon: <ChallengeIcon />,
      title: "Monthly Challenges",
      description:
        "Push your limits with structured challenges designed to build discipline. Health challenges. Financial goals. Relationship upgrades.",
    },
    {
      icon: <AccountabilityIcon />,
      title: "Accountability Partners",
      description:
        "Get matched with a brother who holds you to your commitments. Weekly check-ins. No excuses. Just results.",
    },
    {
      icon: <FrameworkIcon />,
      title: "5-Pillar Framework",
      description:
        "The complete system for mastering Health, Relationships, Wealth, Mindset, and Purpose. Integrated transformation across all areas.",
    },
  ]

  return (
    <section id="benefits" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD700]/5 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="What You Get"
          labelVariant="gold"
          title="Everything You Need to Level Up"
          subtitle="The AOE Brotherhood gives you the structure, community, and coaching to transform every area of your life."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-8 transition-all duration-500 hover:border-[#FFD700]/30"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] mb-6 transition-transform duration-500 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="font-oswald text-xl font-semibold text-white mb-3 tracking-wide uppercase">
                {benefit.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-inter">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* The Difference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-b from-[#1A1A1A]/50 to-transparent border border-[#FFD700]/20 p-8">
            <h3 className="font-oswald text-2xl font-semibold text-white mb-4 tracking-wide uppercase">
              Why This Is Different
            </h3>
            <p className="text-white/70 font-inter leading-relaxed mb-4">
              Most &ldquo;men&apos;s groups&rdquo; are either too soft or too bro-y.
              The AOE Brotherhood is neither.
            </p>
            <p className="text-white/60 font-inter text-sm leading-relaxed">
              We&apos;re high-achievers who demand excellence from ourselves AND each other.
              We challenge with love. We hold each other accountable. We celebrate wins.
              We push through the hard stuff together.
            </p>
            <p className="text-[#FFD700] font-oswald text-lg mt-6 tracking-wide">
              This is the brotherhood you&apos;ve been looking for.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
