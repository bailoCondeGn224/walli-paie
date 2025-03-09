/* eslint-disable react-refresh/only-export-components */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../helpers/cn.helper";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-base  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#E8F2E8] text-primary-foreground hover:bg-[#F6F6F6]/80",
        success:
          "border-transparent bg-[#E3FFEC] text-ternary hover:bg-[#E3FFEC]/80",
        info: "border-transparent bg-[#E4E8FF] text-primary hover:bg-[#E4E8FF]/80",
        error:
          "border-transparent bg-[#FFC4C4] text-[#DB2E3B] hover:bg-[#FFC4C4]/80",
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
