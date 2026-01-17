import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostsByCategory, categories, type BlogCategory } from "@/lib/gynergy-blog/posts"
import { BlogCategoryHero } from "@/components/pages/blog/category-hero"
import { BlogCategoryGrid } from "@/components/pages/blog/category-grid"
import { BlogNewsletter } from "@/components/pages/blog/newsletter"

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const categoryData = categories.find(c => c.id === category)

  if (!categoryData) {
    return {
      title: "Category Not Found | GYNERGY Blog",
    }
  }

  return {
    title: `${categoryData.label} Articles | GYNERGY Blog`,
    description: `Explore articles about ${categoryData.label.toLowerCase()}. ${categoryData.description}.`,
    openGraph: {
      title: `${categoryData.label} | GYNERGY Blog`,
      description: categoryData.description,
      url: `https://gynergy.com/blog/category/${category}`,
      type: "website",
    },
  }
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params
  const categoryData = categories.find(c => c.id === category)

  if (!categoryData) {
    notFound()
  }

  const posts = getPostsByCategory(category as BlogCategory)

  return (
    <>
      <BlogCategoryHero category={categoryData} postCount={posts.length} />
      <BlogCategoryGrid posts={posts} />
      <BlogNewsletter />
    </>
  )
}
