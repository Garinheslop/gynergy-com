import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/gynergy-blog/posts"
import { BlogPostContent } from "@/components/pages/blog/post-content"
import { BlogPostHeader } from "@/components/pages/blog/post-header"
import { BlogRelatedPosts } from "@/components/pages/blog/related-posts"
import { BlogNewsletter } from "@/components/pages/blog/newsletter"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | GYNERGY Blog",
    }
  }

  return {
    title: `${post.title} | GYNERGY Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://gynergy.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "GYNERGY",
      url: "https://gynergy.com",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
      {relatedPosts.length > 0 && <BlogRelatedPosts posts={relatedPosts} />}
      <BlogNewsletter />
    </>
  )
}
