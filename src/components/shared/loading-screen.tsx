"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
import { useLoading } from "@/hooks/use-loading";

export function LoadingScreen() {
  const { isLoading, onComplete } = useLoading();

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-4">
            {/* Sparkles icon — matching navbar logo */}
            <motion.span
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-pink-500 shadow-[0_4px_20px_rgba(224,141,160,0.4)]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <Sparkles className="h-6 w-6 text-white" />
            </motion.span>

            {/* Name — reveal text with overflow clip */}
            <div className="overflow-hidden">
              <motion.h1
                className="font-display text-2xl font-semibold text-text-primary sm:text-4xl"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.4,
                }}
              >
                Sandhya Sharma
              </motion.h1>
            </div>

            {/* Subtitle — blur fade-in */}
            <motion.p
              className="text-lg text-text-secondary"
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Creative Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
