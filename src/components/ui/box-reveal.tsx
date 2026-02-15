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
  duration = 0.5,
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.01, delay: delay + duration * 0.6 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0"
        style={{ transformOrigin: "left", background: boxColor }}
        initial={{ left: 0 }}
        animate={
          isInView
            ? { left: "0%", right: "0%", scaleX: [0, 1, 1, 0] }
            : { scaleX: 0 }
        }
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1],
          times: [0, 0.45, 0.55, 1],
        }}
      />
    </div>
  );
}
