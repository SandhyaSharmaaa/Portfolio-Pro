"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface BackgroundBoxesProps {
  className?: string;
  rows?: number;
  cols?: number;
}

export function BackgroundBoxes({
  className,
  rows = 12,
  cols = 12,
}: BackgroundBoxesProps) {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  const getColor = useCallback(() => {
    const colors = [
      "rgba(224, 141, 160, 0.12)",
      "rgba(224, 141, 160, 0.08)",
      "rgba(230, 217, 240, 0.12)",
      "rgba(255, 234, 237, 0.15)",
      "rgba(245, 220, 200, 0.1)",
      "rgba(208, 228, 237, 0.08)",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
      style={{
        maskImage:
          "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 70%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 70%)",
      }}
    >
      <div
        className="pointer-events-auto grid h-full w-full"
        style={{
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => {
          const key = `box-${i}`;
          const isHovered = hoveredCell === key;
          return (
            <div
              key={key}
              onMouseEnter={() => setHoveredCell(key)}
              onMouseLeave={() => setHoveredCell(null)}
              className="border-[0.5px] border-pink-100/20 transition-colors duration-500"
              style={{
                backgroundColor: isHovered ? getColor() : "transparent",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
