"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { type BlogPost, categories } from "@/lib/gynergy-blog/posts"

interface Props {
  posts: BlogPost[]
}

export function BlogCategoryGrid({ posts }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  if (posts.length === 0) {
    return (
      <section className="relative py-16 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center py-12">
            <div className="mb-4 flex justify-center">
              <svg className="w-12 h-12 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">No articles yet</h2>
            <p className="text-white/60 mb-6">
              We're working on content for this category. Check back soon!
            </p>
            <Link
              href="/blog"
              className="text-[#AFECDB] hover:underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="relative py-16 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const category = categories.find(c => c.id === post.category)

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Image placeholder */}
                  <div className="relative aspect-[16/10] mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] group-hover:border-[#AFECDB]/30 transition-all">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {category?.icon ? (
                        <span className="text-4xl">{category.icon}</span>
                      ) : (
                        <svg className="w-10 h-10 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                        </svg>
                      )}
                    </div>
                    {post.featured && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-[#AFECDB] text-black text-xs font-bold rounded">
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
                      <span className="text-white/40 text-xs">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-body group-hover:text-[#AFECDB] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#AFECDB]/10 flex items-center justify-center text-sm">
                        {post.author.image}
                      </div>
                      <span className="text-white/50 text-xs">{post.author.name}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
