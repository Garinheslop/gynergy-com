import { FivePillarQuiz } from "@/components/assessment/five-pillar-quiz"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "5-Pillar Self-Assessment | GYNERGY.AI",
  description:
    "Discover where you stand across Health, Relationships, Wealth, Mindset, and Purpose. Take our free 5-minute assessment and get personalized transformation insights.",
  openGraph: {
    title: "5-Pillar Self-Assessment | GYNERGY.AI",
    description:
      "Take our free 5-minute assessment and discover your transformation priorities across all five pillars of life.",
    type: "website",
  },
}

export default function AssessmentPage() {
  return <FivePillarQuiz />
}
