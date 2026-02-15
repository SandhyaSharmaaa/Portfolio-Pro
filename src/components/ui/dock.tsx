"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  children: React.ReactNode;
  className?: string;
  magnification?: number;
  distance?: number;
}

export function Dock({
  children,
  className,
  magnification = 60,
  distance = 140,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-14 items-end gap-3 rounded-full border border-border/60 bg-white/80 px-4 pb-2.5 backdrop-blur-xl",
        "shadow-[0_2px_20px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <DockIcon
              key={i}
              mouseX={mouseX}
              magnification={magnification}
              distance={distance}
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
  mouseX: ReturnType<typeof useMotionValue<number>>;
  magnification: number;
  distance: number;
}

function DockIcon({
  children,
  mouseX,
  magnification,
  distance,
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const el = ref.current;
    if (!el) return distance;
    const rect = el.getBoundingClientRect();
    return val - rect.x - rect.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [36, magnification, 36],
  );
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square items-center justify-center rounded-full"
    >
      {children}
    </motion.div>
  );
}
