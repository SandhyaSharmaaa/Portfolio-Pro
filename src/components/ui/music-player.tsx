"use client";

import { Music } from "lucide-react";
import { useMusicPlayer } from "@/hooks/use-music-player";
import type { MusicConfig } from "@/hooks/use-music-player";
import { useSoundContext } from "@/contexts/sound-context";
import { cn } from "@/lib/utils";

interface MusicPlayerProps {
  config: MusicConfig;
}

export function MusicPlayer({ config }: MusicPlayerProps) {
  const { soundEnabled } = useSoundContext();
  const { isPlaying, trackName, toggle } = useMusicPlayer(config);

  if (!config.enabled || !soundEnabled) return null;

  return (
    <button
      onClick={toggle}
      aria-label={isPlaying ? `Pause music: ${trackName}` : "Play music"}
      title={isPlaying ? `Now playing: ${trackName}` : "Play music"}
      className={cn(
        "fixed bottom-16 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 lg:bottom-[5.5rem] lg:right-10",
        isPlaying
          ? "border-pink-200 bg-white/80 text-pink-500 shadow-[0_2px_12px_rgba(224,141,160,0.2)] hover:shadow-[0_4px_20px_rgba(224,141,160,0.3)]"
          : "border-border/60 bg-white/60 text-text-muted shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-border hover:text-text-secondary",
      )}
    >
      <Music
        className={cn("h-4 w-4", isPlaying && "animate-pulse")}
      />
    </button>
  );
}
