"use client";

import { Volume2, VolumeOff } from "lucide-react";
import { useSoundContext } from "@/contexts/sound-context";
import { useSoundEffect } from "@/hooks/use-sound-effect";
import { cn } from "@/lib/utils";

export function SoundToggle() {
  const { soundEnabled, toggleSound } = useSoundContext();
  const [playSwitchOn] = useSoundEffect("/sounds/switch-on.wav", {
    volume: 0.4,
    forceSoundEnabled: true,
  });
  const [playSwitchOff] = useSoundEffect("/sounds/switch-off.wav", {
    volume: 0.4,
    forceSoundEnabled: true,
  });

  return (
    <button
      onClick={() => {
        if (soundEnabled) {
          playSwitchOff();
        } else {
          playSwitchOn();
        }
        toggleSound();
      }}
      aria-label={soundEnabled ? "Mute sounds" : "Enable sounds"}
      className={cn(
        "fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 lg:bottom-10 lg:right-10",
        soundEnabled
          ? "border-pink-200 bg-white/80 text-pink-500 shadow-[0_2px_12px_rgba(224,141,160,0.2)] hover:shadow-[0_4px_20px_rgba(224,141,160,0.3)]"
          : "border-border/60 bg-white/60 text-text-muted shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-border hover:text-text-secondary",
      )}
    >
      {soundEnabled ? (
        <Volume2 className="h-4 w-4" />
      ) : (
        <VolumeOff className="h-4 w-4" />
      )}
    </button>
  );
}
