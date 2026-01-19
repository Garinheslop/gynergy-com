import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "gold" | "teal"
}

export function SectionLabel({
  children,
  className,
  variant = "default",
}: SectionLabelProps) {
  const variantStyles = {
    default: "text-white/70",
    gold: "text-[#FFD700]", // LVL 5 LIFE sub-brand
    teal: "text-[#AFECDB]", // GYNERGY parent brand
  }

  return (
    <span
      className={cn(
        "inline-block text-xs font-heading font-bold tracking-[0.2em] uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

// Section Header - combines label with heading, premium typography
interface SectionHeaderProps {
  label?: string
  labelVariant?: "default" | "gold" | "teal"
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  label,
  labelVariant = "default",
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {label && (
        <SectionLabel variant={labelVariant} className="mb-4 block">
          {label}
        </SectionLabel>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4">
        {title.toUpperCase()}
      </h2>
      {subtitle && (
        <p className="text-white/60 leading-relaxed font-body">{subtitle}</p>
      )}
    </div>
  )
}
