"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dock } from "@/components/ui/dock";
import { SocialIcon } from "@/components/ui/social-icon";
import { useSoundEffect } from "@/hooks/use-sound-effect";
import type { SocialLink } from "@/lib/types";

export function FixedSocialDock({ links }: { links: SocialLink[] }) {
  const [visible, setVisible] = useState(false);
  const [playTick] = useSoundEffect("/sounds/tap-dock.wav", { volume: 0.7 });
  const [playSelect] = useSoundEffect("/sounds/select.wav", { volume: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      setVisible(rect.bottom < window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-10 left-10 z-40 hidden lg:block"
        >
          <Dock
            direction="vertical"
            magnification={42}
            distance={80}
            onIconHover={playTick}
          >
            {links.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                onClick={() => playSelect()}
                className="flex h-full w-full items-center justify-center rounded-full text-text-muted transition-colors hover:text-pink-500"
              >
                <SocialIcon name={link.icon} size={18} />
              </a>
            ))}
          </Dock>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
