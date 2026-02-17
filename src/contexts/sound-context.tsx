"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface SoundContextValue {
  soundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextValue>({
  soundEnabled: true,
  toggleSound: () => {},
});

const STORAGE_KEY = "sound-enabled";

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Read persisted preference, or default based on motion preference
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setSoundEnabled(stored === "true");
    } else if (prefersReduced) {
      setSoundEnabled(false);
    }

    setHydrated(true);
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  // Avoid flash — render children immediately but with correct default
  const value: SoundContextValue = {
    soundEnabled: hydrated ? soundEnabled : false,
    toggleSound,
  };

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSoundContext() {
  return useContext(SoundContext);
}
