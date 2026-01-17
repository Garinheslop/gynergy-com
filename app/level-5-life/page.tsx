import { Metadata } from "next"
import { L5LHero } from "@/components/pages/level-5-life/hero"
import { L5LPillars } from "@/components/pages/level-5-life/pillars"
import { L5LProgram } from "@/components/pages/level-5-life/program"
import { L5LFounders } from "@/components/pages/level-5-life/founders"
import { L5LTestimonials } from "@/components/pages/level-5-life/testimonials"
import { L5LInvestment } from "@/components/pages/level-5-life/investment"
import { L5LFAQ } from "@/components/pages/level-5-life/faq"
import { L5LApplication } from "@/components/pages/level-5-life/application"

export const metadata: Metadata = {
  title: "Level 5 Life | The Ultimate Mastermind for High Achievers",
  description:
    "A 12-month transformational mastermind for high-achievers ready to optimize every area of life. Health, relationships, mindset, and purpose—all transformed with Garin & Yesi.",
  openGraph: {
    title: "Level 5 Life | The Ultimate Mastermind",
    description:
      "12-month mastermind for high-achievers. Transform health, relationships, mindset, and purpose.",
    url: "https://gynergy.com/level-5-life",
    type: "website",
  },
}

export default function Level5LifePage() {
  return (
    <>
      <L5LHero />
      <L5LPillars />
      <L5LProgram />
      <L5LFounders />
      <L5LTestimonials />
      <L5LInvestment />
      <L5LFAQ />
      <L5LApplication />
    </>
  )
}
