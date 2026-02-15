"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "petal-loaded";

export function useLoading() {
  // Default to true so the overlay renders on first paint (SSR + hydration).
  // useEffect then dismisses immediately on return visits or reduced-motion.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setIsLoading(false);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsLoading(false);
      return;
    }
  }, []);

  const onComplete = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setIsLoading(false);
  }, []);

  return { isLoading, onComplete };
}
