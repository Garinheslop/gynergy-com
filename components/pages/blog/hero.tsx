"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F812]/5 via-black to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase bg-[#F8F812]/10 text-[#F8F812] border border-[#F8F812]/20 mb-6">
            GYNERGY Blog
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-inter leading-tight">
            Insights for{" "}
            <span className="text-[#F8F812]">Transformation</span>
          </h1>

          <p className="text-xl text-white/70 leading-relaxed">
            Practical wisdom on health, relationships, mindset, and purpose.
            Curated for high-performers seeking extraordinary lives.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
