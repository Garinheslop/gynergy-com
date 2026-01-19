import { NextResponse } from "next/server"

interface PodcastEpisode {
  title: string
  description: string
  pubDate: string
  duration: string
  audioUrl: string
  episodeNumber: string
  link: string
}

// Buzzsprout RSS feed URL
const BUZZSPROUT_RSS_URL = "https://feeds.buzzsprout.com/2506068.rss"

// Parse duration from various formats
function parseDuration(duration: string): string {
  if (!duration) return ""

  // If already in minutes format
  if (duration.includes("min")) return duration

  // If in seconds
  const seconds = parseInt(duration, 10)
  if (!isNaN(seconds)) {
    const minutes = Math.round(seconds / 60)
    return `${minutes} min`
  }

  // If in HH:MM:SS format
  const timeParts = duration.split(":")
  if (timeParts.length >= 2) {
    const hours = parseInt(timeParts[0], 10)
    const minutes = parseInt(timeParts[1], 10)
    const totalMinutes = hours * 60 + minutes
    return `${totalMinutes} min`
  }

  return duration
}

// Format date to readable format
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

// Extract text content from XML/HTML
function extractText(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i")
  const match = xml.match(regex)
  if (!match) return ""

  // Clean up CDATA and HTML tags
  return match[1]
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim()
}

// Extract attribute from XML element
function extractAttribute(xml: string, attr: string): string {
  const regex = new RegExp(`${attr}="([^"]*)"`)
  const match = xml.match(regex)
  return match ? match[1] : ""
}

export async function GET() {
  try {
    // Fetch the RSS feed
    const response = await fetch(BUZZSPROUT_RSS_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`)
    }

    const xml = await response.text()

    // Parse items from RSS
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    const items: string[] = []
    let match

    while ((match = itemRegex.exec(xml)) !== null) {
      items.push(match[1])
    }

    // Parse each episode
    const episodes: PodcastEpisode[] = items.slice(0, 10).map((item, index) => {
      const title = extractText(item, "title")
      const description = extractText(item, "description")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .substring(0, 200) + "..."
      const pubDate = formatDate(extractText(item, "pubDate"))
      const duration = parseDuration(
        extractText(item, "itunes:duration") || extractAttribute(item, "length")
      )
      const audioUrl = extractAttribute(item, "url") || extractAttribute(item, "href")
      const link = extractText(item, "link")

      // Calculate episode number (reverse order since RSS is newest first)
      const totalEpisodes = items.length
      const episodeNumber = index === 0 ? "Latest" : `EP ${totalEpisodes - index}`

      return {
        title,
        description,
        pubDate,
        duration,
        audioUrl,
        episodeNumber,
        link,
      }
    })

    return NextResponse.json({
      success: true,
      episodes,
      totalEpisodes: items.length,
    })
  } catch (error) {
    console.error("Error fetching podcast episodes:", error)

    // Return error with empty episodes array
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch episodes",
        episodes: [],
        totalEpisodes: 0,
      },
      { status: 500 }
    )
  }
}
