"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

// SVG Icons for platforms
const ApplePodcastIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm.75-10.5a.75.75 0 01-.75.75h-.75v6a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75zM12 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
  </svg>
)

const SpotifyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export function PodcastPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Real episodes from Buzzsprout RSS feed (updated Jan 2026)
  const episodes = [
    {
      number: "EP 27",
      title: "3 Questions for 2026",
      description: "Garin & Yesi reflect on the year and share three powerful questions to guide your transformation journey into the new year.",
      duration: "45 min",
      date: "Dec 31, 2025"
    },
    {
      number: "EP 26",
      title: "Not Broken, You're Healing",
      description: "A powerful conversation with Kara Love about reframing pain, embracing the healing journey, and finding wholeness.",
      duration: "1h 51m",
      date: "Dec 17, 2025"
    },
    {
      number: "EP 25",
      title: "War to AI Innovation",
      description: "Dr. Sasha Banjac shares his incredible journey from conflict zones to pioneering AI solutions for health and wellbeing.",
      duration: "65 min",
      date: "Dec 10, 2025"
    }
  ]

  const platforms = [
    {
      name: "Apple Podcasts",
      icon: <ApplePodcastIcon />,
      href: "https://podcasts.apple.com/us/podcast/the-gynergy-effect/id1817206831"
    },
    {
      name: "Spotify",
      icon: <SpotifyIcon />,
      href: "https://open.spotify.com/show/2eluz219FRFpR52Uf8FBJV"
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon />,
      href: "https://www.youtube.com/@TheGynergyEffect"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden">
      {/* Sound wave decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
        <div className="flex items-center gap-1">
          {[40, 60, 80, 100, 80, 60, 40, 60, 80, 60, 40].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={isInView ? { height } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="w-1 bg-[#FFD700]"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              label="The Podcast"
              labelVariant="gold"
              title="The GYNERGY Effect"
              subtitle="Weekly conversations on transformation, relationships, and living at Level 5. Listen wherever you get your podcasts."
              align="left"
            />

            {/* Platform links - SVG icons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {platforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-[#2E2E2E] text-sm text-white/70 hover:border-[#FFD700]/30 hover:text-white transition-all"
                >
                  <span className="text-[#FFD700]">{platform.icon}</span>
                  <span className="font-inter">{platform.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex gap-8"
            >
              <div>
                <p className="font-bebas text-4xl text-[#FFD700]">27</p>
                <p className="text-white/50 text-sm font-inter">Episodes</p>
              </div>
              <div>
                <p className="font-bebas text-4xl text-[#AFECDB]">2</p>
                <p className="text-white/50 text-sm font-inter">Seasons</p>
              </div>
              <div>
                <p className="font-bebas text-4xl text-white">5.0</p>
                <p className="text-white/50 text-sm font-inter">Rating</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8"
            >
              <Button href="/podcast">
                Browse All Episodes
              </Button>
            </motion.div>
          </motion.div>

          {/* Episodes list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {episodes.map((episode, index) => (
              <motion.div
                key={episode.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] p-5 hover:border-[#FFD700]/30 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Play button */}
                  <div className="w-12 h-12 bg-[#FFD700]/10 border border-[#FFD700]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] group-hover:border-[#FFD700] transition-all">
                    <svg
                      className="w-5 h-5 text-[#FFD700] group-hover:text-black transition-colors ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#FFD700] text-xs font-oswald font-medium tracking-wide">{episode.number}</span>
                      <span className="text-white/30">|</span>
                      <span className="text-white/40 text-xs font-inter">{episode.date}</span>
                    </div>
                    <h4 className="text-white font-oswald font-semibold mb-1 truncate group-hover:text-[#FFD700] transition-colors tracking-wide">
                      {episode.title}
                    </h4>
                    <p className="text-white/50 text-sm line-clamp-2 font-inter">{episode.description}</p>
                  </div>

                  {/* Duration */}
                  <div className="text-white/40 text-xs flex-shrink-0 font-inter">
                    {episode.duration}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* See more hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center py-4"
            >
              <a
                href="/podcast"
                className="text-[#FFD700] text-sm font-oswald font-medium tracking-wide hover:underline"
              >
                SEE ALL EPISODES
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
