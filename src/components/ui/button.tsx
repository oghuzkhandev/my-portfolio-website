import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-blue-500/20",

        primary:
          "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-purple-500/20",

        destructive:
          "bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-red-500/20",

        outline:
          "border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] rounded-xl transition-all duration-300",

        secondary:
          "bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 text-slate-900 dark:text-slate-100 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-slate-200/50 dark:border-slate-600/50",

        ghost:
          "hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] rounded-xl transition-all duration-300",

        link: "text-blue-600 dark:text-blue-400 underline-offset-4 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200",

        gradient:
          "bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-emerald-500/20",

        glassmorphism:
          "bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-slate-900 dark:text-white shadow-lg hover:bg-white/20 dark:hover:bg-black/20 hover:scale-[1.02] active:scale-[0.98] rounded-xl transition-all duration-300",

        luxury:
          "bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-amber-400/30 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",

        neon: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 hover:scale-[1.02] active:scale-[0.98] rounded-xl border-2 border-cyan-400 hover:border-cyan-300 transition-all duration-300 relative before:absolute before:inset-0 before:bg-cyan-400/10 before:rounded-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
      },
      size: {
        sm: "h-9 px-4 py-2 text-xs rounded-lg",
        default: "h-11 px-6 py-2.5 text-sm rounded-xl",
        lg: "h-13 px-8 py-3 text-base rounded-xl font-semibold",
        xl: "h-16 px-10 py-4 text-lg rounded-2xl font-bold",
        icon: "h-10 w-10 rounded-xl",
        "icon-sm": "h-8 w-8 rounded-lg",
        "icon-lg": "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {(variant === "primary" ||
          variant === "luxury" ||
          variant === "gradient") && (
          <div className="absolute inset-0 -top-2 -left-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <span
          className={cn(
            "relative z-10 flex items-center gap-2",
            loading && "opacity-0"
          )}
        >
          {children}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
