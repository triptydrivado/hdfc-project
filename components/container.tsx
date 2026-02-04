import React from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-4 block md:mx-10 xl:mx-15 2xl:mx-20", className)}
      {...props}
    >
      {children}
    </div>
  );
}

Container.displayName = "Container";
export default Container;
