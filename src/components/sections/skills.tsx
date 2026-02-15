"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { skills } from "@/lib/constants";

const row1 = skills
  .filter((s) => s.category === "Frontend" || s.category === "UI/UX")
  .flatMap((s) => s.tools);

const row2 = skills
  .filter((s) => s.category === "Backend" || s.category === "Languages")
  .flatMap((s) => s.tools);

const row3 = skills
  .filter(
    (s) => s.category === "DevOps & Tools" || s.category === "AI & Agents",
  )
  .flatMap((s) => s.tools);

function SkillPill({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-gradient-to-br from-white to-surface/60 px-5 py-2.5 text-sm font-medium text-text-primary shadow-soft backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-soft-hover">
      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-pink-100/60">
        <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
      </span>
      {name}
    </span>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      offscreen
      pattern={<DotPattern gapX={32} gapY={32} dotSize={0.8} />}
      tintClassName="bg-gradient-to-b from-surface/50 via-surface/20 to-surface/40"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          number="03"
          label="skills"
          heading={
            <>
              Tools I love
              <br />
              working with
            </>
          }
        />

        {/* Category labels */}
        <BlurFade delay={0.25}>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s.category}
                className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-pink-400 shadow-sm ring-1 ring-border/60"
              >
                {s.category}
              </span>
            ))}
          </div>
        </BlurFade>
      </div>

      {/* Marquee rows */}
      <div className="relative mt-10 flex flex-col gap-4">
        <BlurFade delay={0.3}>
          <Marquee speed={35} pauseOnHover>
            {row1.map((tool) => (
              <SkillPill key={tool} name={tool} />
            ))}
          </Marquee>
        </BlurFade>

        <BlurFade delay={0.4}>
          <Marquee speed={30} reverse pauseOnHover>
            {row2.map((tool) => (
              <SkillPill key={tool} name={tool} />
            ))}
          </Marquee>
        </BlurFade>

        <BlurFade delay={0.5}>
          <Marquee speed={38} pauseOnHover>
            {row3.map((tool) => (
              <SkillPill key={tool} name={tool} />
            ))}
          </Marquee>
        </BlurFade>
      </div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent sm:w-32" />
    </Section>
  );
}
