import { Metadata } from "next"
import { CoachingHero } from "@/components/pages/coaching/hero"
import { CoachingApproach } from "@/components/pages/coaching/approach"
import { CoachingPackages } from "@/components/pages/coaching/packages"
import { CoachingProcess } from "@/components/pages/coaching/process"
import { CoachingTestimonials } from "@/components/pages/coaching/testimonials"
import { CoachingApplication } from "@/components/pages/coaching/application"

export const metadata: Metadata = {
  title: "1-on-1 Coaching with Garin | GYNERGY",
  description:
    "Transform your life with personalized coaching from Garin. Deep, transformational work for those ready to invest in themselves and create lasting change.",
  openGraph: {
    title: "1-on-1 Coaching with Garin | GYNERGY",
    description:
      "Personalized coaching for those ready to transform their health, relationships, mindset, and purpose.",
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
