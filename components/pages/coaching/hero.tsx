"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CoachingHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#AFECDB]/5 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#AFECDB]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AFECDB]/5 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs font-medium tracking-wider uppercase bg-[#AFECDB]/10 text-[#AFECDB] border border-[#AFECDB]/20 mb-6 font-heading">
            Private 1-on-1 Coaching
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-display leading-tight">
            DEEP TRANSFORMATION WITH{" "}
            <span className="text-[#AFECDB]">WORLD-CLASS COACHES</span>
          </h1>

          <p className="text-xl text-white/70 mb-4 leading-relaxed font-body max-w-3xl mx-auto">
            Exclusive coaching for those ready to break through limitations.
            We take on a limited number of clients to ensure the depth of
            transformation each person deserves.
          </p>

          <p className="text-white/50 font-body max-w-2xl mx-auto">
            Choose your coach below based on your primary transformation goals.
          </p>
        </motion.div>

        {/* Coach Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Garin Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] hover:border-[#AFECDB]/30 transition-all group"
          >
            {/* Exclusivity Badge */}
            <div className="absolute -top-3 right-4 bg-[#AFECDB] text-black px-3 py-1 text-xs font-bold font-heading z-10">
              BY APPLICATION ONLY
            </div>

            <div className="p-8">
              {/* Coach Image */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#AFECDB]/20 via-transparent to-[#AFECDB]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[4/5] max-w-[280px] mx-auto overflow-hidden border border-white/10">
                  <Image
                    src="/founders/Garin.JPEG"
                    alt="Garin - Business, Mindset & Purpose Coach"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Coach Info */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white font-heading mb-2">GARIN</h2>
                <p className="text-[#AFECDB] font-body text-sm uppercase tracking-wide">
                  Business, Mindset & Purpose
                </p>
              </div>

              {/* Specializations */}
              <div className="space-y-3 mb-8">
                <p className="text-white/70 font-body text-sm text-center mb-4">
                  For entrepreneurs and high-performers who have achieved external success
                  but want to align their work with deeper purpose and meaning.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Business Strategy",
                    "Purpose Clarity",
                    "Peak Performance",
                    "Leadership",
                    "Mindset Mastery",
                    "Life Design"
                  ].map((specialty) => (
                    <div key={specialty} className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-[#AFECDB] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-white/60 font-body">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Link */}
              <div className="text-center mb-6">
                <p className="text-white/40 text-xs font-body mb-2">Also leads</p>
                <Link
                  href="/level-5-life"
                  className="inline-flex items-center gap-2 text-[#AFECDB] hover:text-[#AFECDB]/80 text-sm font-heading transition-colors"
                >
                  LVL 5 LIFE Men&apos;s Mastermind
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              <Button href="#apply" variant="primary" className="w-full">
                Apply to Work with Garin
              </Button>
            </div>
          </motion.div>

          {/* Yesi Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] hover:border-rose-500/30 transition-all group"
          >
            {/* Scarcity Badge */}
            <div className="absolute -top-3 right-4 bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white px-3 py-1 text-xs font-bold font-heading z-10">
              2 SPOTS LEFT
            </div>

            <div className="p-8">
              {/* Coach Image */}
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-br from-rose-500/20 via-transparent to-fuchsia-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[4/5] max-w-[280px] mx-auto overflow-hidden border border-white/10">
                  <Image
                    src="/founders/YESI.JPG"
                    alt="Yesi - Health, Relationships & Feminine Energy Coach"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Coach Info */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white font-heading mb-2">YESI</h2>
                <p className="text-rose-400 font-body text-sm uppercase tracking-wide">
                  Health, Relationships & Feminine Energy
                </p>
              </div>

              {/* Specializations */}
              <div className="space-y-3 mb-8">
                <p className="text-white/70 font-body text-sm text-center mb-4">
                  For women who want to transform their body, master their relationships,
                  and reclaim their feminine power without sacrificing who they are.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Physical Vitality",
                    "Feminine Energy",
                    "Relationship Mastery",
                    "Inner Strength",
                    "Wellness Coaching",
                    "Life Integration"
                  ].map((specialty) => (
                    <div key={specialty} className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-rose-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-white/60 font-body">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Link */}
              <div className="text-center mb-6">
                <p className="text-white/40 text-xs font-body mb-2">Also leads</p>
                <Link
                  href="/fit-and-feminine"
                  className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 text-sm font-heading transition-colors"
                >
                  Fit & Feminine Women&apos;s Program
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="square" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              <button
                className="w-full h-12 bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white font-bold font-heading hover:opacity-90 transition-opacity"
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply to Work with Yesi
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm font-body max-w-2xl mx-auto">
            All coaching engagements require an application. We maintain strict limits
            to ensure each client receives the attention their transformation deserves.
            Investment discussed during discovery call.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
