import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Meet Garin & Yesi | GYNERGY",
  description:
    "Meet Garin and Yesi Heslop, the founders of GYNERGY. Their mission: Master the self to serve the world.",
  openGraph: {
    title: "About | Meet Garin & Yesi",
    description:
      "Meet the founders of GYNERGY and discover the story behind the mission to transform lives.",
    url: "https://gynergy.com/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background pattern */}
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
          {/* Section Label */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#AFECDB]/10 border border-[#AFECDB]/30 text-[#AFECDB] text-xs font-heading uppercase tracking-wider mb-6">
              About GYNERGY
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight mb-4">
              MEET GARIN & YESI
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-body">
              Two individuals who discovered that the path to extraordinary
              lives is paved with gratitude, growth, and grace.
            </p>
          </div>

          {/* Founders Image */}
          <div className="relative max-w-3xl mx-auto mb-16">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/founders/garin-yesi-optimized.webp"
                alt="Garin and Yesi Heslop, founders of GYNERGY"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#AFECDB]/20 -z-10" />
          </div>

          {/* The Story */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-white/70 font-body leading-relaxed">
              <p className="text-xl text-white">
                GYNERGY was born from a simple but powerful insight: true
                transformation happens when you work on all five pillars of life
                simultaneously—Health, Relationships, Wealth, Mindset, and
                Purpose.
              </p>

              <p>
                The name itself carries deep meaning. The "G" stands for
                Gratitude—the foundation of everything we teach. Combined with
                "energy," GYNERGY represents the powerful force that's unleashed
                when gratitude meets intentional action.
              </p>

              <p>
                Our mission is clear:{" "}
                <span className="text-[#AFECDB] font-semibold">
                  Master the self to serve the world.
                </span>{" "}
                We believe that when you transform yourself, you create ripples
                that impact your family, your community, and ultimately, the
                world.
              </p>

              {/* Core Values */}
              <div className="grid md:grid-cols-3 gap-6 py-8">
                <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                  <div className="w-12 h-12 bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-[#AFECDB]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-heading text-lg uppercase tracking-wide mb-2">
                    Gratitude
                  </h3>
                  <p className="text-white/50 text-sm">
                    The foundation of all transformation
                  </p>
                </div>

                <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                  <div className="w-12 h-12 bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-[#AFECDB]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-heading text-lg uppercase tracking-wide mb-2">
                    Growth
                  </h3>
                  <p className="text-white/50 text-sm">
                    Continuous evolution through challenge
                  </p>
                </div>

                <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-6">
                  <div className="w-12 h-12 bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-[#AFECDB]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-heading text-lg uppercase tracking-wide mb-2">
                    Grace
                  </h3>
                  <p className="text-white/50 text-sm">
                    Patience with yourself and others
                  </p>
                </div>
              </div>

              <p>
                Through our programs—from the 45 Day Awakening to the LVL 5 LIFE
                Mastermind—we guide individuals on a journey that goes far
                beyond surface-level change. We help people build lives of
                purpose, impact, and lasting fulfillment.
              </p>

              <p>
                Our service retreats in Ensenada, Mexico, embody our core
                philosophy. There's no faster path to transformation than giving
                yourself to others. When you build a home for a family in need,
                something shifts inside you that no amount of self-help can
                replicate.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-[#2E2E2E]">
              <p className="text-white/50 text-center mb-6 font-body">
                Ready to begin your transformation?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/date-zero"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#AFECDB] text-black font-heading font-bold uppercase tracking-wider hover:bg-[#AFECDB]/90 transition-colors"
                >
                  Start with The 45 Day Awakening
                </a>
                <a
                  href="/one-on-one-coaching"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#AFECDB] text-[#AFECDB] font-heading font-bold uppercase tracking-wider hover:bg-[#AFECDB]/10 transition-colors"
                >
                  Explore Coaching
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
