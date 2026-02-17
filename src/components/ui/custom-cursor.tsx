"use client";

import { useEffect, useRef, useCallback, useSyncExternalStore } from "react";
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

type CursorVariant = "default" | "text" | "link" | "card" | "image";

const CURSOR_STYLES: Record<
  CursorVariant,
  { size: number; borderRadius: number; opacity: number; border: string; bg: string; blend: string }
> = {
  default: { size: 20, borderRadius: 10, opacity: 1, border: "2px solid rgba(224,141,160,0.6)", bg: "rgba(224,141,160,0.1)", blend: "normal" },
  text: { size: 48, borderRadius: 24, opacity: 0.6, border: "1.5px solid rgba(224,141,160,0.3)", bg: "rgba(224,141,160,0.06)", blend: "difference" },
  link: { size: 12, borderRadius: 6, opacity: 1, border: "none", bg: "rgba(224,141,160,0.8)", blend: "normal" },
  card: { size: 36, borderRadius: 18, opacity: 0.7, border: "1.5px solid rgba(224,141,160,0.4)", bg: "rgba(224,141,160,0.08)", blend: "normal" },
  image: { size: 300, borderRadius: 8, opacity: 1, border: "none", bg: "transparent", blend: "normal" },
};

function getCursorVariant(el: HTMLElement): CursorVariant | null {
  // Check for explicit data-cursor attribute first
  const explicit = el.closest("[data-cursor]");
  if (explicit) {
    const val = explicit.getAttribute("data-cursor") as CursorVariant;
    if (val in CURSOR_STYLES) return val;
  }

  // Check for data-cursor-image (existing behavior)
  if (el.closest("[data-cursor-image]")) return "image";

  // Auto-detect: links and buttons
  if (el.closest("a, button")) return "link";

  // Auto-detect: readable text content in sections
  if (el.closest("p, h1, h2, h3, h4, h5, h6, blockquote, li")) {
    // Only within main content sections, not nav/footer chrome
    if (el.closest("section, [role='main'], main")) return "text";
  }

  return null;
}

export function CustomCursor() {
  const isDesktop = useSyncExternalStore(subscribe, getIsDesktop, () => false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.2 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.2 });
  const containerRef = useRef<HTMLDivElement>(null);
  const dotElRef = useRef<HTMLDivElement>(null);
  const imageElRef = useRef<HTMLImageElement>(null);
  const currentVariant = useRef<CursorVariant>("default");

  const applyVariant = useCallback((variant: CursorVariant, imageUrl?: string) => {
    if (variant === currentVariant.current && variant !== "image") return;
    currentVariant.current = variant;

    const container = containerRef.current;
    const dot = dotElRef.current;
    const img = imageElRef.current;
    if (!container || !dot || !img) return;

    const style = CURSOR_STYLES[variant];

    if (variant === "image" && imageUrl) {
      img.src = imageUrl;
      img.style.display = "block";
      dot.style.display = "none";
      container.style.width = "300px";
      container.style.height = "180px";
      container.style.borderRadius = "8px";
      container.style.opacity = "1";
      container.style.mixBlendMode = "normal";
      return;
    }

    img.style.display = "none";
    dot.style.display = "block";
    container.style.width = `${style.size}px`;
    container.style.height = `${style.size}px`;
    container.style.borderRadius = `${style.borderRadius}px`;
    container.style.opacity = String(style.opacity);
    container.style.mixBlendMode = style.blend;
    dot.style.border = style.border;
    dot.style.background = style.bg;
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    document.body.style.cursor = "none";

    function onMouseMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const variant = getCursorVariant(target);

      if (variant === "image") {
        const imageEl = target.closest("[data-cursor-image]");
        const imageUrl = imageEl?.getAttribute("data-cursor-image") || "";
        applyVariant("image", imageUrl);
      } else {
        applyVariant(variant || "default");
      }
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [isDesktop, cursorX, cursorY, applyVariant]);

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
          className="h-full w-full rounded-full"
          style={{
            border: "2px solid rgba(224,141,160,0.6)",
            background: "rgba(224,141,160,0.1)",
          }}
        />
      </div>
    </motion.div>
  );
}
