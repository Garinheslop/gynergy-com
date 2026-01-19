"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-label"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Who is AOE Brotherhood for?",
    answer:
      "AOE is for high-achieving men who want more from life. Men who are successful in some areas but know they're not operating at their full potential. If you're ready to be challenged, held accountable, and pushed to grow in every dimension—health, relationships, wealth, mindset, and purpose—this is for you.",
  },
  {
    question: "What happens on the weekly calls?",
    answer:
      "Each week, Garin and Rolando lead a live coaching session. We cover different topics across the 5 pillars, do hot seats where members get direct coaching, share wins and challenges, and set intentions for the week ahead. Calls are recorded if you can't make it live.",
  },
  {
    question: "How is this different from other men's groups?",
    answer:
      "Most men's groups are either too soft (just venting sessions) or too bro-y (superficial motivation). AOE is different. We're high-achievers who hold each other to high standards with love. We challenge each other. We celebrate wins. We push through the hard stuff together. It's real brotherhood.",
  },
  {
    question: "What's the time commitment?",
    answer:
      "At minimum: one weekly call (60-90 minutes) plus time in the community as you see fit. Most members also spend 15-30 minutes daily on challenges and accountability check-ins. The more you put in, the more you get out.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no commitments. Cancel anytime from your account. We also offer a 30-day money-back guarantee—if AOE isn't for you, just let us know within 30 days for a full refund.",
  },
  {
    question: "What if I miss a call?",
    answer:
      "All calls are recorded and posted in the community within 24 hours. You'll never miss content. That said, live attendance is where the magic happens—the hot seats, the energy, the real-time connection with brothers.",
  },
  {
    question: "Is this connected to LVL 5 LIFE?",
    answer:
      "AOE Brotherhood is the entry point to the GYNERGY ecosystem for men. It uses the same 5-Pillar framework as LVL 5 LIFE. Many AOE members eventually join LVL 5 LIFE when they're ready for the full 12-month mastermind experience. AOE members get priority access and special pricing.",
  },
  {
    question: "How do I join?",
    answer:
      "Click 'Join the Brotherhood' button, complete checkout ($79/month), and you'll get immediate access to the private community. You'll receive a welcome email with everything you need to get started, including the next call date.",
  },
]

export function AOEFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Questions"
          labelVariant="gold"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about joining the AOE Brotherhood."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="border border-[#2E2E2E] bg-[#1A1A1A]/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-[#1A1A1A]"
                >
                  <span className="text-white font-inter font-medium pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <svg
                      className="w-5 h-5 text-[#FFD700]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    <p className="text-white/60 text-sm leading-relaxed font-inter">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#FFD700] font-oswald uppercase tracking-wider hover:underline"
          >
            <span>Contact us directly</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
