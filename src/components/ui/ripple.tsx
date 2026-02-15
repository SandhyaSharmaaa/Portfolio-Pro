"use client";

import { cn } from "@/lib/utils";

interface RippleProps {
  className?: string;
  count?: number;
  color?: string;
}

export function Ripple({
  className,
  count = 5,
  color = "rgba(224, 141, 160, 0.08)",
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = 120 + i * 80;
        const delay = i * 0.8;
        const duration = 4 + i * 0.5;
        return (
          <div
            key={i}
            className="absolute rounded-full animate-[ripple_var(--duration)_ease-out_infinite]"
            style={
              {
                width: size,
                height: size,
                border: `1px solid ${color}`,
                opacity: 1 - i * 0.15,
                "--duration": `${duration}s`,
                animationDelay: `${delay}s`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
