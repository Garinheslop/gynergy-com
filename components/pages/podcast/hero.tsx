"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function PodcastHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F812]/5 via-black to-black" />
        {/* Sound wave pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="flex items-center gap-1">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-[#F8F812] rounded-full"
                initial={{ height: 20 }}
                animate={{ height: 20 + Math.sin(i * 0.3) * 60 + Math.random() * 40 }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.05
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase bg-[#F8F812]/10 text-[#F8F812] border border-[#F8F812]/20 mb-8"
          >
            The Podcast
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight font-inter leading-tight"
          >
            The{" "}
            <span className="text-[#F8F812]">GYNERGY</span>{" "}
            Effect
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Weekly conversations on transformation, relationships, health, mindset,
            and living life at Level 5.
          </motion.p>

          {/* Platform buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              href="https://podcasts.apple.com/us/podcast/the-gynergy-effect/id1817206831"
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <span>🎧</span> Apple Podcasts
            </Button>
            <Button
              href="https://open.spotify.com/show/2eluz219FRFpR52Uf8FBJV"
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <span>🎵</span> Spotify
            </Button>
            <Button
              href="https://www.youtube.com/@TheGynergyEffect"
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <span>▶️</span> YouTube
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎙️</span>
              <span>50+ Episodes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <span>10K+ Downloads</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
