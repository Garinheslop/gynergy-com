"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { categories } from "@/lib/gynergy-blog/posts"

interface Props {
  category: typeof categories[number]
  postCount: number
}

export function BlogCategoryHero({ category, postCount }: Props) {
  return (
    <section className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#AFECDB]/5 via-black to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm mb-6">
            <Link href="/blog" className="text-white/50 hover:text-white transition-colors">
              Blog
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#AFECDB]">{category.label}</span>
          </div>

          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#AFECDB]/10 border border-[#AFECDB]/20 flex items-center justify-center">
            <span className="text-4xl">{category.icon}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-body">
            {category.label}
          </h1>

          <p className="text-xl text-white/70 mb-4">
            {category.description}
          </p>

          <p className="text-white/40 text-sm">
            {postCount} {postCount === 1 ? "article" : "articles"}
          </p>

          {/* Category nav */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#1A1A1A] text-white/70 border border-[#2E2E2E] hover:border-[#AFECDB]/30 hover:text-white transition-all"
            >
              All Posts
            </Link>
            {categories.filter(c => c.id !== category.id).map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-[#1A1A1A] text-white/70 border border-[#2E2E2E] hover:border-[#AFECDB]/30 hover:text-white transition-all flex items-center gap-2"
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
