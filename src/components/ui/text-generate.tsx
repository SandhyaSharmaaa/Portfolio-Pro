"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateProps {
  words: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function TextGenerate({
  words,
  className,
  delay = 0,
  duration = 0.3,
  once = true,
}: TextGenerateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const wordsArray = words.split(" ");

  return (
    <div ref={ref} className={cn(className)}>
      {wordsArray.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={
            isInView
              ? { opacity: 1, filter: "blur(0px)" }
              : { opacity: 0, filter: "blur(8px)" }
          }
          transition={{
            duration,
            delay: delay + i * 0.08,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
          {i < wordsArray.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </div>
  );
}
