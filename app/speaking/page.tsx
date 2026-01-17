import { Metadata } from "next"
import { SpeakingHero } from "@/components/pages/speaking/hero"
import { SpeakingTopics } from "@/components/pages/speaking/topics"
import { SpeakingTestimonials } from "@/components/pages/speaking/testimonials"
import { SpeakingBooking } from "@/components/pages/speaking/booking"

export const metadata: Metadata = {
  title: "Book Garin to Speak | GYNERGY",
  description:
    "Bring transformational energy to your organization or event. Garin delivers powerful keynotes, workshops, and corporate training on leadership, relationships, and personal growth.",
  openGraph: {
    title: "Book Garin to Speak | GYNERGY",
    description:
      "Transformational keynotes, workshops, and corporate training.",
    url: "https://gynergy.com/speaking",
    type: "website",
  },
}

export default function SpeakingPage() {
  return (
    <>
      <SpeakingHero />
      <SpeakingTopics />
      <SpeakingTestimonials />
      <SpeakingBooking />
    </>
  )
}
