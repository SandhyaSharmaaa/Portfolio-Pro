"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = "#E08DA0",
  colorTo = "#E6D9F0",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `${-delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "![border:calc(var(--border-width))_solid_transparent]",
        "[background:padding-box_content-box,border-box_no-repeat_0%_0%/calc(var(--size)*1px)_calc(var(--size)*1px)_conic-gradient(from_calc(var(--angle)-60deg),transparent,var(--color-from),var(--color-to),transparent)]",
        "animate-[border-beam_var(--duration)_infinite_linear]",
        "[animation-delay:var(--delay)]",
        className,
      )}
    />
  );
}
