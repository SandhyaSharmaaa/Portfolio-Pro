"use client";

import { cn } from "@/lib/utils";
import { useSoundEffect } from "@/hooks/use-sound-effect";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShimmerButton({
  shimmerColor = "rgba(224, 141, 160, 0.3)",
  shimmerSize = "0.1em",
  borderRadius = "100px",
  shimmerDuration = "2s",
  background = "linear-gradient(135deg, #E08DA0, #C96B82)",
  children,
  className,
  onClick,
  ...props
}: ShimmerButtonProps) {
  const [playPop] = useSoundEffect("/sounds/pop.wav", { volume: 0.5 });

  return (
    <button
      onClick={(e) => {
        playPop();
        onClick?.(e);
      }}
      style={
        {
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white",
        "[background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        "rounded-full",
        className,
      )}
      {...props}
    >
      {/* Shimmer overlay */}
      <div
        className={cn(
          "absolute inset-0 overflow-hidden rounded-full",
          "before:absolute before:inset-[-100%] before:animate-[shimmer_var(--speed)_ease-in-out_infinite]",
          "before:bg-[linear-gradient(90deg,transparent_30%,var(--shimmer-color)_50%,transparent_70%)]",
        )}
      />
      <span className="relative z-10 flex items-center gap-2 font-medium">
        {children}
      </span>
    </button>
  );
}
