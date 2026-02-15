"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Home } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const Particles = dynamic(
  () =>
    import("@/components/ui/particles").then((m) => ({
      default: m.Particles,
    })),
  { ssr: false },
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
} as const;

const numberVariants = {
  hidden: { scale: 0.8, opacity: 0, filter: "blur(12px)" },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
} as const;

export function NotFoundScene() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Mesh gradients — same as hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_40%,rgba(255,234,237,0.25),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_70%,rgba(230,217,240,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_70%_60%,rgba(245,220,200,0.1),transparent_50%)]" />

      {/* Particles */}
      <Particles quantity={12} color="#F4B0BD" size={2} speed={0.2} />

      {/* Content */}
      <motion.div
        className="relative z-10 flex max-w-lg flex-col items-center px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Comment tag */}
        <motion.span
          className="mb-4 font-mono text-sm text-pink-400"
          variants={itemVariants}
        >
          {"// page not found"}
        </motion.span>

        {/* 404 number */}
        <motion.h1
          className="mb-2 animate-[float_4s_ease-in-out_infinite] bg-gradient-to-br from-pink-400 to-pink-500 bg-clip-text font-display text-[clamp(5rem,20vw,10rem)] font-bold leading-none text-transparent"
          variants={numberVariants}
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          className="mb-3 font-display text-xl font-semibold text-text-primary sm:text-2xl"
          variants={itemVariants}
        >
          Oops! This page wandered off
        </motion.h2>

        {/* Description */}
        <motion.p className="mb-8 text-sm text-text-muted sm:text-base" variants={itemVariants}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link href="/">
            <ShimmerButton>
              <Home className="h-4 w-4" />
              Take Me Home
            </ShimmerButton>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
