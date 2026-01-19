import { forwardRef } from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-heading font-semibold uppercase tracking-[0.1em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-[#AFECDB] text-black border-none hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(175,236,219,0.4)]",
        secondary:
          "bg-transparent text-white border border-white hover:bg-white hover:text-black",
        outline:
          "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5",
        ghost:
          "text-[#AFECDB] hover:underline underline-offset-4",
        dark:
          "bg-[#1A1A1A] text-white border border-white/10 hover:border-[#AFECDB]/30 hover:bg-[#2A2A2A]",
      },
      size: {
        sm: "px-5 py-2.5 text-xs",
        md: "px-8 py-4 text-sm",
        lg: "px-10 py-[18px] text-sm",
        xl: "px-12 py-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  href?: string
  external?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(buttonVariants({ variant, size, className }))

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={isLoading} {...props}>
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
