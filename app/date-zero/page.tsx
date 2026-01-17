import { Metadata } from "next"
import { DateZeroHero } from "@/components/pages/date-zero/hero"
import { DateZeroProgram } from "@/components/pages/date-zero/program"
import { DateZeroPricing } from "@/components/pages/date-zero/pricing"
import { DateZeroTestimonials } from "@/components/pages/date-zero/testimonials"
import { DateZeroFAQ } from "@/components/pages/date-zero/faq"
import { DateZeroCTA } from "@/components/pages/date-zero/cta"

export const metadata: Metadata = {
  title: "The 45 Day Awakening | Personal Transformation Through Gratitude | GYNERGY",
  description:
    "Transform your life in 45 days through the power of gratitude. The 45 Day Awakening includes the Date Zero Journal, weekly coaching, community support, and an optional Service Retreat in Mexico.",
  openGraph: {
    title: "The 45 Day Awakening | Personal Transformation Through Gratitude",
    description:
      "A 45-day transformational journey that will fundamentally change how you see yourself, your circumstances, and your purpose.",
    url: "https://gynergy.com/date-zero",
    type: "website",
  },
}

export default function DateZeroPage() {
  return (
    <>
      <DateZeroHero />
      <DateZeroProgram />
      <DateZeroPricing />
      <DateZeroTestimonials />
      <DateZeroFAQ />
      <DateZeroCTA />
    </>
  )
}
