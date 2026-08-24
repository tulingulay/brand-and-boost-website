import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-editorial text-sm font-semibold tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&>svg]:transition-transform hover:[&>svg]:translate-x-0.5",
  {
    variants: {
      variant: {
        // Eén herkenbaar knopontwerp, overal hetzelfde: zonnegeel vlak dat bij
        // hover omslaat naar kobaltblauw. Werkt op creme, kobalt en wit.
        default: "bg-zonnegeel text-antraciet hover:bg-kobalt hover:text-creme",
        onDark: "bg-zonnegeel text-antraciet hover:bg-kobalt hover:text-creme",
        // Tekstlink met pijl (secundaire acties, geen tweede knopstijl).
        link: "gap-1.5 font-semibold text-antraciet underline-offset-[6px] hover:underline",
        // Legacy aliassen, blijven werken tot elke pagina is omgezet.
        secondary: "bg-zonnegeel text-antraciet hover:bg-kobalt hover:text-creme",
        outline: "bg-zonnegeel text-antraciet hover:bg-kobalt hover:text-creme",
        ghost: "text-antraciet hover:text-kobalt",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5",
        lg: "h-14 px-9 text-[0.95rem]",
        icon: "h-11 w-11",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
