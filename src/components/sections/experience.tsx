"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import type { Experience as ExperienceType } from "@/lib/types";
import { Briefcase, MapPin } from "lucide-react";

export function Experience({ experiences }: { experiences: ExperienceType[] }) {
  return (
    <Section
      id="experience"
      offscreen
      pattern={<GridPattern cellSize={48} strokeWidth={0.7} />}
      tintClassName="bg-gradient-to-b from-surface/40 via-transparent to-surface/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          number="02"
          label="experience"
          heading={
            <>
              Where I&apos;ve
              <br />
              been building
            </>
          }
        />
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-12 max-w-6xl px-6">
        {/* Vertical line */}
        <div className="absolute left-[calc(50%-0.5px)] top-0 bottom-0 hidden w-px bg-gradient-to-b from-pink-300 via-pink-200 to-transparent lg:block" />

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <BlurFade key={`${exp.company}-${exp.role}`} delay={0.3 + i * 0.15}>
              <div
                className={cn(
                  "group relative lg:w-[calc(50%-1.5rem)]",
                  i % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto",
                )}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute top-4 hidden h-[15px] w-[15px] items-center justify-center lg:flex",
                    i % 2 === 0 ? "-right-[1.97rem]" : "-left-[1.97rem]",
                  )}
                >
                  <div className="h-[15px] w-[15px] rounded-full border-2 border-pink-300 bg-white transition-colors group-hover:border-pink-400 group-hover:bg-pink-50" />
                  <div className="absolute h-2 w-2 rounded-full bg-pink-400 transition-transform group-hover:scale-125" />
                </div>

                {/* Period label on opposite side */}
                <span
                  className={cn(
                    "absolute top-4 hidden whitespace-nowrap font-mono text-[11px] text-text-muted lg:block",
                    i % 2 === 0
                      ? "left-[calc(100%+3rem)]"
                      : "right-[calc(100%+3rem)]",
                  )}
                >
                  {exp.period}
                </span>

                {/* Card */}
                <div className="relative rounded-xl border border-border/40 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:border-pink-200/80 hover:shadow-[0_8px_30px_rgba(224,141,160,0.1)]">
                  {/* Soft glow on outer edge */}
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-y-0 w-24 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
                      i % 2 === 0
                        ? "left-0 -translate-x-1/2 bg-gradient-to-r from-pink-300/30 to-transparent"
                        : "right-0 translate-x-1/2 bg-gradient-to-l from-pink-300/30 to-transparent lg:right-0 lg:translate-x-1/2",
                    )}
                  />

                  <div className="px-4 py-3.5">
                    <h3 className="font-display text-sm font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    {/* Period inside card on mobile only */}
                    <span className="mt-0.5 block font-mono text-[11px] text-text-muted lg:hidden">
                      {exp.period}
                    </span>

                    <div className="mt-1 flex items-center gap-2">
                      <Briefcase className="h-3 w-3 text-pink-400" />
                      <span className="text-xs font-medium text-pink-500">
                        {exp.company}
                      </span>
                      <span className="rounded-full bg-pink-50 px-1.5 py-0.5 text-[10px] font-medium text-pink-400">
                        {exp.type}
                      </span>
                      {exp.location && (
                        <>
                          <span className="text-border">·</span>
                          <span className="flex items-center gap-0.5 text-[11px] text-text-muted">
                            <MapPin className="h-2.5 w-2.5" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>

                    {exp.description && (
                      <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                        {exp.description}
                      </p>
                    )}

                    <div className="mt-2 flex flex-wrap gap-1">
                      {exp.skills.map((skill) => (
                        <Tag key={skill}>{skill}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </Section>
  );
}
