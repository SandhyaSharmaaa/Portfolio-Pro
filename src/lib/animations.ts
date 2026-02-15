import type { Variants } from "motion/react";

export const gentleEase = [0.25, 0.46, 0.45, 0.94] as const;
export const powerEase = [0.76, 0, 0.24, 1] as const;
export const springBounce = [0.34, 1.56, 0.64, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [...gentleEase] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [...gentleEase] },
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [...gentleEase] },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const revealText: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [...powerEase] },
  },
};

export const heroSequence = {
  avatar: {
    hidden: { scale: 0.8, opacity: 0, y: -30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    },
  },
  greeting: {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [...gentleEase], delay: 0.3 },
    },
  },
  name: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [...powerEase], delay: 0.4 },
    },
  },
  title: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: 0.7 },
    },
  },
  description: {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, delay: 1.0 },
    },
  },
  cta: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [...gentleEase], delay: 1.2 },
    },
  },
  dock: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [...gentleEase], delay: 1.5 },
    },
  },
} satisfies Record<string, Variants>;

export const loadingSequence = {
  icon: {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [...springBounce] },
    },
  },
  name: {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration: 0.6, ease: [...powerEase], delay: 0.4 },
    },
  },
  subtitle: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: 0.8 },
    },
  },
  overlay: {
    exit: {
      y: "-100%",
      transition: { duration: 0.8, ease: [...powerEase] },
    },
  },
} satisfies Record<string, Variants>;

export const notFoundSequence = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [...gentleEase] },
    },
  },
  number: {
    hidden: { scale: 0.8, opacity: 0, filter: "blur(12px)" },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [...springBounce] },
    },
  },
} satisfies Record<string, Variants>;
