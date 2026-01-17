"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function L5LFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Who is Level 5 Life for?",
      answer: "Level 5 Life is for high-achievers who have accomplished external success but feel something is missing. You've built a successful career or business, but you want more—deeper relationships, better health, mental clarity, and a sense of purpose. If you're ready to invest in yourself at the highest level and commit to 12 months of focused growth, this is for you."
    },
    {
      question: "What's the time commitment?",
      answer: "Plan for 5-8 hours per week: weekly coaching calls (90 minutes), personal development work (2-3 hours), and community engagement (1-2 hours). The two retreats require 4-5 days each. This is a serious commitment—the results reflect the effort you put in."
    },
    {
      question: "Can my spouse/partner participate?",
      answer: "Yes! We encourage partner participation in select sessions, especially those focused on relationships. Spouses/partners can attend certain coaching calls and have access to the Date Zero program included in your membership. For retreats, we have options for partners to join portions of the experience."
    },
    {
      question: "What if I can't make all the calls?",
      answer: "All coaching calls are recorded and available in your member area within 24 hours. While live participation is ideal for the hot-seat opportunities and real-time interaction, you can still benefit from the recordings. We recommend attending at least 75% of live calls for optimal results."
    },
    {
      question: "Where are the retreats held?",
      answer: "Retreat locations vary by cohort and are chosen for their transformative potential—think Costa Rica, Bali, Sedona, or the Mediterranean. Accommodations, meals, and retreat activities are included. You're responsible for travel to/from the location. Specific destinations are announced 90 days before each retreat."
    },
    {
      question: "Is there a payment plan?",
      answer: "Yes, we offer a 12-month payment plan of $1,400/month with no additional fees. You can also pay in full for a $2,800 savings. All payments are secure and can be made via credit card or bank transfer."
    },
    {
      question: "What if it's not right for me?",
      answer: "We have a thorough application process to ensure mutual fit. If after the first 30 days you feel Level 5 Life isn't right for you, and you've attended all calls and completed all assignments, we'll provide a prorated refund. Our commitment is to your transformation—we only want members who are fully committed."
    },
    {
      question: "How is this different from other masterminds?",
      answer: "Three things set us apart: 1) The comprehensive approach addressing all four pillars simultaneously rather than just business or just mindset, 2) The ARIA AI companion providing daily personalized support between sessions, and 3) The depth of our in-person retreats which create breakthrough experiences impossible to replicate virtually."
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Questions"
          labelVariant="gold"
          title="Frequently Asked Questions"
        />

        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div
                  className={`bg-[#1A1A1A] border rounded-xl p-5 transition-all ${
                    openIndex === index
                      ? 'border-[#F8F812]/30'
                      : 'border-[#2E2E2E] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-white font-semibold pr-4">{faq.question}</h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        openIndex === index
                          ? 'bg-[#F8F812] text-black rotate-45'
                          : 'bg-[#2E2E2E] text-white'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/60 mt-4 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">Have a specific question?</p>
          <a
            href="mailto:hello@gynergy.com"
            className="inline-flex items-center gap-2 text-[#F8F812] font-medium hover:underline"
          >
            <span>Reach out to hello@gynergy.com</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
