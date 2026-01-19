"use client"

import Link from "next/link"
import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react"
import { NewsletterForm } from "@/components/ui/newsletter-form"

const footerLinks = {
  explore: [
    { name: "Programs", href: "/date-zero" },
    { name: "Shop", href: "/shop" },
    { name: "Podcast", href: "/podcast" },
    { name: "Speaking", href: "/speaking" },
    { name: "Coaching", href: "/one-on-one-coaching" },
    { name: "Events", href: "/events" },
  ],
  programs: [
    { name: "The 45 Day Awakening", href: "/date-zero" },
    { name: "Level 5 Life", href: "/level-5-life" },
    { name: "Service Retreats", href: "/events" },
    { name: "Fit & Feminine", href: "/fit-and-feminine" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/thegynergyeffect",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@TheGynergyEffect",
    icon: Youtube,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/gynergy",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/gynergy",
    icon: Linkedin,
  },
]

export function GynergyComFooter() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              {/* Infinity Symbol */}
              <svg
                width="32"
                height="16"
                viewBox="0 0 32 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#AFECDB]"
              >
                <path
                  d="M8 2C4.5 2 2 4.5 2 8s2.5 6 6 6c2.5 0 4.5-1.5 6-3.5 1.5 2 3.5 3.5 6 3.5 3.5 0 6-2.5 6-6s-2.5-6-6-6c-2.5 0-4.5 1.5-6 3.5C12.5 3.5 10.5 2 8 2zm0 2c1.5 0 3 1 4 2.5-1 1.5-2.5 2.5-4 2.5-2 0-3.5-1.5-3.5-3.5S6 4 8 4zm16 0c2 0 3.5 1.5 3.5 3.5S26 11 24 11c-1.5 0-3-1-4-2.5 1-1.5 2.5-2.5 4-2.5z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-xl font-bold tracking-wide text-white">
                GYNERGY
              </span>
            </Link>
            <p className="text-sm text-white/60 mb-6 max-w-xs">
              A journey of gratitude and self-discovery. Transform your health,
              relationships, mindset, and purpose.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 text-white/60 hover:text-[#AFECDB] hover:bg-white/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Programs
            </h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get Gynergy&apos;s Weekly Newsletter
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Join thousands receiving daily inspiration and actionable guidance.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Gynergy, all rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white/60 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
