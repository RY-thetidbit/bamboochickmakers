import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white shadow-soft hover:bg-brand-600 hover:shadow-glow',
        whatsapp: 'bg-whatsapp text-white shadow-soft hover:bg-whatsapp-dark',
        accent: 'bg-leaf text-white shadow-soft hover:bg-leaf-600',
        outline: 'border-2 border-brand/30 bg-transparent text-brand-700 hover:border-brand hover:bg-brand-50',
        ghost: 'text-brand-700 hover:bg-brand-50',
        light: 'bg-white text-brand-700 shadow-soft hover:bg-cream-100',
        dark: 'bg-ink text-white hover:bg-ink/90',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6',
        lg: 'h-13 px-8 text-base py-3.5',
        xl: 'h-14 px-9 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = 'Button';

export { Button, buttonVariants };
