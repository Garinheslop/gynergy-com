import { Metadata } from "next"
import { GynergyAIHero } from "@/components/pages/gynergy-ai/hero"
import { GynergyAIFeatures } from "@/components/pages/gynergy-ai/features"
import { ARIAIntro } from "@/components/pages/gynergy-ai/aria-intro"
import { HowItWorks } from "@/components/pages/gynergy-ai/how-it-works"
import { PricingSection } from "@/components/pages/gynergy-ai/pricing"
import { FAQSection } from "@/components/pages/gynergy-ai/faq"
import { GynergyAICTA } from "@/components/pages/gynergy-ai/cta"

export const metadata: Metadata = {
  title: "GYNERGY.AI | AI-Powered Personal Transformation Platform",
  description:
    "Meet ARIA, your 24/7 AI transformation coach. GYNERGY.AI combines cutting-edge AI technology with proven coaching frameworks to accelerate your journey across Health, Relationships, Wealth, Mindset, and Purpose.",
  openGraph: {
    title: "GYNERGY.AI | AI-Powered Personal Transformation Platform",
    description:
      "Your 24/7 AI transformation coach. Technology that learns, adapts, and grows with you.",
    url: "https://gynergy.com/gynergy-ai",
    type: "website",
  },
}

export default function GynergyAIPage() {
  return (
    <>
      <GynergyAIHero />
      <ARIAIntro />
      <GynergyAIFeatures />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <GynergyAICTA />
    </>
  )
}
