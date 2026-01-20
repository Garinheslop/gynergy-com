"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const navigation = [
  {
    name: "Programs",
    href: "#",
    children: [
      { name: "The 45 Day Awakening", href: "/date-zero" },
      { name: "LVL 5 LIFE", href: "/level-5-life" },
      { name: "Fit & Feminine", href: "/fit-and-feminine" },
    ],
  },
  {
    name: "Shop",
    href: "#",
    children: [
      { name: "All Products", href: "/shop" },
      { name: "Digital Products", href: "/shop/digital" },
      { name: "GYNERGY.AI", href: "/gynergy-ai" },
    ],
  },
  { name: "1-on-1 Coaching", href: "/one-on-one-coaching" },
  { name: "Speaking", href: "/speaking" },
  { name: "Podcast", href: "/podcast" },
]

export function GynergyComHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { totalItems, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
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
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.name)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-[#1A1A1A] border border-white/10 shadow-xl overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side - Cart, Member Login & CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {/* Cart Button */}
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#AFECDB] text-xs font-bold text-black">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              href="https://app.lvl5life.com"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              Member Login
            </Link>
            <Link
              href="/date-zero"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-heading font-bold uppercase tracking-wider text-black bg-[#AFECDB] hover:bg-[#7DD8C0] transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-2">
                      <span className="block text-sm font-medium text-white/60">
                        {item.name}
                      </span>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block text-sm text-white/80 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-sm font-medium text-white/80 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-4">
                {/* Mobile Cart Button */}
                <button
                  type="button"
                  onClick={() => {
                    openCart()
                    setMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Cart {totalItems > 0 && `(${totalItems})`}
                </button>
                <Link
                  href="https://app.lvl5life.com"
                  className="block text-sm text-white/60 hover:text-white"
                >
                  Member Login
                </Link>
                <Link
                  href="/date-zero"
                  className="block w-full text-center px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider text-black bg-[#AFECDB] hover:bg-[#7DD8C0] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Your Journey
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
