"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Howl } from "howler";
import { useSoundContext } from "@/contexts/sound-context";

export interface MusicTrack {
  url: string;
  title: string;
}

export interface MusicConfig {
  enabled: boolean;
  autoplay: boolean;
  volume: number;
  tracks: MusicTrack[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function useMusicPlayer(config: MusicConfig) {
  const { soundEnabled } = useSoundContext();
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const howlRef = useRef<Howl | null>(null);
  const shuffledRef = useRef<MusicTrack[]>(shuffleArray(config.tracks));
  const userWantsPlayRef = useRef(config.autoplay);

  const currentTrack = shuffledRef.current[trackIndex];
  const trackName = currentTrack?.title ?? "";

  const playNext = useCallback(() => {
    setTrackIndex((prev) => {
      const next = prev + 1;
      if (next >= shuffledRef.current.length) {
        shuffledRef.current = shuffleArray(config.tracks);
        return 0;
      }
      return next;
    });
  }, [config.tracks]);

  // Create / swap Howl when track changes
  useEffect(() => {
    if (!currentTrack) return;

    // Clean up previous instance
    if (howlRef.current) {
      howlRef.current.unload();
    }

    const howl = new Howl({
      src: [currentTrack.url],
      volume: config.volume,
      html5: true,
      onend: () => playNext(),
    });

    howlRef.current = howl;

    // Auto-play if user had pressed play
    if (userWantsPlayRef.current && soundEnabled) {
      howl.play();
      setIsPlaying(true);
    }

    return () => {
      howl.unload();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex, currentTrack, playNext]);

  // Pause / resume when sound toggle changes
  useEffect(() => {
    const howl = howlRef.current;
    if (!howl) return;

    if (!soundEnabled) {
      howl.pause();
      setIsPlaying(false);
    } else if (userWantsPlayRef.current) {
      howl.play();
      setIsPlaying(true);
    }
  }, [soundEnabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      howlRef.current?.unload();
    };
  }, []);

  const toggle = useCallback(() => {
    const howl = howlRef.current;
    if (!howl) return;

    if (isPlaying) {
      howl.pause();
      setIsPlaying(false);
      userWantsPlayRef.current = false;
    } else {
      howl.play();
      setIsPlaying(true);
      userWantsPlayRef.current = true;
    }
  }, [isPlaying]);

  const next = useCallback(() => {
    userWantsPlayRef.current = true;
    howlRef.current?.stop();
    playNext();
  }, [playNext]);

  return { isPlaying, trackName, toggle, next };
}
