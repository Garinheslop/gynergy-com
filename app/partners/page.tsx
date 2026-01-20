import { Metadata } from "next"
import { PartnersPageContent } from "./partners-content"

export const metadata: Metadata = {
  title: "Partners & Sponsors | GYNERGY",
  description:
    "Partner with GYNERGY to transform lives together. Affiliate partnerships, white-label licensing, podcast sponsorships, and event collaborations. Join our mission-driven network.",
  keywords: [
    "GYNERGY partners",
    "coaching affiliate program",
    "podcast sponsorship",
    "transformation coaching partnership",
    "white label coaching platform",
    "event sponsorship",
    "brand collaboration",
  ],
  openGraph: {
    title: "Partner With GYNERGY | Collaboration Over Competition",
    description:
      "Join forces with a mission-driven brand transforming lives across health, relationships, wealth, mindset, and purpose. Affiliate, sponsorship, and white-label opportunities.",
    url: "https://gynergy.com/partners",
    type: "website",
  },
}

export default function PartnersPage() {
  return <PartnersPageContent />
}
