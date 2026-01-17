import { Metadata } from "next"
import { EventsHero } from "@/components/pages/events/hero"
import { EventsUpcoming } from "@/components/pages/events/upcoming"
import { EventsRetreats } from "@/components/pages/events/retreats"
import { EventsNewsletter } from "@/components/pages/events/newsletter"

export const metadata: Metadata = {
  title: "Events & Retreats | GYNERGY",
  description:
    "Join us for transformational events, immersive retreats, and live workshops. Experience life-changing growth in stunning locations around the world.",
  openGraph: {
    title: "Events & Retreats | GYNERGY",
    description:
      "Transformational events, immersive retreats, and live workshops around the world.",
    url: "https://gynergy.com/events",
    type: "website",
  },
}

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsUpcoming />
      <EventsRetreats />
      <EventsNewsletter />
    </>
  )
}
