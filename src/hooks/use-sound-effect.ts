"use client";

import useSound from "use-sound";
import { useSoundContext } from "@/contexts/sound-context";

interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  forceSoundEnabled?: boolean;
}

export function useSoundEffect(url: string, options?: SoundOptions) {
  const { soundEnabled } = useSoundContext();
  const { forceSoundEnabled, ...rest } = options ?? {};

  return useSound(url, {
    ...rest,
    soundEnabled: forceSoundEnabled ? true : soundEnabled,
  });
}
