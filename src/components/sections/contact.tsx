"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SocialIcon } from "@/components/ui/social-icon";
import { siteConfig, socialLinks } from "@/lib/constants";
import { Mail, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contact"
      offscreen
      pattern={
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/20 to-accent-lavender/20" />
          <RetroGrid />
        </>
      }
      blendBottom={false}
    >
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <SectionHeader
          number="06"
          label="contact"
          centered
          heading={
            <>
              Let&apos;s create
              <br />
              something together
            </>
          }
        />

        <BlurFade delay={0.3}>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-text-muted">
            I&apos;m always open to new opportunities, collaborations, or just
            a friendly chat. Drop me a message and I&apos;ll get back to you!
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <ShimmerButton
              onClick={() =>
                window.open(`mailto:${siteConfig.email}`, "_self")
              }
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </ShimmerButton>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-pink-400"
            >
              {siteConfig.email}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.5}>
          <div className="mt-8 flex items-center justify-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-transparent text-text-muted transition-all duration-200 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-400 hover:-translate-y-0.5"
              >
                <SocialIcon name={link.icon} size={18} />
              </a>
            ))}
          </div>
        </BlurFade>
      </div>
    </Section>
  );
}
