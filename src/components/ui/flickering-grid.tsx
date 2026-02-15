"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps {
  className?: string;
  cellSize?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
}

export function FlickeringGrid({
  className,
  cellSize = 48,
  color = "244, 114, 182",
  maxOpacity = 0.15,
  flickerChance = 0.03,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = Math.ceil(canvas.width / cellSize);
    const rows = Math.ceil(canvas.height / cellSize);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (Math.random() < flickerChance) {
          const opacity = Math.random() * maxOpacity;
          ctx.fillStyle = `rgba(${color}, ${opacity})`;
          ctx.fillRect(
            col * cellSize,
            row * cellSize,
            cellSize - 1,
            cellSize - 1,
          );
        }
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [cellSize, color, maxOpacity, flickerChance]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden
    />
  );
}
