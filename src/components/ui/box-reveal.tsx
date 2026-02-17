"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BoxRevealProps {
  children: React.ReactNode;
  className?: string;
  boxColor?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
  width?: string;
}

export function BoxReveal({
  children,
  className,
  boxColor = "#E08DA0",
  duration = 0.6,
  delay = 0,
  once = true,
  width = "100%",
}: BoxRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{ width }}
    >
      {/* Content — fades in at the midpoint of the bar animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.05, delay: delay + duration * 0.5 }}
      >
        {children}
      </motion.div>

      {/* Sliding bar — enters from left, exits to right */}
      <motion.div
        className="absolute inset-y-0"
        style={{ background: boxColor, borderRadius: 2 }}
        initial={{ left: "0%", right: "100%" }}
        animate={
          isInView
            ? {
                left: ["0%", "0%", "100%"],
                right: ["100%", "0%", "0%"],
              }
            : { left: "0%", right: "100%" }
        }
        transition={{
          duration,
          delay,
          ease: [0.65, 0, 0.35, 1],
          times: [0, 0.5, 1],
        }}
      />
    </div>
  );
}
