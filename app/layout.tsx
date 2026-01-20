import type { Metadata } from "next"
import { Barlow_Condensed, DM_Sans } from "next/font/google"
import { GynergyComHeader } from "@/components/layout/header"
import { GynergyComFooter } from "@/components/layout/footer"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/shop/cart-drawer"
import { ARIAChatWidget } from "@/components/aria/chat-widget"
import { TrackingProvider } from "@/components/analytics/tracking-provider"
import { AllSchemasScript } from "@/components/seo/json-ld-schemas"
import "./globals.css"

// Google Fonts as fallbacks for self-hosted brand fonts
// Primary fonts (Humane Bold, D-DIN) are loaded via @font-face in globals.css
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
  weight: ["400", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
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
      className={`${barlowCondensed.variable} ${dmSans.variable}`}
    >
      <head>
        <AllSchemasScript />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <TrackingProvider>
          <CartProvider>
            <GynergyComHeader />
            <main className="flex-1">{children}</main>
            <GynergyComFooter />
            <CartDrawer />
            <ARIAChatWidget />
          </CartProvider>
        </TrackingProvider>
      </body>
    </html>
  )
}
