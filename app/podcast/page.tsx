import { Metadata } from "next"
import { PodcastHero } from "@/components/pages/podcast/hero"
import { PodcastYouTubeEpisodes } from "@/components/pages/podcast/youtube-episodes"
import { PodcastEpisodes } from "@/components/pages/podcast/episodes"
import { PodcastPlatforms } from "@/components/pages/podcast/platforms"
import { PodcastHost } from "@/components/pages/podcast/host"
import { PodcastNewsletter } from "@/components/pages/podcast/newsletter"
import { JsonLdScript, podcastSchema } from "@/components/seo/json-ld-schemas"

export const metadata: Metadata = {
  title: "The GYNERGY Effect Podcast | Transform Your Life with Garin & Yesi Heslop",
  description:
    "The GYNERGY Effect is a weekly podcast hosted by Garin & Yesi Heslop covering transformation, relationships, health optimization, mindset mastery, and finding your purpose. Subscribe on Apple Podcasts, Spotify, or YouTube.",
  keywords: [
    "The GYNERGY Effect podcast",
    "Garin Heslop podcast",
    "Yesi Heslop podcast",
    "transformation podcast",
    "personal development podcast",
    "relationships podcast",
    "health optimization podcast",
    "mindset podcast",
    "purpose podcast",
    "life coaching podcast",
    "5 pillars of life",
    "GYNERGY podcast",
  ],
  openGraph: {
    title: "The GYNERGY Effect Podcast | Garin & Yesi Heslop",
    description:
      "Weekly conversations on transformation, relationships, health, mindset, and purpose. Hosted by Garin & Yesi Heslop.",
    url: "https://gynergy.com/podcast",
    type: "website",
    images: [
      {
        url: "https://gynergy.com/podcast-cover.jpg",
        width: 1400,
        height: 1400,
        alt: "The GYNERGY Effect Podcast Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The GYNERGY Effect Podcast",
    description: "Weekly conversations on transformation with Garin & Yesi Heslop",
    images: ["https://gynergy.com/podcast-cover.jpg"],
  },
  alternates: {
    types: {
      "application/rss+xml": "https://feeds.buzzsprout.com/2506068.rss",
    },
  },
}

export default function PodcastPage() {
  return (
    <>
      <JsonLdScript schema={podcastSchema} />
      <PodcastHero />
      <PodcastYouTubeEpisodes />
      <PodcastEpisodes />
      <PodcastPlatforms />
      <PodcastHost />
      <PodcastNewsletter />
    </>
  )
}
