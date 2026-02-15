"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import type { MediumArticle } from "@/lib/types";
import { ArrowUpRight, Calendar, Clock, ExternalLink } from "lucide-react";

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  // Medium articles are typically 3-8 min reads; estimate generously from the snippet
  const minutes = Math.max(3, Math.ceil(words / 40));
  return `${minutes} min read`;
}

/* ─── Featured Article: cinematic hero card ─── */

function FeaturedArticle({ article }: { article: MediumArticle }) {
  return (
    <BlurFade delay={0.15}>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-2xl border border-border/40"
      >
        {/* Thumbnail / gradient fallback */}
        <div className="relative aspect-[2/1] w-full overflow-hidden sm:aspect-[21/9]">
          {article.thumbnail ? (
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-pink-200 via-accent-lavender to-accent-peach" />
          )}

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A2E]/90 via-[#2D2A2E]/35 to-[#2D2A2E]/10" />

          {/* Subtle shimmer on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:p-8">
          {/* Tags */}
          {article.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.categories.slice(0, 3).map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-white/12 px-3 py-0.5 text-[11px] font-medium tracking-wide text-white/85 uppercase backdrop-blur-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="max-w-2xl font-display text-lg font-semibold leading-snug text-white sm:text-2xl lg:text-[1.75rem]">
            {article.title}
          </h3>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-white/55">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(article.pubDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {estimateReadTime(article.description)}
            </span>
            <span className="ml-auto flex items-center gap-1 text-white/70 transition-colors group-hover:text-white">
              Read article
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </a>
    </BlurFade>
  );
}

/* ─── Article Row: editorial index entry ─── */

function ArticleRow({
  article,
  index,
}: {
  article: MediumArticle;
  index: number;
}) {
  return (
    <BlurFade delay={0.2 + index * 0.07}>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-start gap-4 border-b border-border/50 px-2 py-5 transition-colors last:border-b-0 hover:bg-pink-50/40 sm:gap-6 sm:px-4"
      >
        {/* Accent line — fills pink on hover */}
        <div className="relative hidden w-[3px] shrink-0 self-stretch rounded-full sm:block">
          <div className="absolute inset-0 rounded-full bg-border" />
          <div className="absolute inset-0 origin-top scale-y-0 rounded-full bg-pink-400 transition-transform duration-300 group-hover:scale-y-100" />
        </div>

        {/* Date column */}
        <div className="hidden w-24 shrink-0 pt-0.5 sm:block">
          <span className="font-mono text-xs tracking-tight text-text-muted">
            {formatDate(article.pubDate)}
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[15px] font-semibold leading-snug text-text-primary transition-colors group-hover:text-pink-500">
            {article.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-text-muted">
            {article.description}
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="font-mono text-[11px] text-text-muted sm:hidden">
              {formatDate(article.pubDate)}
            </span>
            {article.categories.slice(0, 2).map((cat) => (
              <Tag key={cat} className="!text-[10px] !px-2 !py-0">
                {cat}
              </Tag>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-text-muted/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink-400" />
      </a>
    </BlurFade>
  );
}

/* ─── Blog Section ─── */

export function Blog({ articles }: { articles: MediumArticle[] }) {
  if (articles.length === 0) return null;

  const [featured, ...rest] = articles;

  return (
    <Section id="blog" offscreen>
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          number="05"
          label="blog"
          heading={
            <>
              Words &amp; thoughts
              <br />I write about
            </>
          }
        />

        {/* Featured article — cinematic hero */}
        <div className="mt-12">
          <FeaturedArticle article={featured} />
        </div>

        {/* Article index — editorial list */}
        {rest.length > 0 && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-border/50 bg-white/60 backdrop-blur-sm">
            {rest.map((article, i) => (
              <ArticleRow key={article.link} article={article} index={i} />
            ))}
          </div>
        )}

        {/* View all CTA */}
        <BlurFade delay={0.45}>
          <div className="mt-8 text-center">
            <a
              href="https://medium.com/@sandhyaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/80 px-6 py-2.5 text-sm font-medium text-text-secondary shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-pink-200 hover:bg-white hover:text-pink-500 hover:shadow-soft-hover"
            >
              View all articles on Medium
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </BlurFade>
      </div>
    </Section>
  );
}
