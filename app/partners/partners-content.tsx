"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-label"

// Partner logos and info
const currentPartners = [
  {
    name: "AOE Brotherhood",
    logo: "/partners/aoe-logo.png",
    description: "Elite men's community and mastermind",
    type: "Strategic Partner",
    url: "https://aoebrotherhood.com"
  },
  {
    name: "Fit and Feminine",
    logo: "/partners/fit-feminine-logo.png",
    description: "Women's health and transformation",
    type: "Program Partner",
    url: "/fit-and-feminine"
  },
  {
    name: "Date Zero",
    logo: "/partners/date-zero-logo.png",
    description: "Relationship foundations program",
    type: "Program Partner",
    url: "/date-zero"
  }
]

const partnershipTypes = [
  {
    title: "Affiliate Partners",
    description: "Earn commissions promoting GYNERGY programs to your audience. Get exclusive discount codes, marketing assets, and dedicated support.",
    benefits: [
      "Competitive commission structure",
      "Custom tracking links and dashboard",
      "Marketing assets and swipe copy",
      "Monthly payouts"
    ],
    cta: "Apply as Affiliate",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    title: "White-Label Partners",
    description: "License GYNERGY.AI technology for your coaching business. Offer your clients AI-powered transformation with your branding.",
    benefits: [
      "Custom-branded ARIA AI coach",
      "Your pricing, your clients",
      "Full platform access",
      "Dedicated onboarding"
    ],
    cta: "Explore White-Label",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Event Collaborators",
    description: "Co-host retreats, workshops, or speaking events with GYNERGY. Combine audiences for transformative experiences.",
    benefits: [
      "Revenue share on joint events",
      "Cross-promotion to our audience",
      "Co-branded marketing",
      "Shared production costs"
    ],
    cta: "Propose an Event",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

const sponsorshipOpportunities = [
  {
    title: "The GYNERGY Effect Podcast",
    audience: "10K+ monthly listeners",
    description: "Reach driven individuals seeking transformation through our weekly podcast with Garin & Yesi.",
    options: [
      "Episode Sponsorship",
      "Season Sponsorship",
      "Presenting Sponsorship"
    ]
  },
  {
    title: "Service Retreats",
    audience: "35 high-net-worth attendees",
    description: "Premium exposure at our Mexico service retreats with successful entrepreneurs and professionals.",
    options: [
      "Retreat Sponsorship",
      "Experience Sponsorship",
      "Title Sponsorship"
    ]
  },
  {
    title: "LVL 5 LIFE Mastermind",
    audience: "Elite mastermind members",
    description: "Direct access to our highest-level community of founders, executives, and high performers.",
    options: [
      "Resource Partnership",
      "Exclusive Partnership",
      "Founding Partnership"
    ]
  }
]

const testimonials = [
  {
    quote: "Partnering with GYNERGY has been incredible for our community. The alignment in values and mission makes collaboration seamless.",
    author: "AOE Brotherhood",
    role: "Strategic Partner"
  },
  {
    quote: "The quality of people in the GYNERGY ecosystem is unmatched. Our podcast episode together drove real results.",
    author: "Rich Somers",
    role: "Podcast Partner"
  }
]

// Inquiry form component
function PartnerInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    partnershipType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Integrate with GHL form submission
    // For now, simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#AFECDB]/20 border border-[#AFECDB]/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#AFECDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-white mb-2">Thank You!</h3>
        <p className="text-white/60 font-body">We'll review your inquiry and get back to you within 48 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/60 text-sm font-body mb-2">Your Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white px-4 py-3 font-body focus:outline-none focus:border-[#AFECDB]/50 transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm font-body mb-2">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white px-4 py-3 font-body focus:outline-none focus:border-[#AFECDB]/50 transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/60 text-sm font-body mb-2">Company/Brand</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white px-4 py-3 font-body focus:outline-none focus:border-[#AFECDB]/50 transition-colors"
            placeholder="Your Company"
          />
        </div>
        <div>
          <label className="block text-white/60 text-sm font-body mb-2">Partnership Type *</label>
          <select
            required
            value={formData.partnershipType}
            onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
            className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white px-4 py-3 font-body focus:outline-none focus:border-[#AFECDB]/50 transition-colors"
          >
            <option value="">Select type...</option>
            <option value="affiliate">Affiliate Partner</option>
            <option value="whitelabel">White-Label Partner</option>
            <option value="event">Event Collaborator</option>
            <option value="podcast">Podcast Sponsor</option>
            <option value="retreat">Retreat Sponsor</option>
            <option value="mastermind">Mastermind Partner</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-white/60 text-sm font-body mb-2">Tell us about your partnership idea *</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#1A1A1A] border border-[#2E2E2E] text-white px-4 py-3 font-body focus:outline-none focus:border-[#AFECDB]/50 transition-colors resize-none"
          placeholder="Describe your audience, your goals for the partnership, and how you see us working together..."
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
      </Button>
    </form>
  )
}

export function PartnersPageContent() {
  const partnersRef = useRef(null)
  const typesRef = useRef(null)
  const sponsorsRef = useRef(null)
  const formRef = useRef(null)

  const partnersInView = useInView(partnersRef, { once: true, margin: "-100px" })
  const typesInView = useInView(typesRef, { once: true, margin: "-100px" })
  const sponsorsInView = useInView(sponsorsRef, { once: true, margin: "-100px" })
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(175,236,219,0.1) 100px,
              rgba(175,236,219,0.1) 101px
            )`
          }}
        />

        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block text-xs font-heading font-semibold tracking-[0.2em] uppercase text-[#AFECDB] mb-6"
          >
            Collaboration Over Competition
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide"
          >
            PARTNER WITH
            <br />
            <span className="text-[#AFECDB]">GYNERGY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 font-body"
          >
            Join forces with a mission-driven brand transforming lives across health,
            relationships, wealth, mindset, and purpose. Let's create impact together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button href="#inquiry" size="lg">
              Become a Partner
            </Button>
            <Button href="#opportunities" variant="secondary" size="lg">
              View Opportunities
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div>
              <p className="text-[#AFECDB] font-display text-3xl md:text-4xl">10K+</p>
              <p className="text-white/40 text-sm font-body">Monthly Reach</p>
            </div>
            <div>
              <p className="text-[#AFECDB] font-display text-3xl md:text-4xl">5+</p>
              <p className="text-white/40 text-sm font-body">Active Partners</p>
            </div>
            <div>
              <p className="text-[#AFECDB] font-display text-3xl md:text-4xl">$15K</p>
              <p className="text-white/40 text-sm font-body">Avg. Client Value</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Partners */}
      <section ref={partnersRef} className="py-24 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Our Network"
            labelVariant="teal"
            title="Current Partners"
            subtitle="We're proud to collaborate with brands and individuals who share our commitment to transformation and service."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPartners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target={partner.url.startsWith("http") ? "_blank" : undefined}
                rel={partner.url.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#1A1A1A] border border-[#2E2E2E] p-6 hover:border-[#AFECDB]/30 transition-all duration-300"
              >
                {/* Logo placeholder */}
                <div className="w-full h-20 bg-[#0A0A0A] border border-[#2E2E2E] flex items-center justify-center mb-4 group-hover:border-[#AFECDB]/20 transition-colors">
                  <span className="text-white/30 text-sm font-body">{partner.name}</span>
                </div>

                <span className="inline-block text-xs font-heading tracking-wider uppercase text-[#AFECDB] mb-2">
                  {partner.type}
                </span>
                <h3 className="text-white font-heading font-semibold mb-2">{partner.name}</h3>
                <p className="text-white/50 text-sm font-body">{partner.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section ref={typesRef} className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Ways to Partner"
            labelVariant="teal"
            title="Partnership Types"
            subtitle="Multiple ways to collaborate based on your goals, audience, and resources."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={typesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#1A1A1A] border border-[#2E2E2E] p-8 hover:border-[#AFECDB]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center mb-6 text-[#AFECDB]">
                  {type.icon}
                </div>

                <h3 className="font-display text-2xl text-white mb-3">{type.title}</h3>
                <p className="text-white/50 font-body mb-6">{type.description}</p>

                <ul className="space-y-3 mb-8">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#AFECDB] mt-2 flex-shrink-0" />
                      <span className="text-white/70 text-sm font-body">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button href="#inquiry" variant="ghost" className="text-sm">
                  {type.cta} →
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section id="opportunities" ref={sponsorsRef} className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Sponsorship"
            labelVariant="teal"
            title="Sponsorship Opportunities"
            subtitle="Get your brand in front of driven individuals committed to personal and professional growth."
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {sponsorshipOpportunities.map((opp, index) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={sponsorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] border border-[#2E2E2E] overflow-hidden"
              >
                <div className="p-8">
                  <span className="inline-block text-xs font-heading tracking-wider uppercase text-[#AFECDB] mb-2">
                    {opp.audience}
                  </span>
                  <h3 className="font-display text-2xl text-white mb-3">{opp.title}</h3>
                  <p className="text-white/50 font-body text-sm mb-6">{opp.description}</p>
                </div>

                <div className="border-t border-[#2E2E2E] p-6 bg-[#0A0A0A]">
                  <p className="text-white/40 text-xs font-body uppercase tracking-wider mb-4">Packages</p>
                  <div className="space-y-3">
                    {opp.options.map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#AFECDB] flex-shrink-0" />
                        <span className="text-white/70 text-sm font-body">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-[#1A1A1A] border border-[#2E2E2E] p-8"
              >
                <div className="w-8 h-8 text-[#AFECDB]/30 mb-4">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white/70 font-body italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="text-white font-heading font-semibold">{testimonial.author}</p>
                  <p className="text-[#AFECDB] text-sm font-body">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" ref={formRef} className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-heading font-semibold tracking-[0.2em] uppercase text-[#AFECDB] mb-4">
                Start The Conversation
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                Partnership Inquiry
              </h2>
              <p className="text-white/60 font-body max-w-xl mx-auto">
                Tell us about your brand and how you'd like to collaborate.
                We review all inquiries and respond within 48 hours.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2E2E2E] p-8 md:p-12">
              <PartnerInquiryForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-b from-black to-[#0A0A0A]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/40 font-body mb-4">
            Questions? Reach out directly at{" "}
            <a href="mailto:partners@gynergy.com" className="text-[#AFECDB] hover:underline">
              partners@gynergy.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
