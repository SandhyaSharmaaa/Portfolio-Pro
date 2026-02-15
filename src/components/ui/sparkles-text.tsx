"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
}

function generateSparkle(): Sparkle {
  return {
    id: Math.random().toString(36).slice(2),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    color: ["#E08DA0", "#FDD4DB", "#E6D9F0", "#F5DCC8"][
      Math.floor(Math.random() * 4)
    ],
    delay: Math.random() * 2,
    scale: Math.random() * 0.5 + 0.5,
  };
}

interface SparklesTextProps {
  children: React.ReactNode;
  className?: string;
  sparklesCount?: number;
}

export function SparklesText({
  children,
  className,
  sparklesCount = 10,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: sparklesCount }, generateSparkle);
    setSparkles(initial);

    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((s) => (Math.random() > 0.7 ? generateSparkle() : s)),
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [sparklesCount]);

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <motion.svg
          key={sparkle.id}
          className="pointer-events-none absolute z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, sparkle.scale, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6 0L7.41 4.59L12 6L7.41 7.41L6 12L4.59 7.41L0 6L4.59 4.59L6 0Z"
            fill={sparkle.color}
          />
        </motion.svg>
      ))}
      <span className="relative z-0">{children}</span>
    </span>
  );
}
