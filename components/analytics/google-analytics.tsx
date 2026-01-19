"use client"

import Script from "next/script"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// Analytics event tracking utility
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Conversion tracking for specific events
export const trackConversion = {
  // Lead capture events
  newsletterSignup: (email: string) => {
    trackEvent("newsletter_signup", "lead_capture", email)
  },
  leadMagnetDownload: (email: string) => {
    trackEvent("lead_magnet_download", "lead_capture", email)
  },
  contactFormSubmit: () => {
    trackEvent("contact_form_submit", "lead_capture")
  },
  applicationSubmit: (program: string) => {
    trackEvent("application_submit", "lead_capture", program)
  },

  // High-value lead capture events
  speakingInquiry: () => {
    trackEvent("speaking_inquiry", "high_value_lead", "speaking")
  },
  coachingApplication: () => {
    trackEvent("coaching_application", "high_value_lead", "1on1-coaching")
  },
  l5lApplication: () => {
    trackEvent("l5l_application", "high_value_lead", "level-5-life", 15000)
  },
  dateZeroInquiry: () => {
    trackEvent("date_zero_inquiry", "high_value_lead", "date-zero", 1497)
  },
  serviceRetreatInquiry: () => {
    trackEvent("service_retreat_inquiry", "high_value_lead", "service-retreat", 1497)
  },

  // E-commerce events
  addToCart: (productId: string, price: number) => {
    trackEvent("add_to_cart", "ecommerce", productId, price)
  },
  beginCheckout: (value: number) => {
    trackEvent("begin_checkout", "ecommerce", undefined, value)
  },
  purchase: (transactionId: string, value: number) => {
    trackEvent("purchase", "ecommerce", transactionId, value)
  },

  // Engagement events
  ariaChat: () => {
    trackEvent("aria_chat_opened", "engagement")
  },
  ariaChatMessage: () => {
    trackEvent("aria_chat_message", "engagement")
  },
  videoPlay: (videoId: string) => {
    trackEvent("video_play", "engagement", videoId)
  },
  ctaClick: (ctaName: string) => {
    trackEvent("cta_click", "engagement", ctaName)
  },
}
