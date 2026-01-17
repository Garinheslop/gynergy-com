"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { NewsletterForm } from "@/components/ui/newsletter-form"

export function PodcastNewsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F812]/5 via-transparent to-[#F8F812]/5" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-[#2E2E2E] p-8 lg:p-12">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#F8F812]/10 border border-[#F8F812]/30 flex items-center justify-center">
              <span className="text-4xl">📬</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-inter">
              Get Episode Alerts
            </h2>

            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Be the first to know when new episodes drop. Plus get exclusive
              bonus content, show notes, and episode recaps.
            </p>

            <div className="max-w-md mx-auto">
              <NewsletterForm variant="default" />
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/40 text-xs">
              <span>🔒 No spam, ever</span>
              <span>📧 Weekly episodes</span>
              <span>🎁 Bonus content</span>
            </div>
          </div>
        </motion.div>

        {/* Social follow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm mb-4">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            {[
              { name: "Instagram", href: "https://instagram.com/gynergy", icon: "📸" },
              { name: "YouTube", href: "https://youtube.com/@TheGynergyEffect", icon: "▶️" },
              { name: "TikTok", href: "https://tiktok.com/@gynergy", icon: "🎵" },
              { name: "LinkedIn", href: "https://linkedin.com/company/gynergy", icon: "💼" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] flex items-center justify-center hover:border-[#F8F812]/30 hover:bg-[#F8F812]/10 transition-all"
                title={social.name}
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
