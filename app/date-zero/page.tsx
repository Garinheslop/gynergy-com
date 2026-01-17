import { Metadata } from "next"
import { DateZeroHero } from "@/components/pages/date-zero/hero"
import { DateZeroProgram } from "@/components/pages/date-zero/program"
import { DateZeroPricing } from "@/components/pages/date-zero/pricing"
import { DateZeroTestimonials } from "@/components/pages/date-zero/testimonials"
import { DateZeroFAQ } from "@/components/pages/date-zero/faq"
import { DateZeroCTA } from "@/components/pages/date-zero/cta"

export const metadata: Metadata = {
  title: "Date Zero | 8-Week Relationship Transformation Program",
  description:
    "Transform your relationship in just 8 weeks. Date Zero is a proven program designed for couples ready to reignite their connection, improve communication, and build an unbreakable bond.",
  openGraph: {
    title: "Date Zero | Relationship Transformation",
    description:
      "Transform your relationship in 8 weeks. Proven program for couples ready to reconnect.",
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
