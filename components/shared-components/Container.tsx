import { cn } from "@/lib/utils";

import React from "react";
// import clsx from "clsx";

type ContainerProps = {
  variant?: "default" | "rounded-primary" | "rounded-secondary";
  className?: string; // Allow custom styles to be passed
};

export default function Container({
  children,
  variant = "default",
  className,
  ...props
}: Readonly<{
  children: React.ReactNode;
}> &
  ContainerProps) {
  return (
    <section
      className={cn(
        "wrapper mt-6 mb-6 md:mt-12 md:mb-12 overflow-hidden",
        // Primary rounded section
        {
          "rounded-3xl shadow-2xl mx-5 xl:mx-auto bg-section":
            variant === "rounded-primary",
          // Secondary rounded section
          "rounded-3xl mx-5 xl:mx-auto bg-secondary text-gray-700":
            variant === "rounded-secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
