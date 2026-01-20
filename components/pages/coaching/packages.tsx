"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "@/components/ui/section-label"
import { Button } from "@/components/ui/button"

export function CoachingPackages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const packages = [
    {
      name: "Intensive",
      duration: "3 Months",
      description: "Deep-dive transformation for rapid breakthrough",
      features: [
        "6 x 60-min private sessions",
        "Unlimited voice messaging",
        "Custom action plans",
        "Priority scheduling",
        "Email support"
      ],
      price: "Apply for Pricing",
      popular: false
    },
    {
      name: "Transformation",
      duration: "6 Months",
      description: "Comprehensive coaching for lasting change",
      features: [
        "12 x 60-min private sessions",
        "Unlimited voice messaging",
        "Custom protocols & plans",
        "Priority scheduling",
        "WhatsApp access",
        "Quarterly intensive days",
        "LVL 5 LIFE membership included"
      ],
      price: "Apply for Pricing",
      popular: true
    },
    {
      name: "Elite",
      duration: "12 Months",
      description: "The ultimate partnership for extraordinary results",
      features: [
        "24 x 60-min private sessions",
        "Unlimited voice messaging",
        "Custom protocols & plans",
        "Priority scheduling",
        "WhatsApp access",
        "Monthly intensive days",
        "LVL 5 LIFE VIP access",
        "Annual retreat included",
        "Spouse/partner sessions"
      ],
      price: "Apply for Pricing",
      popular: false
    }
  ]

  return (
    <section id="packages" ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Coaching Packages"
          labelVariant="teal"
          title="Choose Your Path"
          subtitle="All packages are by application only. We'll determine the best fit during your discovery call."
        />

        {/* Framework Parity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 mb-8 max-w-3xl mx-auto"
        >
          <div className="border border-[#AFECDB]/20 bg-gradient-to-br from-[#AFECDB]/5 to-transparent rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-white font-oswald text-lg uppercase tracking-wide mb-4">
              The Same 5-Pillar Framework
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Whether you choose 1-on-1 coaching or LVL 5 LIFE, you get the same proven
              transformation methodology:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {["Health", "Relationships", "Wealth", "Mindset", "Purpose"].map((pillar) => (
                <span
                  key={pillar}
                  className="px-3 py-1 bg-[#AFECDB]/10 border border-[#AFECDB]/20 text-[#AFECDB] text-xs font-oswald uppercase tracking-wider"
                >
                  {pillar}
                </span>
              ))}
            </div>
            <p className="text-white/40 text-xs">
              The only difference: 1-on-1 = private attention | LVL 5 LIFE = community acceleration
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border p-8 ${
                pkg.popular
                  ? "border-[#AFECDB]/50 ring-1 ring-[#AFECDB]/20"
                  : "border-[#2E2E2E]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#AFECDB] text-black text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white font-body">
                  {pkg.name}
                </h3>
                <p className="text-[#AFECDB] font-medium">{pkg.duration}</p>
                <p className="text-white/50 text-sm mt-2">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-[#AFECDB] mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <p className="text-white/50 text-sm mb-4">{pkg.price}</p>
                <Button
                  href="#apply"
                  variant={pkg.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-white/40 text-sm"
        >
          Investment discussed during discovery call. Payment plans available.
        </motion.p>
      </div>
    </section>
  )
}
