import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/15 text-primary hover:bg-primary/25",
        secondary: "border-transparent bg-secondary/15 text-secondary hover:bg-secondary/25",
        destructive: "border-transparent bg-destructive/15 text-destructive-foreground",
        outline: "text-muted-foreground border-border hover:border-primary/30 hover:text-primary",
        cyan: "border-transparent bg-primary/10 text-primary ring-1 ring-primary/20 hover:bg-primary/25",
        coral: "border-transparent bg-secondary/10 text-secondary ring-1 ring-secondary/20 hover:bg-secondary/25",
        amber: "border-transparent bg-accent/10 text-accent ring-1 ring-accent/20 hover:bg-accent/25",
        aurora: "border-transparent bg-gradient-to-r from-primary/20 via-violet-500/20 to-secondary/20 text-primary ring-1 ring-primary/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
