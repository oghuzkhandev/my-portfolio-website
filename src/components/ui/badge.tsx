import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border border-gray-500/50",

        gradient:
          "border-transparent bg-gradient-to-br from-cyan-600 to-yellow-600 text-white shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/60 transition-all transform hover:-translate-y-[1px]",

        glow: "border border-fuchsia-400/60 bg-gray-800/60 text-fuchsia-300 backdrop-blur-sm shadow-md shadow-fuchsia-500/20 hover:border-fuchsia-400/80 hover:bg-gray-800/80 hover:shadow-fuchsia-500/40 transition-all",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
