"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { heroSequence } from "@/lib/animations";
import { siteConfig, socialLinks } from "@/lib/constants";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TextGenerate } from "@/components/ui/text-generate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Dock } from "@/components/ui/dock";
import { Ripple } from "@/components/ui/ripple";
import { SocialIcon } from "@/components/ui/social-icon";
import { ArrowDown, ExternalLink } from "lucide-react";

const Particles = dynamic(
  () => import("@/components/ui/particles").then((m) => m.Particles),
  { ssr: false },
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background: mesh gradient + particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_40%,rgba(255,234,237,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_70%,rgba(230,217,240,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_70%_60%,rgba(245,220,200,0.1),transparent_50%)]" />
        <Particles quantity={18} color="#F4B0BD" size={2} speed={0.2} />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: Text content */}
        <div className="flex flex-col gap-5">
          <motion.p
            variants={heroSequence.greeting}
            initial="hidden"
            animate="visible"
            className="font-mono text-sm text-pink-400"
          >
            {"// hello world"}
          </motion.p>

          <motion.div
            variants={heroSequence.name}
            initial="hidden"
            animate="visible"
          >
            <SparklesText
              className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary"
              sparklesCount={12}
            >
              {siteConfig.name}
            </SparklesText>
          </motion.div>

          <motion.div
            variants={heroSequence.title}
            initial="hidden"
            animate="visible"
          >
            <TextGenerate
              words={siteConfig.title}
              className="font-display text-xl font-medium text-text-secondary sm:text-2xl"
              delay={0.7}
              duration={0.4}
            />
          </motion.div>

          <motion.p
            variants={heroSequence.description}
            initial="hidden"
            animate="visible"
            className="max-w-md text-base leading-relaxed text-text-muted"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={heroSequence.cta}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <ShimmerButton
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </ShimmerButton>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border-pink px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-pink-400 hover:text-pink-500"
            >
              Resume
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Right: Avatar — bigger, with ripple + orbiting elements */}
        <motion.div
          variants={heroSequence.avatar}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Ripple rings behind avatar */}
            <Ripple
              count={4}
              color="rgba(224, 141, 160, 0.1)"
              className="absolute -inset-8 sm:-inset-16"
            />

            {/* Orbiting decorative dots — hidden on small mobile, scaled on tablet */}
            <div className="absolute inset-0 hidden items-center justify-center sm:flex">
              <div
                className="absolute h-3 w-3 rounded-full bg-pink-300/60 shadow-[0_0_8px_rgba(224,141,160,0.35)] animate-[orbit_8s_linear_infinite]"
                style={{ "--orbit-radius": "clamp(100px, 18vw, 160px)" } as React.CSSProperties}
              />
              <div
                className="absolute h-2 w-2 rounded-full bg-accent-lavender/80 shadow-[0_0_6px_rgba(230,217,240,0.4)] animate-[orbit_12s_linear_infinite_reverse]"
                style={{ "--orbit-radius": "clamp(90px, 16vw, 140px)" } as React.CSSProperties}
              />
              <div
                className="absolute h-1.5 w-1.5 rounded-full bg-accent-peach/70 animate-[orbit_10s_linear_infinite]"
                style={{ "--orbit-radius": "clamp(110px, 20vw, 180px)" } as React.CSSProperties}
              />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="relative h-[22rem] w-64 sm:h-[32rem] sm:w-[26rem]"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 88%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 88%, transparent 100%)",
                }}
              >
                <Image
                  src="/sandhya.svg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover object-top drop-shadow-[0_12px_40px_rgba(224,141,160,0.25)]"
                  priority
                />
              </div>
            </motion.div>

            {/* Multi-layer glow behind avatar */}
            <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(224,141,160,0.14)_0%,rgba(230,217,240,0.08)_35%,transparent_65%)] sm:-inset-16" />
            <div className="absolute -inset-4 -z-10 rounded-full bg-[radial-gradient(circle,rgba(255,245,243,0.35)_0%,transparent_60%)] sm:-inset-8" />
          </div>
        </motion.div>
      </div>

      {/* Bottom blend into About */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Bottom: Dock + Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-6">
        <motion.div
          variants={heroSequence.dock}
          initial="hidden"
          animate="visible"
        >
          <Dock magnification={50} distance={120}>
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-full w-full items-center justify-center rounded-full text-text-secondary transition-colors hover:text-pink-400"
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </Dock>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
