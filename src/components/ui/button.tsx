import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:underline [&>a]:text-primary-foreground [&>a]:hover:text-primary-foreground [&>a]:no-underline [&>a]:font-normal [&>a]:w-full [&>a]:h-full [&>a]:flex [&>a]:items-center [&>a]:justify-center",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:underline [&>a]:text-destructive-foreground [&>a]:hover:text-destructive-foreground [&>a]:no-underline [&>a]:font-normal [&>a]:w-full [&>a]:h-full [&>a]:flex [&>a]:items-center [&>a]:justify-center",
        outline:
          "border border-input bg-background hover:bg-accent hover:underline [&>a]:text-foreground [&>a]:hover:text-foreground [&>a]:no-underline [&>a]:font-normal [&>a]:w-full [&>a]:h-full [&>a]:flex [&>a]:items-center [&>a]:justify-center",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:underline [&>a]:text-secondary-foreground [&>a]:hover:text-secondary-foreground [&>a]:no-underline [&>a]:font-normal [&>a]:w-full [&>a]:h-full [&>a]:flex [&>a]:items-center [&>a]:justify-center",
        ghost: "hover:bg-accent hover:underline [&>a]:text-foreground [&>a]:hover:text-foreground [&>a]:no-underline [&>a]:font-normal [&>a]:w-full [&>a]:h-full [&>a]:flex [&>a]:items-center [&>a]:justify-center",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
