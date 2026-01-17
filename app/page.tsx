import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero"
import { MissionSection } from "@/components/sections/mission"
import { DateZeroPreview } from "@/components/sections/date-zero-preview"
import { ServiceRetreatTeaser } from "@/components/sections/service-retreat-teaser"
import { JourneyPathway } from "@/components/sections/journey-pathway"
import { GynergyAISection } from "@/components/sections/gynergy-ai-section"
import { NewsletterSection } from "@/components/sections/newsletter"
import { ContactSection } from "@/components/sections/contact"
import { PodcastPreview } from "@/components/sections/podcast-preview"

export const metadata: Metadata = {
  title: "GYNERGY | Your Growth Journey Starts Here",
  description:
    "A journey of gratitude and self-discovery. Join Garin & Yesi to transform your health, relationships, mindset, and purpose through Date Zero, Level 5 Life, and transformative coaching.",
  openGraph: {
    title: "GYNERGY | Your Growth Journey Starts Here",
    description:
      "A journey of gratitude and self-discovery. Transform your health, relationships, mindset, and purpose.",
    url: "https://gynergy.com",
    type: "website",
  },
}

export default function GynergyHomePage() {
  return (
    <>
      {/* Hero - Meet Garin & Yesi */}
      <HeroSection />

      {/* Mission Statement */}
      <MissionSection />

      {/* The 45 Day Awakening Preview */}
      <DateZeroPreview />

      {/* Ensenada Service Retreat */}
      <ServiceRetreatTeaser />

      {/* Journey Pathway - 5 Pillars */}
      <JourneyPathway />

      {/* GYNERGY.AI Technology Platform */}
      <GynergyAISection />

      {/* Podcast Preview */}
      <PodcastPreview />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}
