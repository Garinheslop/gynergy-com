"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export function DateZeroFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What exactly is The 45 Day Awakening?",
      answer: "The 45 Day Awakening is a transformational journey built on the foundation of gratitude. Over 45 days, you'll rewire how you see yourself, your circumstances, and your purpose through daily journaling (the Date Zero Journal), weekly coaching calls with Garin & Yesi, a private community of fellow transformers, and 24/7 ARIA AI support. It's not just a course—it's a complete personal transformation experience."
    },
    {
      question: "What is the Date Zero Journal?",
      answer: "The Date Zero Journal is the heart of the transformation experience. It contains 45 days of guided prompts, morning and evening gratitude rituals, reflection exercises for each phase (Foundation, Deep Work, Integration), and space for personal insights. You can purchase the journal alone for $197 as a self-guided experience, or get it included with The 45 Day Awakening full program."
    },
    {
      question: "Who is this program for?",
      answer: "The 45 Day Awakening is for anyone ready to fundamentally shift how they experience life. Whether you're dealing with burnout, seeking more meaning, feeling disconnected from purpose, or simply want to cultivate deeper gratitude and joy—this program meets you where you are. It's for individuals committed to doing the inner work required for lasting transformation."
    },
    {
      question: "What's included in the Service Retreat?",
      answer: "The Service Retreat in Ensenada, Mexico is a life-changing experience that includes: transportation from San Diego, beachfront lodging, all meals, participation in building homes for families in need, orphanage visits and donations, and exclusive 'Break Free' teachings and workshops. It's the culmination of your gratitude journey—putting your transformation into action through service."
    },
    {
      question: "How much time do I need to commit each day?",
      answer: "Plan for about 20-30 minutes daily for your journal practice (morning and evening rituals). Weekly coaching calls are 60-90 minutes. The community and ARIA AI support are available whenever you need them. The key is consistency—showing up daily, even if briefly, creates the compound effect of transformation."
    },
    {
      question: "What is ARIA AI and how does it support me?",
      answer: "ARIA is your AI companion throughout the journey, available 24/7 for personalized guidance, encouragement, and support. She helps you process journal reflections, provides prompts when you're stuck, celebrates your wins, and keeps you accountable to your transformation goals. Think of ARIA as a wise friend who's always there when you need her."
    },
    {
      question: "What's the difference between the Journal Only and the Full Program?",
      answer: "The Date Zero Journal ($197) is a powerful self-guided experience with all 45 days of prompts and exercises. The 45 Day Awakening ($1,497) includes the journal PLUS weekly live coaching, private community access, ARIA AI support, shadow work practices, and preparation materials for the Service Retreat. The full program provides accountability, community, and expert guidance for deeper transformation."
    },
    {
      question: "What's the satisfaction guarantee?",
      answer: "We believe completely in this program. If you commit to the full 45 days—doing the daily journal work, attending calls, engaging with the community—and don't experience meaningful transformation, contact us within your guarantee period (30, 45, or 90 days depending on your package) for a full refund. We'll also offer a complimentary strategy session to help identify what might work better for your situation."
    },
    {
      question: "Can I do the program if I can't attend the Mexico retreat?",
      answer: "Absolutely. The 45 Day Awakening is a complete transformation experience on its own. The Service Retreat is an optional (and powerful) addition that allows you to put your gratitude into action through service. Many participants complete the program first and join a later retreat when timing works better for them."
    },
    {
      question: "Is there a payment plan option?",
      answer: "Yes! We offer payment plans for The 45 Day Awakening and the Bundle packages. You can split your investment into 2-4 monthly payments with no additional fees. Select your preferred option during checkout."
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFD700] text-sm font-medium tracking-wider uppercase font-oswald">
            QUESTIONS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 font-bebas">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-inter">
            Have more questions? Reach out to us at hello@gynergy.com
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
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
                  className={`bg-[#1A1A1A] border p-5 transition-all ${
                    openIndex === index
                      ? 'border-[#FFD700]/30'
                      : 'border-[#2E2E2E] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-white font-semibold pr-4 font-oswald">{faq.question}</h3>
                    <div
                      className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all ${
                        openIndex === index
                          ? 'bg-[#FFD700] text-black rotate-45'
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
                    <p className="text-white/60 mt-4 leading-relaxed text-sm font-inter">
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
          <p className="text-white/60 mb-4 font-inter">Still have questions?</p>
          <a
            href="mailto:hello@gynergy.com"
            className="inline-flex items-center gap-2 text-[#FFD700] font-medium hover:underline font-oswald"
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
