"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function GynergyAIHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#AFECDB]/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(175, 236, 219, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 80%, rgba(175, 236, 219, 0.1) 0%, transparent 40%)`,
          }}
        />
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(175, 236, 219, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(175, 236, 219, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-oswald uppercase tracking-[0.2em]">
            AI-Powered Transformation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wide mb-6"
        >
          MEET{" "}
          <span className="text-[#AFECDB]">ARIA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-oswald text-2xl md:text-3xl lg:text-4xl text-white/90 tracking-wide mb-4"
        >
          Your Personal Board of Directors
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/60 text-lg md:text-xl font-inter max-w-2xl mx-auto mb-8"
        >
          Stop switching apps. Start getting real results.
          <br />
          One unified interface. 5 specialized coaches. Complete clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#pricing" size="xl">
            Join the Waitlist
          </Button>
          <Button href="#how-it-works" variant="secondary" size="xl">
            See How It Works
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="font-bebas text-4xl text-[#AFECDB]">5</p>
            <p className="text-white/50 text-sm font-inter">Specialized Coaches</p>
          </div>
          <div className="text-center">
            <p className="font-bebas text-4xl text-[#AFECDB]">24/7</p>
            <p className="text-white/50 text-sm font-inter">Available</p>
          </div>
          <div className="text-center">
            <p className="font-bebas text-4xl text-[#AFECDB]">1</p>
            <p className="text-white/50 text-sm font-inter">Unified Dashboard</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
