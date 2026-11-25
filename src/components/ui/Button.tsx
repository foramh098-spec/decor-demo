import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--color-maroon)] text-[var(--color-ivory)] hover:bg-[var(--color-marigold)] hover:text-[var(--color-charcoal)] transition-colors": variant === "primary",
            "bg-[var(--color-emerald)] text-[var(--color-ivory)] hover:bg-[var(--color-emerald)]/90": variant === "secondary",
            "border border-[var(--color-maroon)] bg-transparent text-[var(--color-maroon)] hover:bg-[var(--color-maroon)] hover:text-[var(--color-ivory)]": variant === "outline",
            "hover:bg-[var(--color-cream)] text-[var(--color-maroon)]": variant === "ghost",
            "text-[var(--color-maroon)] underline-offset-4 hover:underline": variant === "link",
            "h-10 px-6 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-12 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
