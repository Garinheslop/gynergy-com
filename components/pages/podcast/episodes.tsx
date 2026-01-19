

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { SectionHeader } from "@/components/ui/section-label"

// Types for Buzzsprout RSS feed
interface PodcastEpisode {
  title: string
  description: string
  pubDate: string
  duration: string
  audioUrl: string
  episodeNumber?: string
  image?: string
}

// Placeholder episodes for initial render and fallback
const placeholderEpisodes: PodcastEpisode[] = [
  {
    title: "The GYNERGY Effect: Transforming Lives Together",
    description: "Join Garin & Yesi as they share insights on building a life of purpose, connection, and growth.",
    pubDate: "Jan 2025",
    duration: "45 min",
    audioUrl: "#",
    episodeNumber: "Latest"
  },
  {
    title: "Breaking Through Limiting Beliefs",
    description: "Discover the mental frameworks that high achievers use to overcome self-doubt and achieve extraordinary results.",
    pubDate: "Jan 2025",
    duration: "38 min",
    audioUrl: "#",
    episodeNumber: "EP 52"
  },
  {
    title: "The Art of Deep Connection in Relationships",
    description: "How to build relationships that fuel your growth and bring lasting fulfillment to every area of life.",
    pubDate: "Jan 2025",
    duration: "52 min",
    audioUrl: "#",
    episodeNumber: "EP 51"
  },
  {
    title: "Health Optimization for High Performers",
    description: "The science-backed strategies for peak physical performance without sacrificing your lifestyle.",
    pubDate: "Dec 2024",
    duration: "41 min",
    audioUrl: "#",
    episodeNumber: "EP 50"
  },
  {
    title: "Finding Your Purpose: A Framework",
    description: "A step-by-step approach to discovering and pursuing the work that lights you up.",
    pubDate: "Dec 2024",
    duration: "48 min",
    audioUrl: "#",
    episodeNumber: "EP 49"
  },
  {
    title: "The Mindset of Elite Achievers",
    description: "What separates the top 1% from everyone else? It's not talent—it's mindset.",
    pubDate: "Dec 2024",
    duration: "44 min",
    audioUrl: "#",
    episodeNumber: "EP 48"
  }
]

export function PodcastEpisodes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>(placeholderEpisodes)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "recent">("all")

  // Fetch episodes from Buzzsprout RSS via API route
  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch("/api/podcast/episodes")
        const data = await response.json()

        if (data.success && data.episodes.length > 0) {
          setEpisodes(data.episodes)
        } else {
          // Fallback to placeholder if API fails
          setEpisodes(placeholderEpisodes)
        }
      } catch (error) {
        console.error("Failed to fetch episodes:", error)
        setEpisodes(placeholderEpisodes)
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  const displayedEpisodes = filter === "recent" ? episodes.slice(0, 3) : episodes

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Episodes"
          labelVariant="teal"
          title="Listen to the Latest"
          subtitle="Deep conversations on transformation, relationships, and living your best life."
        />

        {/* Filter tabs */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-[#AFECDB] text-black"
                : "bg-[#1A1A1A] text-white/70 hover:bg-[#2E2E2E]"
            }`}
          >
            All Episodes
          </button>
          <button
            onClick={() => setFilter("recent")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "recent"
                ? "bg-[#AFECDB] text-black"
                : "bg-[#1A1A1A] text-white/70 hover:bg-[#2E2E2E]"
            }`}
          >
            Most Recent
          </button>
        </div>

        {/* Episodes list */}
        <div className="mt-12 space-y-4">
          {loading ? (
            // Loading skeleton
            [...Array(3)].map((_, i) => (
              <div key={i} className="bg-[#1A1A1A] rounded-xl p-6 animate-pulse">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2E2E2E]" />
                  <div className="flex-1">
                    <div className="h-4 bg-[#2E2E2E] rounded w-1/3 mb-2" />
                    <div className="h-6 bg-[#2E2E2E] rounded w-2/3 mb-2" />
                    <div className="h-4 bg-[#2E2E2E] rounded w-full" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            displayedEpisodes.map((episode, index) => (
              <motion.div
                key={episode.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] rounded-xl border border-[#2E2E2E] p-6 hover:border-[#AFECDB]/30 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Play button */}
                  <div className="w-14 h-14 rounded-full bg-[#AFECDB]/10 border border-[#AFECDB]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#AFECDB] group-hover:border-[#AFECDB] transition-all">
                    <svg
                      className="w-6 h-6 text-[#AFECDB] group-hover:text-black transition-colors ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#AFECDB] text-sm font-medium">
                        {episode.episodeNumber}
                      </span>
                      <span className="text-white/30">•</span>
                      <span className="text-white/40 text-sm">{episode.pubDate}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#AFECDB] transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-2">
                      {episode.description}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="text-white/40 text-sm flex-shrink-0 hidden md:block">
                    {episode.duration}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Load more */}
        {filter === "recent" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setFilter("all")}
              className="text-[#AFECDB] font-medium hover:underline"
            >
              View all episodes →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
