import { Metadata } from "next"
import { OrganizationSchema, WebSiteSchema, CourseSchema, ServiceSchema } from "@/components/seo/structured-data"
import { HeroSection } from "@/components/sections/hero"
import { MissionSection } from "@/components/sections/mission"
import { ThreeStepPlanSection } from "@/components/sections/three-step-plan"
import { DateZeroPreview } from "@/components/sections/date-zero-preview"
import { ServiceRetreatTeaser } from "@/components/sections/service-retreat-teaser"
import { JourneyPathway } from "@/components/sections/journey-pathway"
import { GynergyAISection } from "@/components/sections/gynergy-ai-section"
import { LeadMagnetSection } from "@/components/sections/lead-magnet"
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
      {/* Structured Data for AEO/SEO */}
      <OrganizationSchema />
      <WebSiteSchema />
      <CourseSchema
        name="The 45 Day Awakening"
        description="A transformational 45-day journey through gratitude, service, and self-discovery. Includes the Date Zero journal, coaching, community access, and optional Mexico service retreat."
        price={1497}
        url="https://gynergy.com/the-45-day-awakening"
        duration="P45D"
      />
      <ServiceSchema
        name="GYNERGY.AI Coaching Platform"
        description="AI-powered transformation platform with 5 specialized coaches for Health, Relationships, Wealth, Mindset, and Purpose. 24/7 access to personalized guidance."
        priceRange="$49-$197/month"
        url="https://gynergy.com/gynergy-ai"
      />

      {/* Hero - Meet Garin & Yesi */}
      <HeroSection />

      {/* Mission Statement */}
      <MissionSection />

      {/* Three Step Plan - Clear Path to Transformation */}
      <ThreeStepPlanSection />

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

      {/* Lead Magnet - Free 5 Pillars Assessment */}
      <LeadMagnetSection />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}
