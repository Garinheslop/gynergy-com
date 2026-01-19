// UTM Parameter Tracking for Marketing Attribution
// Captures UTM parameters from URL and stores them for attribution

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  referrer?: string
  landing_page?: string
  first_touch?: string
}

const UTM_STORAGE_KEY = "gynergy_utm_params"
const UTM_EXPIRY_DAYS = 30

// Get UTM params from URL
export function getUTMParamsFromURL(): UTMParams {
  if (typeof window === "undefined") return {}

  const searchParams = new URLSearchParams(window.location.search)

  return {
    utm_source: searchParams.get("utm_source") || undefined,
    utm_medium: searchParams.get("utm_medium") || undefined,
    utm_campaign: searchParams.get("utm_campaign") || undefined,
    utm_term: searchParams.get("utm_term") || undefined,
    utm_content: searchParams.get("utm_content") || undefined,
  }
}

// Store UTM params in localStorage with expiry
export function storeUTMParams(params: UTMParams): void {
  if (typeof window === "undefined") return

  const existingParams = getStoredUTMParams()

  // First-touch attribution: only store if no existing params
  if (existingParams && existingParams.utm_source) {
    return
  }

  const dataToStore = {
    ...params,
    referrer: document.referrer || undefined,
    landing_page: window.location.pathname,
    first_touch: new Date().toISOString(),
    expiry: Date.now() + UTM_EXPIRY_DAYS * 24 * 60 * 60 * 1000,
  }

  localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(dataToStore))
}

// Get stored UTM params (with expiry check)
export function getStoredUTMParams(): UTMParams | null {
  if (typeof window === "undefined") return null

  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY)
    if (!stored) return null

    const data = JSON.parse(stored)

    // Check expiry
    if (data.expiry && Date.now() > data.expiry) {
      localStorage.removeItem(UTM_STORAGE_KEY)
      return null
    }

    return data
  } catch {
    return null
  }
}

// Clear UTM params (after conversion)
export function clearUTMParams(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(UTM_STORAGE_KEY)
}

// Get attribution data for form submissions
export function getAttributionData(): Record<string, string> {
  const utmParams = getStoredUTMParams()
  if (!utmParams) return {}

  const attribution: Record<string, string> = {}

  if (utmParams.utm_source) attribution.utm_source = utmParams.utm_source
  if (utmParams.utm_medium) attribution.utm_medium = utmParams.utm_medium
  if (utmParams.utm_campaign) attribution.utm_campaign = utmParams.utm_campaign
  if (utmParams.utm_term) attribution.utm_term = utmParams.utm_term
  if (utmParams.utm_content) attribution.utm_content = utmParams.utm_content
  if (utmParams.referrer) attribution.referrer = utmParams.referrer
  if (utmParams.landing_page) attribution.landing_page = utmParams.landing_page
  if (utmParams.first_touch) attribution.first_touch = utmParams.first_touch

  return attribution
}

// Initialize UTM tracking on page load
export function initUTMTracking(): void {
  if (typeof window === "undefined") return

  const urlParams = getUTMParamsFromURL()

  // Only store if we have UTM params in URL
  if (urlParams.utm_source || urlParams.utm_medium || urlParams.utm_campaign) {
    storeUTMParams(urlParams)
  } else if (!getStoredUTMParams()) {
    // Store referrer even without UTM params
    storeUTMParams({
      referrer: document.referrer || undefined,
      landing_page: window.location.pathname,
    })
  }
}
