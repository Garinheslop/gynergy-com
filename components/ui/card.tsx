import { cn } from "@/lib/utils"
import { forwardRef } from "react"

// Program Card - for showcasing Date Zero, Level 5, etc.
interface ProgramCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: React.ReactNode
  accentColor?: string
  href?: string
}

export const ProgramCard = forwardRef<HTMLDivElement, ProgramCardProps>(
  ({ title, description, icon, accentColor, href, className, ...props }, ref) => {
    const Wrapper = href ? "a" : "div"
    const wrapperProps = href ? { href } : {}

    return (
      <Wrapper
        {...wrapperProps}
        className={cn(
          "group block bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] rounded-2xl p-8 border border-[#2E2E2E] transition-all duration-500",
          "hover:border-[#F8F812]/30 hover:transform hover:scale-[1.02]",
          href && "cursor-pointer",
          className
        )}
      >
        <div ref={ref} {...props}>
          {icon && (
            <div
              className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                accentColor ? `bg-[${accentColor}]/10` : "bg-[#F8F812]/10"
              )}
              style={{
                backgroundColor: accentColor
                  ? `${accentColor}15`
                  : "rgba(248, 248, 18, 0.1)",
              }}
            >
              <div
                style={{ color: accentColor || "#F8F812" }}
                className="text-2xl"
              >
                {icon}
              </div>
            </div>
          )}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F8F812] transition-colors">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        </div>
      </Wrapper>
    )
  }
)

ProgramCard.displayName = "ProgramCard"

// Pillar Card - for the 5 pillars (Health, Wealth, etc.)
interface PillarCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle: string
  description: string
  beforeState: string
  afterState: string
  icon: React.ReactNode
  accentColor: string
}

export const PillarCard = forwardRef<HTMLDivElement, PillarCardProps>(
  (
    {
      title,
      subtitle,
      description,
      beforeState,
      afterState,
      icon,
      accentColor,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[#1A1A1A] rounded-2xl p-6 border-l-4 transition-all duration-300 hover:bg-[#1F1F1F]",
          className
        )}
        style={{ borderLeftColor: accentColor }}
        {...props}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${accentColor}20` }}
        >
          <div style={{ color: accentColor }}>{icon}</div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-white/50 mb-4">{subtitle}</p>

        {/* Description */}
        <p className="text-sm text-white/70 mb-4">{description}</p>

        {/* Before/After States */}
        <div className="space-y-2">
          <p className="text-sm text-white/40 line-through">{beforeState}</p>
          <p className="text-sm" style={{ color: accentColor }}>
            {afterState}
          </p>
        </div>
      </div>
    )
  }
)

PillarCard.displayName = "PillarCard"

// Feature Card - for listing benefits/features
interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon: React.ReactNode
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, description, icon, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[#1A1A1A] rounded-2xl p-6 border border-[#2E2E2E] transition-all duration-300",
          "hover:border-[#F8F812]/20 hover:bg-[#1F1F1F]",
          className
        )}
        {...props}
      >
        <div className="w-12 h-12 rounded-xl bg-[#F8F812]/10 flex items-center justify-center mb-4 text-[#F8F812]">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/60 leading-relaxed">{description}</p>
      </div>
    )
  }
)

FeatureCard.displayName = "FeatureCard"

// Testimonial Card
interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string
  author: string
  role?: string
  imageSrc?: string
}

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ quote, author, role, imageSrc, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-8 border border-[#2E2E2E]",
          className
        )}
        {...props}
      >
        {/* Quote Mark */}
        <div className="text-[#F8F812] text-4xl font-serif mb-4">&ldquo;</div>

        {/* Quote */}
        <p className="text-white/80 text-lg leading-relaxed mb-6 italic">
          {quote}
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-bold text-white">{author}</p>
            {role && <p className="text-sm text-white/50">{role}</p>}
          </div>
        </div>
      </div>
    )
  }
)

TestimonialCard.displayName = "TestimonialCard"
