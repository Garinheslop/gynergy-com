import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { JsonLdScript } from "@/components/seo/json-ld-schemas"

export const metadata: Metadata = {
  title: "Press & Media | GYNERGY",
  description:
    "Media resources, founder bios, story angles, and press contact for GYNERGY. Garin & Yesi Heslop founded GYNERGY in 2024 in San Diego. GYNERGY means Gratitude + Energy.",
  keywords: [
    "GYNERGY press kit",
    "Garin Heslop bio",
    "Yesi Heslop bio",
    "GYNERGY founders",
    "transformation coaching press",
    "ARIA AI coaching",
    "LVL 5 LIFE mastermind",
    "Fit and Feminine program",
  ],
  openGraph: {
    title: "Press & Media | GYNERGY",
    description:
      "Media resources and press kit for GYNERGY - the transformation platform by Garin & Yesi Heslop. Founded 2024 in San Diego.",
    url: "https://gynergy.com/press",
    type: "website",
  },
}

// FAQ data for both display and schema markup
const faqData = [
  {
    question: "What is GYNERGY?",
    answer:
      "GYNERGY is a transformation platform founded by Garin and Yesi Heslop that helps individuals master themselves to serve the world. It combines coaching programs, AI technology (ARIA), and community to help people transform across 5 pillars: Health, Relationships, Wealth, Mindset, and Purpose.",
  },
  {
    question: "What does GYNERGY mean?",
    answer:
      "GYNERGY is a combination of 'Gratitude' and 'Energy.' The name reflects the foundational belief that gratitude is the starting point of all lasting transformation, and that positive energy flows from a grateful mindset.",
  },
  {
    question: "Who founded GYNERGY?",
    answer:
      "GYNERGY was founded in 2024 by Garin Heslop and Yesi Heslop, a married couple based in San Diego, California. Garin brings expertise in business and high-performance coaching, while Yesi specializes in holistic wellness and feminine energy.",
  },
  {
    question: "What programs does GYNERGY offer?",
    answer:
      "GYNERGY offers several programs: The 45-Day Awakening ($1,497) for personal transformation through gratitude, LVL 5 LIFE ($15,000) an elite men's mastermind, Fit & Feminine (launching May 2026) for women's wellness, Service Retreats in Ensenada Mexico, and GYNERGY.AI ($49-197/month) an AI-powered coaching platform.",
  },
  {
    question: "What is ARIA?",
    answer:
      "ARIA is GYNERGY's AI-powered coaching assistant that serves as your 'Personal Board of Directors.' It provides 24/7 personalized guidance across all 5 pillars of life—Health, Relationships, Wealth, Mindset, and Purpose—learning and adapting to your unique journey.",
  },
  {
    question: "Where is GYNERGY based?",
    answer:
      "GYNERGY is headquartered in San Diego, California. The company also conducts regular service retreats in Ensenada, Mexico, where participants build homes for families in need.",
  },
  {
    question: "What is the GYNERGY mission?",
    answer:
      "GYNERGY's mission is 'Master the Self to Serve the World.' This reflects the belief that personal transformation should ultimately lead to positive impact on others—through better relationships, leadership, and direct service.",
  },
  {
    question: "What are the 5 Pillars of GYNERGY?",
    answer:
      "The 5 Pillars are: Health (physical vitality and energy), Relationships (deep connection and partnership), Wealth (financial abundance and freedom), Mindset (mental frameworks and beliefs), and Purpose (legacy and contribution). These form the foundation of all GYNERGY programs.",
  },
]

// FAQ Schema for AI search optimization
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

const storyAngles = [
  {
    title: "The Power Couple Story",
    description:
      "How Garin & Yesi built a coaching empire by transforming together—combining his business expertise with her wellness mastery.",
    topics: ["Entrepreneurship", "Relationships", "Business"],
  },
  {
    title: "AI + Human Coaching Revolution",
    description:
      "Why this couple bet on AI (ARIA) to scale human transformation—technology that amplifies connection, not replaces it.",
    topics: ["Technology", "AI", "Innovation"],
  },
  {
    title: "Service-First Transformation",
    description:
      "Building homes in Mexico changed how they build lives. The philosophy of 'Master the Self to Serve the World' in action.",
    topics: ["Service", "Purpose", "Impact"],
  },
  {
    title: "Women's Wellness Redefined",
    description:
      "Yesi's journey from fitness competitor to feminine energy coach—redefining strength for women beyond the physical.",
    topics: ["Wellness", "Women", "Fitness"],
  },
  {
    title: "High-Performance Purpose",
    description:
      "Garin's transformation from chasing external success to finding internal alignment through the LVL 5 LIFE framework.",
    topics: ["Leadership", "Men", "Purpose"],
  },
]

const speakingTopics = {
  garin: [
    "Business Strategy & Scaling",
    "Purpose-Driven Leadership",
    "The 5 Pillars of Life",
    "High-Performance Mindset",
    "Men's Personal Development",
  ],
  yesi: [
    "Holistic Wellness",
    "Feminine Energy & Strength",
    "Relationship Dynamics",
    "Physical Transformation",
    "Women's Empowerment",
  ],
  together: [
    "Building a Business as a Couple",
    "The GYNERGY Philosophy",
    "AI in Personal Development",
    "Service & Transformation",
    "Creating Lasting Change",
  ],
}

export default function PressPage() {
  return (
    <>
      {/* FAQ Schema for AI Search Optimization */}
      <JsonLdScript schema={faqSchema} />

      <main className="min-h-screen bg-black">
        {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(175, 236, 219, 0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-heading uppercase tracking-wider mb-6">
              Press & Media
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight mb-4">
              MEDIA RESOURCES
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
              Everything you need to tell the GYNERGY story.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="max-w-2xl mx-auto bg-[#1A1A1A] border border-[#2E2E2E] p-8 text-center">
            <h2 className="font-heading text-xl text-white uppercase tracking-wide mb-4">
              Media Contact
            </h2>
            <p className="text-white/60 font-body mb-4">
              For press inquiries, interviews, and media requests:
            </p>
            <a
              href="mailto:media@gynergy.com"
              className="text-[#AFECDB] font-heading text-lg hover:text-[#AFECDB]/80 transition-colors"
            >
              media@gynergy.com
            </a>
          </div>
        </div>
      </section>

      {/* Founder Bios */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-heading uppercase tracking-wider mb-6">
              The Founders
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">
              MEET GARIN & YESI
            </h2>
          </div>

          {/* Founders Grid */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Garin */}
            <div className="bg-[#1A1A1A] border border-[#2E2E2E]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/founders/Garin.JPEG"
                  alt="Garin Heslop - Co-Founder, GYNERGY"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl text-white uppercase tracking-wide mb-2">
                  Garin Heslop
                </h3>
                <p className="text-[#AFECDB] font-body text-sm uppercase tracking-wide mb-4">
                  Co-Founder | Business, Mindset & Purpose
                </p>

                {/* Short Bio */}
                <div className="mb-6">
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-2">
                    Short Bio (50 words)
                  </p>
                  <p className="text-white/70 font-body text-sm">
                    Garin Heslop is the co-founder of GYNERGY and creator of the LVL 5 LIFE
                    men&apos;s mastermind. An entrepreneur and high-performance coach, he helps
                    leaders align external success with internal purpose through the 5 Pillars
                    framework: Health, Relationships, Wealth, Mindset, and Purpose.
                  </p>
                </div>

                {/* Full Bio */}
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-2">
                    Full Bio
                  </p>
                  <p className="text-white/70 font-body text-sm leading-relaxed">
                    Garin Heslop built his first successful business before realizing that
                    external achievement without internal alignment leads to emptiness. This
                    insight sparked a transformation that would eventually become GYNERGY.
                  </p>
                  <p className="text-white/70 font-body text-sm leading-relaxed mt-3">
                    Today, Garin leads the LVL 5 LIFE mastermind, an exclusive program for
                    high-performers ready to build lives of purpose, not just profit. His
                    approach combines practical business strategy with deep personal development
                    work, helping men create ripples of positive impact in their families,
                    communities, and the world.
                  </p>
                  <p className="text-white/70 font-body text-sm leading-relaxed mt-3">
                    Based in San Diego, Garin is also passionate about service, regularly
                    leading retreats to Ensenada, Mexico where participants build homes for
                    families in need—embodying the GYNERGY mission: Master the self to serve
                    the world.
                  </p>
                </div>
              </div>
            </div>

            {/* Yesi */}
            <div className="bg-[#1A1A1A] border border-[#2E2E2E]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/founders/YESI.JPG"
                  alt="Yesi Heslop - Co-Founder, GYNERGY"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl text-white uppercase tracking-wide mb-2">
                  Yesi Heslop
                </h3>
                <p className="text-rose-400 font-body text-sm uppercase tracking-wide mb-4">
                  Co-Founder | Health, Relationships & Feminine Energy
                </p>

                {/* Short Bio */}
                <div className="mb-6">
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-2">
                    Short Bio (50 words)
                  </p>
                  <p className="text-white/70 font-body text-sm">
                    Yesi Heslop is the co-founder of GYNERGY and creator of the Fit & Feminine
                    women&apos;s program. A former fitness competitor turned holistic wellness
                    coach, she helps women reclaim their feminine power while building physical
                    and emotional strength that radiates from within.
                  </p>
                </div>

                {/* Full Bio */}
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wide mb-2">
                    Full Bio
                  </p>
                  <p className="text-white/70 font-body text-sm leading-relaxed">
                    Yesi Heslop&apos;s transformation journey began in competitive fitness,
                    where she discovered that true strength extends far beyond the physical.
                    This realization led her to develop an approach that integrates body,
                    mind, and spirit.
                  </p>
                  <p className="text-white/70 font-body text-sm leading-relaxed mt-3">
                    Through Fit & Feminine, Yesi guides women who have achieved external
                    success but feel disconnected from their authentic selves. Her methodology
                    combines practical fitness coaching with feminine energy work and
                    relationship mastery, helping women become magnetic without sacrificing
                    their ambition.
                  </p>
                  <p className="text-white/70 font-body text-sm leading-relaxed mt-3">
                    Yesi brings warmth and fierce dedication to every client, believing that
                    when women step into their full power, they transform not just themselves
                    but everyone around them. Her work embodies the GYNERGY philosophy that
                    gratitude is the foundation of all lasting change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Couple Photo */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden border border-[#2E2E2E]">
              <Image
                src="/founders/garin-yesi-optimized.webp"
                alt="Garin and Yesi Heslop - GYNERGY Founders"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-white/40 text-sm mt-4 font-body">
              Garin & Yesi Heslop, Co-Founders of GYNERGY
            </p>
          </div>
        </div>
      </section>

      {/* Story Angles */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-heading uppercase tracking-wider mb-6">
              Story Angles
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight mb-4">
              POTENTIAL NARRATIVES
            </h2>
            <p className="text-white/60 font-body max-w-2xl mx-auto">
              Five unique angles for featuring GYNERGY in your publication or podcast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {storyAngles.map((angle, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-[#2E2E2E] p-6 hover:border-[#AFECDB]/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#AFECDB] font-display text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading text-lg text-white uppercase tracking-wide mb-3">
                  {angle.title}
                </h3>
                <p className="text-white/60 font-body text-sm mb-4">
                  {angle.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {angle.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 bg-[#AFECDB]/10 text-[#AFECDB] font-body"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#0D0D0D] to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-heading uppercase tracking-wider mb-6">
              Speaking Topics
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight mb-4">
              INTERVIEW & PODCAST TOPICS
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Garin */}
            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-8">
              <h3 className="font-heading text-xl text-[#AFECDB] uppercase tracking-wide mb-6">
                Garin Speaks On
              </h3>
              <ul className="space-y-3">
                {speakingTopics.garin.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-[#AFECDB] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-white/70 font-body text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yesi */}
            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-8">
              <h3 className="font-heading text-xl text-rose-400 uppercase tracking-wide mb-6">
                Yesi Speaks On
              </h3>
              <ul className="space-y-3">
                {speakingTopics.yesi.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-white/70 font-body text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Together */}
            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-8">
              <h3 className="font-heading text-xl text-white uppercase tracking-wide mb-6">
                Together They Cover
              </h3>
              <ul className="space-y-3">
                {speakingTopics.together.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-white/70 font-body text-sm">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-heading uppercase tracking-wider mb-6">
                Company Overview
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">
                QUICK FACTS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                <h3 className="font-heading text-sm text-white/50 uppercase tracking-wide mb-2">
                  Company Name
                </h3>
                <p className="text-white font-body text-lg">GYNERGY</p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                <h3 className="font-heading text-sm text-white/50 uppercase tracking-wide mb-2">
                  Name Meaning
                </h3>
                <p className="text-white font-body text-lg">Gratitude + Energy</p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                <h3 className="font-heading text-sm text-white/50 uppercase tracking-wide mb-2">
                  Founded
                </h3>
                <p className="text-white font-body text-lg">2024</p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                <h3 className="font-heading text-sm text-white/50 uppercase tracking-wide mb-2">
                  Headquarters
                </h3>
                <p className="text-white font-body text-lg">San Diego, California</p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                <h3 className="font-heading text-sm text-white/50 uppercase tracking-wide mb-2">
                  Mission
                </h3>
                <p className="text-white font-body text-lg">Master the Self to Serve the World</p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                <h3 className="font-heading text-sm text-white/50 uppercase tracking-wide mb-2">
                  Website
                </h3>
                <p className="text-[#AFECDB] font-body text-lg">gynergy.com</p>
              </div>
            </div>

            {/* Key Offerings */}
            <div className="mt-12 bg-[#1A1A1A] border border-[#2E2E2E] p-8">
              <h3 className="font-heading text-xl text-white uppercase tracking-wide mb-6">
                Key Offerings
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#AFECDB] font-heading text-sm uppercase tracking-wide mb-2">
                    Programs
                  </h4>
                  <ul className="space-y-2 text-white/70 font-body text-sm">
                    <li>The 45 Day Awakening - Self-transformation through gratitude</li>
                    <li>LVL 5 LIFE - Elite men&apos;s mastermind</li>
                    <li>Fit & Feminine - Women&apos;s wellness program (May 2026)</li>
                    <li>Service Retreats - Ensenada, Mexico</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#AFECDB] font-heading text-sm uppercase tracking-wide mb-2">
                    Technology
                  </h4>
                  <ul className="space-y-2 text-white/70 font-body text-sm">
                    <li>GYNERGY.AI - AI-powered coaching platform</li>
                    <li>ARIA - Personal AI wellness companion</li>
                    <li>B2C, B2B, and Enterprise solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Downloads */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-[#0D0D0D]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-heading uppercase tracking-wider mb-6">
              Media Assets
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight mb-4">
              PHOTOS & LOGOS
            </h2>
            <p className="text-white/60 font-body max-w-2xl mx-auto">
              High-resolution images available for press use. Please credit GYNERGY.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-4">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src="/founders/Garin.JPEG"
                  alt="Garin Heslop Headshot"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="text-white/70 font-body text-sm text-center">
                Garin Heslop Headshot
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-4">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src="/founders/YESI.JPG"
                  alt="Yesi Heslop Headshot"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="text-white/70 font-body text-sm text-center">
                Yesi Heslop Headshot
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-4">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src="/founders/garin-yesi-optimized.webp"
                  alt="Garin & Yesi Couple Photo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white/70 font-body text-sm text-center">
                Garin & Yesi Together
              </p>
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mt-8 font-body">
            Need additional photos or different formats? Contact{" "}
            <a href="mailto:media@gynergy.com" className="text-[#AFECDB] hover:underline">
              media@gynergy.com
            </a>
          </p>
        </div>
      </section>

        {/* FAQ Section - Optimized for AI Search */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-heading uppercase tracking-wider mb-6">
                  Frequently Asked Questions
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight mb-4">
                  ABOUT GYNERGY
                </h2>
                <p className="text-white/60 font-body max-w-2xl mx-auto">
                  Quick answers to common questions about GYNERGY, our founders, and our programs.
                </p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-[#1A1A1A] border border-[#2E2E2E] hover:border-[#AFECDB]/30 transition-colors"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-heading text-lg text-white uppercase tracking-wide pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-5 h-5 text-[#AFECDB] flex-shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-white/70 font-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-[#0D0D0D]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight mb-6">
                READY TO FEATURE GYNERGY?
              </h2>
              <p className="text-white/60 font-body text-lg mb-8">
                We&apos;re available for interviews, podcast appearances, expert commentary,
                and feature stories. Let&apos;s connect.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:media@gynergy.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider hover:bg-[#AFECDB]/90 transition-colors"
                >
                  Contact Media Team
                </a>
                <Link
                  href="/speaking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#AFECDB] text-[#AFECDB] font-heading font-bold uppercase tracking-wider hover:bg-[#AFECDB]/10 transition-colors"
                >
                  Book for Speaking
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
