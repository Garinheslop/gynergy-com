"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const faqs = [
  {
    question: "What makes ARIA different from ChatGPT or other AI assistants?",
    answer:
      "ChatGPT is a general-purpose AI that doesn't know your history, goals, or context. ARIA is 5 specialized coaches who learn about you over time. Your Health Coach knows your fitness patterns. Your Wealth Coach understands your financial goals. They work together to give you coherent guidance—not isolated advice from a chatbot that forgets you exist.",
  },
  {
    question: "How does the 5-Pillar System actually work?",
    answer:
      "Each pillar (Health, Relationships, Wealth, Mindset, Purpose) has a dedicated AI coach trained in that domain. When you interact with ARIA, the relevant coach responds based on your question. They share context—so if your Health Coach notices low energy affecting your work, your Wealth Coach factors that into productivity advice. It's integrated intelligence, not siloed apps.",
  },
  {
    question: "What's included in each tier?",
    answer:
      "Essential ($49/mo): Full 5-Pillar access, ARIA coaching 24/7, progress dashboard, community access. Accelerator ($99/mo): Everything in Essential plus weekly deep-dive calls, accountability partner matching, advanced analytics. Mastery ($197/mo): Everything in Accelerator plus monthly 1-on-1 coaching call, priority support, exclusive content library, and white-glove onboarding.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, absolutely. No contracts, no commitments. Cancel anytime from your dashboard. We also offer a 30-day money-back guarantee—if ARIA isn't transforming your life, we'll refund you completely. We're that confident in what we've built.",
  },
  {
    question: "How is my data protected?",
    answer:
      "Your privacy is paramount. All conversations are encrypted end-to-end. We never sell your data to third parties. Your coaching history is yours—you can export or delete it anytime. We're building trust, not harvesting data.",
  },
  {
    question: "What's the Founding Member benefit?",
    answer:
      "Founding members lock in $49/month pricing forever. When we raise prices (planned Q2 2026 to $99/month), you keep your original rate. Plus you get direct input into product development—your feedback shapes ARIA's future. Limited to 100 founding members.",
  },
  {
    question: "Do I need to be in the US to use ARIA?",
    answer:
      "ARIA is available worldwide. The platform works 24/7 regardless of timezone. Community calls are typically scheduled for US-friendly hours, but recordings are always available.",
  },
  {
    question: "What if I'm already in LVL 5 LIFE or another GYNERGY program?",
    answer:
      "ARIA enhances your existing program—it doesn't replace it. Many LVL 5 LIFE members use ARIA for daily coaching between mastermind calls. Your coaches can see your ARIA insights (with permission), making your 1-on-1 time more impactful.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      id="faq"
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#AFECDB]/50" />
            <span className="text-xs font-oswald font-semibold tracking-[0.2em] uppercase text-[#AFECDB]">
              Questions Answered
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#AFECDB]/50" />
          </div>

          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4">
            FREQUENTLY ASKED{" "}
            <span className="text-[#AFECDB]">QUESTIONS</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="border border-[#2E2E2E] bg-[#0D0D0D]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-oswald text-sm uppercase tracking-wider text-white/90 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-[#AFECDB] transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-white/60 text-sm font-inter leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/50 text-sm font-inter mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[#AFECDB] text-sm font-oswald uppercase tracking-wider hover:text-[#AFECDB]/80 transition-colors"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
