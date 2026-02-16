"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { NumberTicker } from "@/components/ui/number-ticker";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Section } from "@/components/ui/section";
import type { AboutProps } from "@/lib/types";
import {
  Heart,
  Coffee,
  Headphones,
  Sparkles,
  Terminal,
  Palette,
  Rocket,
  ShoppingBag,
  Music,
  Code,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Heart,
  Coffee,
  Sparkles,
  ShoppingBag,
  Music,
  Code,
  Zap,
  Terminal,
  Rocket,
  Headphones,
};

export function About({
  heading,
  paragraph1,
  paragraph2,
  stats,
  statusText,
  statusSubtext,
  roleLabel,
  codeSnippet,
  currently,
  vibes,
  personalityPills,
}: AboutProps) {
  const headingLines = heading.split("\n");

  return (
    <Section
      id="about"
      pattern={<DotPattern dotSize={1.4} />}
      tintClassName="bg-gradient-to-b from-surface/40 via-transparent to-surface/20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: Text */}
        <div className="flex flex-col gap-8">
          <BlurFade delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-widest text-pink-400">
              01 &mdash;&mdash; about
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight tracking-[-0.02em] text-text-primary">
              {headingLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
          </BlurFade>

          <div className="flex flex-col gap-4">
            <BoxReveal delay={0.3} duration={0.5}>
              <p className="text-base leading-relaxed text-text-secondary">
                {paragraph1}
              </p>
            </BoxReveal>

            <BoxReveal delay={0.5} duration={0.5}>
              <p className="text-base leading-relaxed text-text-secondary">
                {paragraph2}
              </p>
            </BoxReveal>
          </div>

          {/* Stats */}
          <BlurFade delay={0.7}>
            <div className="flex gap-6 pt-4 sm:gap-8">
              {stats.map((stat) => {
                const numericValue = parseInt(stat.value, 10);
                const isNumeric = !isNaN(numericValue);
                const hasSuffix = stat.value.includes("+");

                return (
                  <div key={stat.label} className="flex flex-col">
                    {isNumeric ? (
                      <NumberTicker
                        value={numericValue}
                        suffix={hasSuffix ? "+" : ""}
                        className="text-3xl font-bold text-pink-400"
                      />
                    ) : (
                      <span className="font-mono text-3xl font-bold text-pink-400">
                        {stat.value === "Infinity" ? <>&infin;</> : stat.value}
                      </span>
                    )}
                    <span className="text-sm text-text-muted">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </BlurFade>
        </div>

        {/* Right: Creative mini-bento card */}
        <BlurFade delay={0.4}>
          <div className="relative -mt-4 lg:mt-8">
            <div className="grid grid-cols-2 gap-3">
              {/* Status */}
              <BentoCell className="col-span-2" delay={0}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                      <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-emerald-600">{statusText}</p>
                      <p className="text-[11px] text-text-muted">{statusSubtext}</p>
                    </div>
                  </div>
                  <div className="hidden items-center gap-1 text-xs text-text-muted sm:flex">
                    <Terminal className="h-3 w-3" />
                    {roleLabel}
                  </div>
                </div>
              </BentoCell>

              {/* Code snippet */}
              <BentoCell className="col-span-2" delay={0.1}>
                <div className="flex items-center gap-2 pb-2">
                  <Terminal className="h-3.5 w-3.5 text-pink-400" />
                  <span className="text-[11px] font-medium text-text-muted">~/sandhya</span>
                  <div className="ml-auto flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-pink-200" />
                    <div className="h-2 w-2 rounded-full bg-accent-peach/60" />
                    <div className="h-2 w-2 rounded-full bg-emerald-200" />
                  </div>
                </div>
                <pre className="font-mono text-[11px] leading-relaxed text-text-secondary">
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-text-primary">sandhya</span> = {`{`}
                  {"\n"}  role:{" "}
                  <span className="text-emerald-500">&quot;{codeSnippet.role}&quot;</span>,
                  {"\n"}  fuel:{" "}
                  <span className="text-emerald-500">&quot;{codeSnippet.fuel}&quot;</span>,
                  {"\n"}  motto:{" "}
                  <span className="text-emerald-500">&quot;{codeSnippet.motto}&quot;</span>
                  {"\n"}{`}`};
                </pre>
              </BentoCell>

              {/* Currently */}
              <BentoCell delay={0.2}>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <Rocket className="h-3.5 w-3.5 text-pink-400" />
                    <span className="text-[11px] font-medium text-text-muted">Currently</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {currently.map((item, i) => (
                      <span key={i} className="text-xs text-text-secondary">
                        {item.text} <span className="font-medium text-pink-500">{item.highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCell>

              {/* Vibes */}
              <BentoCell delay={0.25}>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <Headphones className="h-3.5 w-3.5 text-pink-400" />
                    <span className="text-[11px] font-medium text-text-muted">Vibes</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {vibes.map((vibe, i) => (
                      <span key={i} className="text-xs text-text-secondary">
                        {vibe}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoCell>

              {/* Personality pills */}
              <BentoCell className="col-span-2" delay={0.3}>
                <div className="flex flex-wrap gap-2">
                  {personalityPills.map((pill) => {
                    const Icon = iconMap[pill.icon] || Sparkles;
                    return (
                      <span
                        key={pill.label}
                        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${pill.color}`}
                      >
                        <Icon className="h-3 w-3" />
                        {pill.label}
                      </span>
                    );
                  })}
                </div>
              </BentoCell>
            </div>

            {/* Glow behind bento */}
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(45,42,46,0.04),transparent_70%)] sm:-inset-6" />
          </div>
        </BlurFade>
      </div>
    </Section>
  );
}

function BentoCell({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`group rounded-xl border border-border/60 bg-gradient-to-br from-white/90 to-surface/40 p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-300 hover:border-pink-200/60 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
