"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionHeader } from "@/components/ui/section-label"

// Featured YouTube episodes from The GYNERGY Effect channel
// Video IDs can be found in YouTube URL: youtube.com/watch?v=VIDEO_ID
const youtubeEpisodes = [
  {
    id: "featured",
    videoId: "Wla0f3gVD-c",
    title: "Becoming The Man He Needed Most — With Rick Niemi",
    description: "An inspiring conversation about personal transformation, becoming the man your family needs, and building a life of purpose.",
    featured: true
  },
  {
    id: "ep1",
    videoId: "2z3sogK3KmQ",
    title: "How to Build Structure for the Life You Desire",
    description: "Learn the frameworks and systems that help you create lasting change and build the life you truly want.",
  },
  {
    id: "ep2",
    videoId: "pSe4wMGPOgg",
    title: "3 Questions That Will Change How You Plan 2026",
    description: "Strategic questions to help you gain clarity and design your most intentional year yet.",
  },
  {
    id: "ep3",
    videoId: "xGN3CT6b38M",
    title: "You're Not Broken, You're Healing — With Kara Love",
    description: "A powerful discussion on healing trauma in your body and embracing the journey of transformation.",
  },
  {
    id: "ep4",
    videoId: "YlVM8esDGiU",
    title: "From War-Torn Childhood to AI Innovation — Dr. Sasha Banjac",
    description: "An incredible story of resilience, genius, and using technology to transform lives.",
  },
]

export function PodcastYouTubeEpisodes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeVideo, setActiveVideo] = useState(youtubeEpisodes[0])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-[#050505] to-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Watch"
          labelVariant="gold"
          title="Watch Full Episodes"
          subtitle="Experience the podcast visually. Watch complete episodes with Garin & Yesi."
        />

        <div className="mt-16">
          {/* Featured Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Video */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#2E2E2E] shadow-2xl shadow-black/50">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Video Info */}
            <div className="mt-6 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {activeVideo.title}
              </h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                {activeVideo.description}
              </p>
            </div>
          </motion.div>

          {/* Video Thumbnails Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h4 className="text-lg font-semibold text-white/80 text-center mb-6">
              More Episodes
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {youtubeEpisodes.map((episode) => (
                <button
                  key={episode.id}
                  type="button"
                  onClick={() => setActiveVideo(episode)}
                  className={`group relative aspect-video rounded-xl overflow-hidden border transition-all ${
                    activeVideo.id === episode.id
                      ? "border-[#F8F812] ring-2 ring-[#F8F812]/30"
                      : "border-[#2E2E2E] hover:border-white/30"
                  }`}
                >
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${episode.videoId}/mqdefault.jpg`}
                    alt={episode.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      activeVideo.id === episode.id
                        ? "bg-[#F8F812] scale-110"
                        : "bg-white/20 group-hover:bg-white/40 group-hover:scale-110"
                    }`}>
                      <svg
                        className={`w-5 h-5 ml-0.5 ${
                          activeVideo.id === episode.id ? "text-black" : "text-white"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Episode indicator */}
                  {activeVideo.id === episode.id && (
                    <div className="absolute top-2 left-2 bg-[#F8F812] text-black text-xs font-bold px-2 py-1 rounded">
                      NOW PLAYING
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* YouTube Channel CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="https://www.youtube.com/@TheGynergyEffect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
            <p className="text-white/40 text-sm mt-3">
              New episodes every week
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
