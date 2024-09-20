import type { HTMLAttributes } from "react";


function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`w-full animate-pulse rounded-md  ${className}`}
      tabIndex={0}
      role="progressbar"
      aria-valuetext="Loading..."
      {...props}
    />
  );
}

export { Skeleton };
