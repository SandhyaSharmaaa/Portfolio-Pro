"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  children: React.ReactNode;
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "horizontal" | "vertical";
  onIconHover?: () => void;
}

export function Dock({
  children,
  className,
  magnification = 60,
  distance = 140,
  direction = "horizontal",
  onIconHover,
}: DockProps) {
  const mousePos = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) =>
        mousePos.set(direction === "horizontal" ? e.clientX : e.clientY)
      }
      onMouseLeave={() => mousePos.set(Infinity)}
      className={cn(
        direction === "horizontal"
          ? "flex h-14 items-end gap-3 rounded-full border border-border/60 bg-white/80 px-4 pb-2.5 backdrop-blur-xl"
          : "flex flex-col items-center gap-1 rounded-full border border-border/60 bg-white/80 px-2 py-3 backdrop-blur-xl",
        "shadow-[0_2px_20px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <DockIcon
              key={i}
              mousePos={mousePos}
              magnification={magnification}
              distance={distance}
              direction={direction}
              onMouseEnter={onIconHover}
            >
              {child}
            </DockIcon>
          ))
        : children}
    </motion.div>
  );
}

interface DockIconProps {
  children: React.ReactNode;
  mousePos: ReturnType<typeof useMotionValue<number>>;
  magnification: number;
  distance: number;
  direction: "horizontal" | "vertical";
  onMouseEnter?: () => void;
}

function DockIcon({
  children,
  mousePos,
  magnification,
  distance,
  direction,
  onMouseEnter,
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mousePos, (val: number) => {
    const el = ref.current;
    if (!el) return distance;
    const rect = el.getBoundingClientRect();
    if (direction === "horizontal") {
      return val - rect.x - rect.width / 2;
    }
    return val - rect.y - rect.height / 2;
  });

  const sizeSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [36, magnification, 36],
  );
  const size = useSpring(sizeSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={
        direction === "horizontal"
          ? { width: size }
          : { height: size, width: size }
      }
      onMouseEnter={onMouseEnter}
      className="flex aspect-square items-center justify-center rounded-full"
    >
      {children}
    </motion.div>
  );
}
