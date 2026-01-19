"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { type BlogPost } from "@/lib/gynergy-blog/posts"

interface Props {
  post: BlogPost
}

export function BlogPostContent({ post }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  // Simple markdown to HTML conversion for display
  // In production, you'd use a proper markdown parser like marked or remark
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        // Headers
        if (paragraph.startsWith("# ")) {
          return (
            <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4 font-body">
              {paragraph.replace("# ", "")}
            </h1>
          )
        }
        if (paragraph.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 font-body">
              {paragraph.replace("## ", "")}
            </h2>
          )
        }
        if (paragraph.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3 font-body">
              {paragraph.replace("### ", "")}
            </h3>
          )
        }

        // Blockquotes
        if (paragraph.startsWith("> ")) {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-[#AFECDB] pl-4 my-6 text-white/80 italic text-lg"
            >
              {paragraph.replace("> ", "")}
            </blockquote>
          )
        }

        // Lists
        if (paragraph.includes("\n- ") || paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").filter(line => line.startsWith("- "))
          return (
            <ul key={index} className="list-disc list-inside space-y-2 my-4 text-white/70">
              {items.map((item, i) => (
                <li key={i}>{item.replace("- ", "")}</li>
              ))}
            </ul>
          )
        }

        // Numbered lists
        if (/^\d+\. /.test(paragraph)) {
          const items = paragraph.split("\n").filter(line => /^\d+\. /.test(line))
          return (
            <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-white/70">
              {items.map((item, i) => (
                <li key={i}>{item.replace(/^\d+\. /, "")}</li>
              ))}
            </ol>
          )
        }

        // Horizontal rule
        if (paragraph.trim() === "---") {
          return <hr key={index} className="border-[#2E2E2E] my-8" />
        }

        // Bold text handling
        const formattedParagraph = paragraph.replace(
          /\*\*(.+?)\*\*/g,
          '<strong class="text-white font-semibold">$1</strong>'
        )

        // Links handling
        const withLinks = formattedParagraph.replace(
          /\[(.+?)\]\((.+?)\)/g,
          '<a href="$2" class="text-[#AFECDB] hover:text-[#AFECDB]/80 underline">$1</a>'
        )

        // Regular paragraphs
        if (paragraph.trim()) {
          return (
            <p
              key={index}
              className="text-white/70 leading-relaxed my-4"
              dangerouslySetInnerHTML={{ __html: withLinks }}
            />
          )
        }

        return null
      })
      .filter(Boolean)
  }

  return (
    <section ref={ref} className="relative py-8 bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto prose prose-invert prose-lg"
        >
          {/* Featured image placeholder */}
          <div className="aspect-[16/9] mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl">📝</span>
              <p className="text-white/30 text-sm mt-2">Featured Image</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose-headings:font-body prose-a:text-[#AFECDB] prose-a:no-underline hover:prose-a:underline">
            {formatContent(post.content)}
          </div>

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-[#2E2E2E]">
            <p className="text-white/50 text-sm mb-4">Share this article</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://gynergy.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white/70 text-sm hover:border-[#AFECDB]/30 hover:text-white transition-all"
              >
                Twitter/X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://gynergy.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white/70 text-sm hover:border-[#AFECDB]/30 hover:text-white transition-all"
              >
                LinkedIn
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(`https://gynergy.com/blog/${post.slug}`)}
                className="px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#2E2E2E] text-white/70 text-sm hover:border-[#AFECDB]/30 hover:text-white transition-all"
              >
                Copy Link
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
