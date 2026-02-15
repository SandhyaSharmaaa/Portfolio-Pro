import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full", className)}
      aria-label="Globe indicating Jind, Haryana"
    >
      {/* Subtle shadow beneath */}
      <ellipse cx="100" cy="190" rx="50" ry="6" className="fill-pink-100/40" />

      {/* Globe circle */}
      <circle
        cx="100"
        cy="95"
        r="80"
        className="fill-gradient-to-br from-white to-surface/40 stroke-border/50"
        fill="url(#globeGrad)"
        strokeWidth="1"
      />

      {/* Gradient fill */}
      <defs>
        <radialGradient id="globeGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#fdf2f4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f3e8ff" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Longitude lines (curved) */}
      <ellipse cx="100" cy="95" rx="30" ry="80" className="stroke-border/20" strokeWidth="0.6" />
      <ellipse cx="100" cy="95" rx="55" ry="80" className="stroke-border/20" strokeWidth="0.6" />
      <line x1="100" y1="15" x2="100" y2="175" className="stroke-border/20" strokeWidth="0.6" />

      {/* Latitude lines (curved) */}
      <ellipse cx="100" cy="55" rx="72" ry="12" className="stroke-border/20" strokeWidth="0.6" />
      <ellipse cx="100" cy="95" rx="80" ry="12" className="stroke-border/20" strokeWidth="0.6" />
      <ellipse cx="100" cy="135" rx="72" ry="12" className="stroke-border/20" strokeWidth="0.6" />

      {/* Jind dot — positioned roughly at 29°N 76°E on the visible hemisphere */}
      <g transform="translate(118, 72)">
        <circle
          r="8"
          className="fill-pink-400/15 animate-ping origin-center"
          style={{ animationDuration: "2s" }}
        />
        <circle r="4.5" className="fill-pink-400/25" />
        <circle r="2.2" className="fill-pink-500" />
      </g>
    </svg>
  );
}
