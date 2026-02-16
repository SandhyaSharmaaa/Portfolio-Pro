import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  cellSize?: number;
  strokeWidth?: number;
  color?: string;
}

export function GridPattern({
  className,
  cellSize = 64,
  strokeWidth = 0.6,
  color = "rgba(45, 42, 46, 0.12)",
}: GridPatternProps) {
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
          id="grid-pattern"
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}
