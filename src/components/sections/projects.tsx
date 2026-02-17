"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Spotlight } from "@/components/ui/spotlight";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { useSoundEffect } from "@/hooks/use-sound-effect";
import type { Project } from "@/lib/types";
import { ExternalLink } from "lucide-react";

function ProjectCard({
  title,
  description,
  tech,
  url,
  image,
  index,
  onHover,
}: {
  title: string;
  description: string;
  tech: string[];
  url: string;
  image: string;
  index: number;
  onHover?: () => void;
}) {
  return (
    <BlurFade delay={0.1 + index * 0.1}>
      <Spotlight className="h-full rounded-2xl">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={onHover ? () => onHover() : undefined}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-white to-surface/30 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-card-hover"
        >
          {/* Image */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-surface/50 to-accent-lavender/10">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-base font-semibold leading-snug text-text-primary transition-colors group-hover:text-pink-500">
                {title}
              </h3>
              <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink-400" />
            </div>

            <p className="text-sm leading-relaxed text-text-muted">
              {description}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </a>
      </Spotlight>
    </BlurFade>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const [playHover] = useSoundEffect("/sounds/hover-card.wav", { volume: 0.3 });

  return (
    <Section
      id="projects"
      offscreen
      pattern={<GridPattern cellSize={72} strokeWidth={0.6} />}
      tintClassName="bg-gradient-to-b from-surface/40 via-transparent to-surface/40"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          number="04"
          label="projects"
          heading={
            <>
              Things I&apos;ve
              <br />
              built &amp; shipped
            </>
          }
        />

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              url={project.url}
              image={project.image}
              index={i}
              onHover={playHover}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
