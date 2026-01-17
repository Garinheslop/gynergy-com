"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function DateZeroFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is Date Zero right for us if we're in a crisis?",
      answer: "Date Zero is designed for couples at various stages—from those wanting to deepen an already good relationship to those working through significant challenges. If you're in immediate crisis (domestic abuse, severe mental health emergencies), we recommend seeking professional help first. For relationship struggles, communication breakdowns, or feeling disconnected, Date Zero provides a structured path forward."
    },
    {
      question: "Do we both need to participate?",
      answer: "Yes, Date Zero works best when both partners are committed to the process. The exercises, conversations, and growth opportunities are designed for couples to experience together. That said, even if one partner is more hesitant initially, we've seen many couples where enthusiasm became mutual once they started seeing results."
    },
    {
      question: "How much time do we need to commit each week?",
      answer: "Plan for about 3-4 hours per week: 30-60 minutes for the video content, 1-2 hours for the exercises and conversations, and optional time for the live coaching calls. The key is consistency rather than marathon sessions. Many couples find dedicating two 'Date Zero nights' per week works well."
    },
    {
      question: "What if we've tried couples therapy before?",
      answer: "Date Zero complements therapy—it doesn't replace it. Many of our most successful couples have also worked with therapists. What Date Zero offers is a structured, progressive curriculum you can work through together at home, plus a community of couples on similar journeys. Think of it as the 'homework' and practice ground for relationship growth."
    },
    {
      question: "How long do we have access to the materials?",
      answer: "You get lifetime access to all course materials, including any future updates. The live coaching calls are available during your program period, but recordings are added to your member area. The community access continues as long as you remain an active, engaged member."
    },
    {
      question: "What's the satisfaction guarantee?",
      answer: "We believe in our program completely. If you complete the full 8 weeks, do the exercises, and don't see meaningful improvement in your relationship, contact us within your guarantee period (30, 60, or 90 days depending on your package) for a full refund. We'll also offer a complimentary strategy session to help identify what might work better for your specific situation."
    },
    {
      question: "Can we start at any time?",
      answer: "Yes! Once you enroll, you get immediate access to all materials. You can begin your 8-week journey whenever you're ready. We recommend starting on a weekend when you can dedicate quality time to the first module together."
    },
    {
      question: "Is there a payment plan option?",
      answer: "Yes, we offer payment plans for all packages. You can split your investment into 2-4 monthly payments with no additional fees. Select your preferred option during checkout."
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Questions"
          labelVariant="teal"
          title="Frequently Asked Questions"
          subtitle="Have more questions? Reach out to us at hello@gynergy.com"
        />

        {/* FAQ accordion */}
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
                      ? 'border-[#AFECDB]/30'
                      : 'border-[#2E2E2E] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-white font-semibold pr-4">{faq.question}</h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        openIndex === index
                          ? 'bg-[#AFECDB] text-black rotate-45'
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

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@gynergy.com"
            className="inline-flex items-center gap-2 text-[#AFECDB] font-medium hover:underline"
          >
            <span>Contact us at hello@gynergy.com</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
