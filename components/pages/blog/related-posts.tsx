"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { type BlogPost, categories } from "@/lib/gynergy-blog/posts"
import { SectionHeader } from "@/components/ui/section-label"

interface Props {
  posts: BlogPost[]
}

export function BlogRelatedPosts({ posts }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-16 bg-gradient-to-b from-black to-[#050505] overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <SectionHeader
          label="Related Articles"
          labelVariant="teal"
          title="Keep Reading"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
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
                        <span className="text-3xl">{category.icon}</span>
                      ) : (
                        <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                        </svg>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white/70 text-xs rounded">
                      {post.readingTime}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#AFECDB] text-xs font-medium uppercase tracking-wider">
                        {category?.label}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 font-body group-hover:text-[#AFECDB] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
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
