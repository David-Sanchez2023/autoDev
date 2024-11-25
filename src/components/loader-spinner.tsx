import type { ComponentProps } from "react";

// Lib
import { cn } from "@/lib";

export function LoaderSpinner({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mr-2 size-4 animate-spin rounded-full border-2 border-t-2 border-disabled-300 border-t-navy-500",
        className,
        { ...props },
      )}
    >
        
    </div>
  );
}
