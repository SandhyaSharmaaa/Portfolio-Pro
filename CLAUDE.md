# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `pnpm dev` (uses Turbopack)
- **Build:** `pnpm build`
- **Start production:** `pnpm start`
- **Lint:** `pnpm lint`

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Package manager:** pnpm
- **React:** v19
- **Fonts:** Geist Sans + Geist Mono (via `next/font/google`)

## Project Structure

```
src/
  app/            # Next.js App Router — routes, layouts, API routes
    api/          # API route handlers
  components/     # React components
    ui/           # Reusable UI primitives
  hooks/          # Custom React hooks
  lib/            # Utility functions and shared logic
    utils.ts      # cn() helper (clsx + tailwind-merge)
  styles/         # Global CSS
    globals.css   # Tailwind import + CSS custom properties
  types/          # TypeScript type definitions
```

## Key Conventions

- **Path alias:** `@/*` maps to `./src/*` — always use `@/` imports
- **CSS:** Tailwind v4 uses `@import "tailwindcss"` syntax (no `@tailwind` directives). Theme customization via `@theme inline` block in `globals.css`
- **Class merging:** Use `cn()` from `@/lib/utils` to merge Tailwind classes (handles conflicts via `tailwind-merge`)
- **Components:** Prefer Server Components by default; add `"use client"` only when needed for interactivity
- **ESLint:** Configured with `eslint-config-next` (core-web-vitals + TypeScript rules)

## Agent Skills

Vercel agent skills are installed in `.agents/skills/`:
- **vercel-composition-patterns** — Component composition patterns (compound components, no boolean props, lift state)
- **vercel-react-best-practices** — React performance patterns (rendering, re-renders, async, bundling, server/client)
- **web-design-guidelines** — UI/UX review against Web Interface Guidelines
