import { cn } from "@/lib/utils";

interface RetroGridProps {
  className?: string;
  angle?: number;
}

export function RetroGrid({ className, angle = 65 }: RetroGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [perspective:300px]",
        className,
      )}
    >
      <div
        className="absolute inset-0 [transform:rotateX(var(--grid-angle))]"
        style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
      >
        <div
          className={cn(
            "absolute inset-[-50%] animate-[retro-grid_20s_linear_infinite]",
            "[background-image:linear-gradient(to_right,rgba(45,42,46,0.06)_1px,transparent_0),linear-gradient(to_bottom,rgba(45,42,46,0.06)_1px,transparent_0)]",
            "[background-size:60px_60px]",
            "[transform-origin:100%_0_0]",
          )}
        />
      </div>
      {/* Fade out */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}
