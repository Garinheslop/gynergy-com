import { Metadata } from "next"
import { CoachingHero } from "@/components/pages/coaching/hero"
import { CoachingApproach } from "@/components/pages/coaching/approach"
import { CoachingPackages } from "@/components/pages/coaching/packages"
import { CoachingProcess } from "@/components/pages/coaching/process"
import { CoachingTestimonials } from "@/components/pages/coaching/testimonials"
import { CoachingApplication } from "@/components/pages/coaching/application"

export const metadata: Metadata = {
  title: "1-on-1 Coaching with Garin & Yesi | GYNERGY",
  description:
    "Exclusive private coaching with Garin (Business, Mindset, Purpose) or Yesi (Health, Relationships, Feminine Energy). Deep, transformational work for high-performers ready to create extraordinary results.",
  openGraph: {
    title: "1-on-1 Coaching with Garin & Yesi | GYNERGY",
    description:
      "Exclusive private coaching for high-performers. Garin: Business, Mindset, Purpose. Yesi: Health, Relationships, Feminine Energy. Limited spots available.",
    url: "https://gynergy.com/one-on-one-coaching",
    type: "website",
  },
}

export default function OneOnOneCoachingPage() {
  return (
    <>
      <CoachingHero />
      <CoachingApproach />
      <CoachingPackages />
      <CoachingProcess />
      <CoachingTestimonials />
      <CoachingApplication />
    </>
  )
}
