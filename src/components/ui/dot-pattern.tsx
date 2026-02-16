import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  gapX?: number;
  gapY?: number;
  dotSize?: number;
  color?: string;
}

export function DotPattern({
  className,
  gapX = 24,
  gapY = 24,
  dotSize = 1.2,
  color = "rgba(45, 42, 46, 0.15)",
}: DotPatternProps) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      aria-hidden
    >
      <defs>
        <pattern
          id="dot-pattern"
          width={gapX}
          height={gapY}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={dotSize} cy={dotSize} r={dotSize} fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}
