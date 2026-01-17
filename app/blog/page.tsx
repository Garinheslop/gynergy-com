import { Metadata } from "next"
import { BlogHero } from "@/components/pages/blog/hero"
import { BlogGrid } from "@/components/pages/blog/grid"
import { BlogCategories } from "@/components/pages/blog/categories"
import { BlogNewsletter } from "@/components/pages/blog/newsletter"

export const metadata: Metadata = {
  title: "Blog | GYNERGY - Insights for Transformation",
  description:
    "Explore articles on health optimization, relationships, mindset mastery, and living with purpose. Practical wisdom for high-performers seeking transformation.",
  openGraph: {
    title: "Blog | GYNERGY - Insights for Transformation",
    description:
      "Articles on health, relationships, mindset, and purpose.",
    url: "https://gynergy.com/blog",
    type: "website",
  },
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </>
  )
}
