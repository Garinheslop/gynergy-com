import type { Metadata } from "next"
import { Inter, Oswald, Bebas_Neue } from "next/font/google"
import { GynergyComHeader } from "@/components/layout/header"
import { GynergyComFooter } from "@/components/layout/footer"
import "./globals.css"

// Typography - premium brand fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: "400",
})

export const metadata: Metadata = {
  title: {
    default: "GYNERGY | Transform Success Into Significance",
    template: "%s | GYNERGY",
  },
  description:
    "Master the self to serve the world. Join Garin & Yesi on a transformational journey through health, relationships, mindset, and purpose.",
  keywords: [
    "transformation",
    "coaching",
    "men's mastermind",
    "date zero",
    "level 5 life",
    "personal development",
    "mindset",
    "wellness",
    "Garin Heslop",
    "Yesi Heslop",
  ],
  authors: [{ name: "Garin Heslop" }, { name: "Yesi Heslop" }],
  creator: "GYNERGY",
  publisher: "GYNERGY",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gynergy.com",
    siteName: "GYNERGY",
    title: "GYNERGY | Transform Success Into Significance",
    description:
      "Master the self to serve the world. Transform your health, relationships, mindset, and purpose.",
    images: [
      {
        url: "/og-gynergy.jpg",
        width: 1200,
        height: 630,
        alt: "GYNERGY - Transform Success Into Significance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GYNERGY | Transform Success Into Significance",
    description:
      "Master the self to serve the world. Transform your life with Garin & Yesi.",
    images: ["/og-gynergy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${bebasNeue.variable}`}
    >
      <body className="min-h-screen bg-black text-white font-inter antialiased">
        <GynergyComHeader />
        <main className="flex-1">{children}</main>
        <GynergyComFooter />
      </body>
    </html>
  )
}
