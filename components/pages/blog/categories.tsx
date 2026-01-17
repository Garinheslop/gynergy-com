"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { categories } from "@/lib/gynergy-blog/posts"

export function BlogCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-12 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/blog"
            className="px-4 py-2 rounded-full text-sm font-medium bg-[#F8F812] text-black hover:bg-[#F8F812]/90 transition-colors"
          >
            All Posts
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/category/${category.id}`}
              className="group px-4 py-2 rounded-full text-sm font-medium bg-[#1A1A1A] text-white/70 border border-[#2E2E2E] hover:border-[#F8F812]/30 hover:text-white transition-all flex items-center gap-2"
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
