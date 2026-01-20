import { Metadata } from "next"
import { PodcastHero } from "@/components/pages/podcast/hero"
import { PodcastYouTubeEpisodes } from "@/components/pages/podcast/youtube-episodes"
import { PodcastEpisodes } from "@/components/pages/podcast/episodes"
import { PodcastPlatforms } from "@/components/pages/podcast/platforms"
import { PodcastHost } from "@/components/pages/podcast/host"
import { PodcastNewsletter } from "@/components/pages/podcast/newsletter"

export const metadata: Metadata = {
  title: "The GYNERGY Effect Podcast | Transform Your Life",
  description:
    "Weekly conversations with Garin & Yesi on transformation, relationships, health, mindset, and purpose. Listen on Apple Podcasts, Spotify, or YouTube.",
  openGraph: {
    title: "The GYNERGY Effect Podcast",
    description:
      "Weekly conversations on transformation, relationships, and living at Level 5.",
    url: "https://gynergy.com/podcast",
    type: "website",
  },
}

export default function PodcastPage() {
  return (
    <>
      <PodcastHero />
      <PodcastYouTubeEpisodes />
      <PodcastEpisodes />
      <PodcastPlatforms />
      <PodcastHost />
      <PodcastNewsletter />
    </>
  )
}
