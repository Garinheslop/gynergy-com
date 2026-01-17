"use client"

import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  /** Aspect ratio - e.g., "16/9", "4/3", "1/1", "3/4" */
  aspect?: string
  /** Description for development - what image should go here */
  label?: string
  /** Additional className */
  className?: string
  /** Size variant */
  size?: "sm" | "md" | "lg" | "xl" | "full"
  /** Visual style */
  variant?: "default" | "portrait" | "hero" | "card" | "avatar"
  /** Optional gradient overlay */
  gradient?: boolean
  /** Alt text for accessibility */
  alt?: string
}

/**
 * Premium image placeholder component for development.
 * Replaces emoji-based placeholders with proper image structure.
 *
 * Usage:
 * <ImagePlaceholder
 *   variant="hero"
 *   label="Garin speaking on stage"
 *   aspect="16/9"
 * />
 */
export function ImagePlaceholder({
  aspect = "16/9",
  label,
  className,
  size = "full",
  variant = "default",
  gradient = false,
  alt,
}: ImagePlaceholderProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-72 h-72",
    xl: "w-96 h-96",
    full: "w-full",
  }

  const variantClasses = {
    default: "bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E]",
    portrait: "bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] rounded-none",
    hero: "bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]",
    card: "bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2E2E2E] rounded-lg overflow-hidden",
    avatar: "bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border-2 border-[#FFD700]/20 rounded-full",
  }

  return (
    <div
      role="img"
      aria-label={alt || label || "Image placeholder"}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      style={{ aspectRatio: aspect }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,215,0,0.1) 10px,
              rgba(255,215,0,0.1) 11px
            )`
          }}
        />
      </div>

      {/* Center icon */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <svg
          className="w-12 h-12 text-white/20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {label && (
          <span className="text-white/30 text-xs font-inter text-center px-4 max-w-[200px]">
            {label}
          </span>
        )}
      </div>

      {/* Optional gradient overlay for text readability */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      )}
    </div>
  )
}

/**
 * Avatar placeholder with proper sizing
 */
export function AvatarPlaceholder({
  size = "md",
  label,
  className,
}: {
  size?: "sm" | "md" | "lg" | "xl"
  label?: string
  className?: string
}) {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  }

  return (
    <div
      role="img"
      aria-label={label || "Avatar placeholder"}
      className={cn(
        "relative flex items-center justify-center rounded-full",
        "bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]",
        "border-2 border-[#FFD700]/20",
        sizes[size],
        className
      )}
    >
      <svg
        className="w-1/2 h-1/2 text-white/20"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  )
}

/**
 * Hero background placeholder for full-width sections
 */
export function HeroBackgroundPlaceholder({
  label,
  children,
  className,
  overlayOpacity = 60,
}: {
  label?: string
  children?: React.ReactNode
  className?: string
  overlayOpacity?: number
}) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,215,0,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(255,215,0,0.05) 0%, transparent 50%)`
          }}
        />
        {/* Label for development */}
        {label && (
          <div className="absolute top-4 left-4 text-white/20 text-xs font-inter">
            [Image: {label}]
          </div>
        )}
      </div>
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
