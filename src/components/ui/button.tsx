import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-burgundy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-burgundy text-white hover:bg-brand-burgundy/90 transition",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-brand-pearl bg-white hover:border-brand-burgundy hover:text-brand-burgundy hover:transform hover:translate-y-[-1px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] text-black",
        secondary:
          "bg-brand-cream text-black hover:bg-[rgba(128,27,43,0.1)] hover:text-brand-burgundy",
        ghost: "hover:bg-brand-cream text-black",
        link: "text-brand-burgundy underline-offset-4 hover:underline",
        executive:
          "bg-brand-burgundy text-white font-medium text-base px-8 py-3 hover:bg-brand-burgundy/90 hover:transform hover:translate-y-[-1px] hover:shadow-[0_4px_16px_rgba(128,27,43,0.25)] active:transform active:translate-y-0 active:shadow-[0_2px_8px_rgba(128,27,43,0.2)] transition-all duration-200",
        "executive-secondary":
          "bg-white text-black border border-brand-pearl font-medium text-base px-8 py-3 hover:border-brand-burgundy hover:text-brand-burgundy hover:transform hover:translate-y-[-1px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200",
        cartier:
          "bg-brand-burgundy text-white font-medium text-base px-8 py-3 hover:bg-brand-burgundy/90 hover:transform hover:translate-y-[-1px] hover:shadow-[0_4px_16px_rgba(128,27,43,0.25)] active:transform active:translate-y-0 active:shadow-[0_2px_8px_rgba(128,27,43,0.2)] transition-all duration-200 letter-spacing-[0.01em]",
        "cartier-secondary":
          "bg-white text-black border border-brand-pearl font-medium text-base px-8 py-3 hover:border-brand-burgundy hover:text-brand-burgundy hover:transform hover:translate-y-[-1px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200",
        "cartier-subtle":
          "bg-brand-cream text-black font-medium text-base px-8 py-3 hover:bg-[rgba(128,27,43,0.1)] hover:text-brand-burgundy transition-all duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
        executive: "h-12 px-8 py-3 text-base",
        cartier: "h-12 px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
