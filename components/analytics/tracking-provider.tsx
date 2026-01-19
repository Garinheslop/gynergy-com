"use client"

import { useEffect } from "react"
import { initUTMTracking } from "@/lib/utm-tracking"
import { GoogleAnalytics } from "./google-analytics"

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize UTM tracking on mount
    initUTMTracking()
  }, [])

  return (
    <>
      <GoogleAnalytics />
      {children}
    </>
  )
}
