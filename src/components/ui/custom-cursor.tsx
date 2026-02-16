"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function getIsDesktop() {
  if (typeof window === "undefined") return false;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  return !prefersReduced && !isTouchDevice;
}

function subscribe(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export function CustomCursor() {
  const isDesktop = useSyncExternalStore(subscribe, getIsDesktop, () => false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });
  const hoverImageRef = useRef<string | null>(null);
  const imageElRef = useRef<HTMLImageElement>(null);
  const dotElRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isDesktop) return;

    // Hide default cursor on desktop
    document.body.style.cursor = "none";

    function onMouseMove(e: MouseEvent) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    }

    function onMouseEnterBox(e: Event) {
      const target = e.currentTarget as HTMLElement;
      const image = target.getAttribute("data-cursor-image");
      if (image) {
        hoverImageRef.current = image;
        if (imageElRef.current) {
          imageElRef.current.src = image;
          imageElRef.current.style.display = "block";
        }
        if (dotElRef.current) dotElRef.current.style.display = "none";
        if (containerRef.current) {
          containerRef.current.style.width = "300px";
          containerRef.current.style.height = "180px";
          containerRef.current.style.borderRadius = "8px";
        }
      }
    }

    function onMouseLeaveBox() {
      hoverImageRef.current = null;
      if (imageElRef.current) imageElRef.current.style.display = "none";
      if (dotElRef.current) dotElRef.current.style.display = "block";
      if (containerRef.current) {
        containerRef.current.style.width = "20px";
        containerRef.current.style.height = "20px";
        containerRef.current.style.borderRadius = "10px";
      }
    }

    window.addEventListener("mousemove", onMouseMove);

    const boxes = document.querySelectorAll("[data-cursor-image]");
    boxes.forEach((box) => {
      box.addEventListener("mouseenter", onMouseEnterBox);
      box.addEventListener("mouseleave", onMouseLeaveBox);
    });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
      boxes.forEach((box) => {
        box.removeEventListener("mouseenter", onMouseEnterBox);
        box.removeEventListener("mouseleave", onMouseLeaveBox);
      });
    };
  }, [isDesktop, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: springX, y: springY }}
    >
      <div
        ref={containerRef}
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden transition-all duration-300 ease-out"
        style={{ width: 20, height: 20, borderRadius: 10 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imageElRef}
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt=""
          className="h-full w-full object-cover"
          style={{ display: "none" }}
        />
        <div
          ref={dotElRef}
          className="h-full w-full rounded-full border-2 border-pink-400/60 bg-pink-400/10"
        />
      </div>
    </motion.div>
  );
}
