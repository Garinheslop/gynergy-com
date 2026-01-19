import { Metadata } from "next"
import { AOEHero } from "@/components/pages/aoe-brotherhood/hero"
import { AOEBenefits } from "@/components/pages/aoe-brotherhood/benefits"
import { AOEFounders } from "@/components/pages/aoe-brotherhood/founders"
import { AOEPricing } from "@/components/pages/aoe-brotherhood/pricing"
import { AOEFAQ } from "@/components/pages/aoe-brotherhood/faq"
import { AOECTA } from "@/components/pages/aoe-brotherhood/cta"

export const metadata: Metadata = {
  title: "AOE Brotherhood | Army of Experts Men's Community | GYNERGY",
  description:
    "Join the AOE Brotherhood - a community of high-achieving men committed to mastering all 5 pillars of life. Weekly calls, expert interviews, and accountability. $79/month.",
  keywords: [
    "mens community",
    "brotherhood",
    "personal development",
    "mens coaching",
    "accountability group",
    "high performance men",
    "life mastery",
    "5 pillars",
  ],
  openGraph: {
    title: "AOE Brotherhood | Army of Experts Men's Community",
    description:
      "Join the AOE Brotherhood - a community of high-achieving men committed to mastering all 5 pillars of life.",
    type: "website",
    url: "https://gynergy.com/aoe-brotherhood",
  },
}

export default function AOEBrotherhoodPage() {
  return (
    <>
      <AOEHero />
      <AOEBenefits />
      <AOEFounders />
      <AOEPricing />
      <AOEFAQ />
      <AOECTA />
    </>
  )
}
