import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-[18px] font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 leading-none',
  {
    variants: {
      variant: {
        default:
          'bg-yellow100 text-darkRed100 hover:bg-transparent hover:text-darkRed100  border-yellow100 hover:bg-yellow60',
        destructive:
          'bg-accentYellow100 text-baseDark100 hover:bg-transparent hover:text-accentYellow100 border border-accentYellow100',
        outline:
          'border border-accentYellow100 text-accentYellow100 bg-transparent hover:bg-accentYellow100 hover:text-baseDark100',
        secondary:
          'bg-accentCyan100 text-baseDark100 hover:bg-transparent hover:text-baseDark100 border border-accentCyan100',
        ghost:
          'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
      },
      size: {
        default:
          'lg:px-[22px] lg:py-[16px] lg:text-[18px] px-[16px] py-[14px] text-[16px] leading-none',
        sm: 'lg:px-[22px] lg:py-[16px] lg:text-[18px] px-[16px] py-[14px] text-[16px] leading-none',
        lg: 'lg:px-[32px] lg:py-[22px] lg:text-[22px] px-[20px] py-[16px] text-[18px] leading-none',
        icon: 'h-10 w-10 leading-none',
      },
      shape: {
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, shape }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
