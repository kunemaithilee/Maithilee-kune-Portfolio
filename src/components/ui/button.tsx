import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-[#7e4a3d] hover:brightness-110 shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-[1.03]",
        destructive: "bg-destructive text-destructive-foreground hover:opacity-90",
        outline: "border border-dark/15 bg-transparent hover:bg-dark/8 hover:text-dark",
        secondary: "bg-dark/10 text-dark hover:bg-dark/15 backdrop-blur-sm shadow-lg",
        ghost: "hover:bg-dark/5 hover:text-dark text-dark/60",
        link: "text-dark underline-offset-4 hover:underline",
        premium: "relative overflow-hidden bg-gradient-to-r from-[#7e4a3d] via-[#8c5f4d] to-[#7e4a3d] bg-[length:200%_100%] text-white border-0 shadow-lg shadow-[#7e4a3d]/20 hover:shadow-[#7e4a3d]/30 hover:scale-[1.03] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full before:hover:translate-x-full before:transition-transform before:duration-700",
        magnetic: "relative bg-dark/5 border border-dark/10 text-dark/80 hover:text-dark hover:bg-dark/10 hover:border-dark/20 shadow-lg",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
