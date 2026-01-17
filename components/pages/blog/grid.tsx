"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { getAllPosts, categories, type BlogPost } from "@/lib/gynergy-blog/posts"

function PostCard({ post, index, isInView }: { post: BlogPost; index: number; isInView: boolean }) {
  const category = categories.find(c => c.id === post.category)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Image placeholder */}
        <div className="relative aspect-[16/10] mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] group-hover:border-[#F8F812]/30 transition-all">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">{category?.icon || "📄"}</span>
          </div>
          {post.featured && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-[#F8F812] text-black text-xs font-bold rounded">
              Featured
            </div>
          )}
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white/70 text-xs rounded">
            {post.readingTime}
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#F8F812] text-xs font-medium uppercase tracking-wider">
              {category?.label}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-white/40 text-xs">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 font-inter group-hover:text-[#F8F812] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-3">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#F8F812]/10 flex items-center justify-center text-sm">
              {post.author.image}
            </div>
            <span className="text-white/50 text-xs">{post.author.name}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export function BlogGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const posts = getAllPosts()

  // Separate featured and regular posts
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3)
  const regularPosts = posts.filter(p => !p.featured)

  return (
    <section ref={ref} className="relative py-16 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Featured posts - larger cards */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl font-bold text-white mb-8 font-inter">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index} isInView={isInView} />
              ))}
            </div>
          </div>
        )}

        {/* All posts */}
        <div>
          <h2 className="text-xl font-bold text-white mb-8 font-inter">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index + featuredPosts.length} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Load more placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm">
            More articles coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
