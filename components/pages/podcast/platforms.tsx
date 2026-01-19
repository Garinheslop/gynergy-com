"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"

export function PodcastPlatforms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const platforms = [
    {
      name: "Apple Podcasts",
      description: "Listen on your iPhone, iPad, Mac, or Apple TV",
      icon: "🎧",
      href: "https://podcasts.apple.com/us/podcast/the-gynergy-effect/id1817206831",
      color: "#FA243C"
    },
    {
      name: "Spotify",
      description: "Stream anywhere with Spotify Free or Premium",
      icon: "🎵",
      href: "https://open.spotify.com/show/2eluz219FRFpR52Uf8FBJV",
      color: "#1DB954"
    },
    {
      name: "YouTube",
      description: "Watch the video podcast with full episodes",
      icon: "▶️",
      href: "https://www.youtube.com/@TheGynergyEffect",
      color: "#FF0000"
    },
    {
      name: "RSS Feed",
      description: "Subscribe in your favorite podcast app",
      icon: "📡",
      href: "https://feeds.buzzsprout.com/2506068.rss",
      color: "#AFECDB"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Listen Anywhere"
          labelVariant="teal"
          title="Subscribe on Your Favorite Platform"
          subtitle="Never miss an episode. Follow us wherever you listen to podcasts."
        />

        {/* Platforms grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-[#2E2E2E] p-6 text-center transition-all duration-300 hover:border-white/20 hover:shadow-lg">
                {/* Icon */}
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${platform.color}15`,
                    borderColor: `${platform.color}30`,
                    borderWidth: '1px'
                  }}
                >
                  {platform.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#AFECDB] transition-colors">
                  {platform.name}
                </h3>
                <p className="text-white/50 text-sm">{platform.description}</p>

                {/* Arrow */}
                <div className="mt-4 flex items-center justify-center text-[#AFECDB] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">Listen Now</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Embedded Buzzsprout player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8 font-body">
            Listen to the Latest
          </h3>
          <div className="max-w-3xl mx-auto">
            {/* Buzzsprout embed */}
            <div className="bg-[#1A1A1A] rounded-xl border border-[#2E2E2E] p-4 overflow-hidden">
              <iframe
                src="https://www.buzzsprout.com/2506068?client_source=large_player&iframe=true&referrer=https://gynergy.com"
                loading="lazy"
                width="100%"
                height="375"
                frameBorder="0"
                scrolling="no"
                title="The GYNERGY Effect Podcast"
                className="rounded-lg"
                style={{ backgroundColor: "#0D0D0D" }}
              />
            </div>
            <p className="text-center text-white/40 text-sm mt-4 font-body">
              Or subscribe using the links above to never miss an episode
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
