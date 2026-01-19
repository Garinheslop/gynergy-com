"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { type BlogPost, categories } from "@/lib/gynergy-blog/posts"

interface Props {
  post: BlogPost
}

export function BlogPostHeader({ post }: Props) {
  const category = categories.find(c => c.id === post.category)

  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#AFECDB]/5 via-black to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link href="/blog" className="text-white/50 hover:text-white transition-colors">
              Blog
            </Link>
            <span className="text-white/30">/</span>
            <Link
              href={`/blog/category/${post.category}`}
              className="text-[#AFECDB] hover:text-[#AFECDB]/80 transition-colors"
            >
              {category?.label}
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight font-body leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#AFECDB]/10 flex items-center justify-center text-lg">
                {post.author.image}
              </div>
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-white/50 text-xs">{post.author.role}</p>
              </div>
            </div>

            <span className="text-white/20">·</span>

            {/* Date */}
            <time className="text-white/50">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </time>

            <span className="text-white/20">·</span>

            {/* Reading time */}
            <span className="text-white/50">{post.readingTime}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[#1A1A1A] text-white/50 text-xs border border-[#2E2E2E]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
