# Sandhya Sharma — Portfolio Execution Plan

> Cute, minimal, aesthetic, clean, modern, animated, stylish & attractive
> Pink + white mode theme | Pastel palette | Smooth animations
> *Refined with frontend-design skill guidelines*

---

## 1. Design System & Style Guide

### Design Philosophy: **"Petal" — Soft Precision with Character**
Not just "minimal with pink." This is a portfolio that feels like opening a beautifully designed stationery box — every detail is considered, nothing is default. The aesthetic is **refined softness**: generous negative space punctuated by bold typographic moments, layered pink-tinted atmospheres, and one unforgettable hero sequence. Cute through craft, not decoration.

**The Memorable Thing:** The hero section — a choreographed 2-second entrance sequence where the avatar floats in, the name reveals letter-by-letter with sparkles trailing each character, and a soft pink particle field responds to the cursor. This single moment sets the tone for the entire site.

**What makes it NOT generic AI slop:**
- Distinctive display font (not Inter/Roboto/system)
- Atmospheric backgrounds with grain texture + mesh gradients (not flat white)
- Asymmetric layouts with intentional overlap and grid-breaking moments
- One orchestrated hero animation > scattered micro-interactions
- Pink-tinted shadows and glows that create depth, not flatness

### Color Palette

```
Primary Pink:      #F472B6  (pink-400 — main accent, CTAs, active states)
Pink Light:        #FBCFE8  (pink-200 — hover backgrounds, tags, badges)
Pink Muted:        #FCE7F3  (pink-100 — section backgrounds, cards)
Pink Wash:         #FDF2F8  (pink-50  — page background tint)
Blush:             #FFF1F2  (rose-50  — alternate section bg)

White:             #FFFFFF  (primary background)
Off-White:         #FEFEFE  (card backgrounds)

Text Primary:      #1F2937  (gray-800 — headings)
Text Secondary:    #6B7280  (gray-500 — body text, descriptions)
Text Muted:        #9CA3AF  (gray-400 — captions, metadata)

Border:            #F3F4F6  (gray-100 — subtle dividers)
Border Pink:       #FBCFE8  (pink-200 — accent borders)

Accent Lavender:   #E9D5FF  (purple-200 — secondary accent for variety)
Accent Peach:      #FED7AA  (orange-200 — tertiary warm accent)
Accent Sky:        #BAE6FD  (sky-200 — cool complement)
```

### Typography — Distinctive, Not Generic

> **Rule:** Inter, Roboto, Arial, and system fonts are banned. Every font choice must have character.

**Display Font: `Outfit`** (weight 600–700) — A geometric sans-serif with soft, rounded edges and a warm personality. More characterful than Sora, with slightly quirky letter proportions that feel designed, not defaulted. Used for the hero name, section headings, and nav.

**Body Font: `DM Sans`** (weight 400–500) — A low-contrast geometric sans that pairs beautifully with Outfit. Slightly wider than Inter with more warmth in its curves. Excellent screen readability without feeling "stock." Used for paragraphs, descriptions, and UI text.

**Mono Font: `Geist Mono`** (already configured) — For code snippets, tech labels, and stat numbers.

```tsx
// Font setup in layout.tsx
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
```

**Type Scale (with intention):**
```
Hero Name:     clamp(3rem, 8vw, 5rem) / 1.05 line-height / -0.03em tracking
Section Title: clamp(2rem, 4vw, 3rem) / 1.1  / -0.02em
Card Title:    1.25rem / 1.3 / -0.01em
Body:          1rem / 1.75 / 0
Small/Caption: 0.875rem / 1.5 / 0.01em
```

### Border Radius
- Small: `rounded-lg` (8px) — buttons, badges
- Medium: `rounded-xl` (12px) — cards, inputs
- Large: `rounded-2xl` (16px) — sections, hero elements
- Full: `rounded-full` — avatars, pills, floating elements

### Shadows (soft, pink-tinted)
```css
--shadow-sm: 0 1px 2px rgba(244, 114, 182, 0.05);
--shadow-md: 0 4px 12px rgba(244, 114, 182, 0.08);
--shadow-lg: 0 8px 30px rgba(244, 114, 182, 0.12);
--shadow-glow: 0 0 40px rgba(244, 114, 182, 0.15);
```

### Backgrounds & Atmosphere — NOT Flat White

> **Rule:** No section should be a plain solid white background. Create depth.

- **Hero:** Soft radial mesh gradient (pink-50 → white → lavender-50) + noise grain overlay (opacity 0.03) + sparse particles
- **About:** White base with a subtle `dot-pattern` (Magic UI) at opacity 0.4, pink-tinted
- **Skills:** Pink-50 wash with a soft gradient fade at edges
- **Projects:** Off-white (#FEFEFE) with subtle grid-pattern at opacity 0.3
- **Contact:** Soft gradient from pink-50 to lavender-50 + grain texture
- **Global grain overlay:** CSS `background-image: url("data:image/svg+xml,...")` noise at opacity 0.02–0.04 on `body`, adds tactile depth

### Animation Principles — Orchestrated, Not Scattered

> **Rule:** One well-choreographed hero entrance creates more delight than 20 random animations.

- **Hero entrance:** A single 2-second orchestrated sequence (see Section 4.2) — this is THE animation moment
- **Scroll reveals:** Simple `blur-fade` (opacity + blur + translateY) for all other sections — consistent, elegant, not distracting
- **Hover states:** Surprise and delight — cards that tilt, buttons that breathe, links that shimmer
- **Easing:** `[0.76, 0, 0.24, 1]` (smooth power curve) for hero reveals, `[0.25, 0.46, 0.45, 0.94]` for general
- **Duration:** 0.4–0.6s entrances, 0.2–0.3s interactions
- **Stagger:** 0.08–0.12s between sibling elements

---

## 2. Tech Stack & Libraries

### Core (already installed)
| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.1.6 | Framework |
| `react` / `react-dom` | 19.2.3 | UI library |
| `tailwindcss` | v4 | Styling |
| `clsx` + `tailwind-merge` | latest | Class merging (`cn()`) |

### To Install
| Package | Purpose | Install |
|---------|---------|---------|
| `motion` | Animations (scroll, entrance, hover, layout) | `pnpm add motion` |
| `lenis` | Smooth scroll | `pnpm add lenis` |
| `lucide-react` | Clean icon set (UI icons) | `pnpm add lucide-react` |
| `@icons-pack/react-simple-icons` | Brand/tech logos (React, TS, etc.) | `pnpm add @icons-pack/react-simple-icons` |

**One-liner:**
```bash
pnpm add motion lenis lucide-react @icons-pack/react-simple-icons
```

### UI Components (copy-paste from Magic UI / Aceternity UI)
These are NOT npm packages — they are individual components we'll copy and customize from:
- **Magic UI** (magicui.design) — blur-fade, marquee, dock, shimmer-button, border-beam, animated-beam, particles, bento-grid, number-ticker, sparkles-text, box-reveal, safari mockup
- **Aceternity UI** (ui.aceternity.com) — floating-navbar, spotlight, text-generate-effect, tracing-beam, animated-tooltip, focus-cards, timeline, infinite-moving-cards, wavy-background, lamp-effect

We will selectively pick components that fit the "soft minimalism" aesthetic and customize their colors to our pink palette.

---

## 3. Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, Lenis, metadata)
│   ├── page.tsx                # Home page (composes all sections)
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── navbar.tsx          # Floating navigation bar
│   │   └── footer.tsx          # Footer with social links
│   ├── sections/
│   │   ├── hero.tsx            # Hero section with avatar + intro
│   │   ├── about.tsx           # About section
│   │   ├── skills.tsx          # Skills/tech stack display
│   │   ├── projects.tsx        # Project showcase grid
│   │   └── contact.tsx         # Contact section + CTA
│   ├── ui/                     # Reusable UI primitives
│   │   ├── blur-fade.tsx       # Magic UI: fade-in from blur
│   │   ├── dock.tsx            # Magic UI: macOS-style dock
│   │   ├── marquee.tsx         # Magic UI: infinite scroll marquee
│   │   ├── number-ticker.tsx   # Magic UI: animated counter
│   │   ├── shimmer-button.tsx  # Magic UI: shimmering CTA button
│   │   ├── border-beam.tsx     # Magic UI: animated card border
│   │   ├── box-reveal.tsx      # Magic UI: box wipe reveal
│   │   ├── particles.tsx       # Magic UI: floating particles
│   │   ├── sparkles-text.tsx   # Magic UI: sparkle text effect
│   │   ├── bento-grid.tsx      # Magic UI: bento layout
│   │   ├── safari.tsx          # Magic UI: browser mockup
│   │   ├── floating-navbar.tsx # Aceternity: scroll-aware navbar
│   │   ├── spotlight.tsx       # Aceternity: mouse spotlight
│   │   ├── text-generate.tsx   # Aceternity: text generation effect
│   │   ├── focus-cards.tsx     # Aceternity: hover focus cards
│   │   ├── animated-tooltip.tsx # Aceternity: spring tooltips
│   │   └── infinite-cards.tsx  # Aceternity: infinite scroll cards
│   └── shared/
│       ├── section-heading.tsx # Reusable section title component
│       ├── smooth-scroll.tsx   # Lenis smooth scroll wrapper
│       ├── animated-section.tsx # Scroll-triggered animation wrapper
│       └── cursor-glow.tsx     # Subtle cursor glow effect
├── hooks/
│   └── use-active-section.ts   # Track active nav section
├── lib/
│   ├── utils.ts                # cn() helper (exists)
│   ├── constants.ts            # Site content data
│   ├── types.ts                # TypeScript interfaces
│   └── animations.ts           # Motion variant presets
├── styles/
│   └── globals.css             # Tailwind v4 + custom properties + Lenis CSS
├── types/
│   └── index.ts                # Shared type exports
public/
├── sandhya.svg                 # Avatar (move from root)
├── resume.pdf                  # Resume download
└── images/
    └── projects/               # Project screenshots
        ├── twin.png
        ├── kanban.png
        ├── teamengineer.png
        ├── movix.jpeg
        ├── admin.png
        ├── school.jpeg
        └── graphic.jpg
```

---

## 4. Section-by-Section Design Plan

### 4.1 Navbar — Floating Pill Navigation

**Component:** Aceternity `floating-navbar` (customized)
**Behavior:**
- Fixed at top center of screen, floats as a rounded-full pill
- Blurred glass background (`backdrop-blur-xl`) with pink-tinted border
- Shows/hides based on scroll direction (slide up to hide, down to show)
- Contains: Name (left), Section links (center), Resume button (right)
- Active section highlighted with pink pill indicator
- On mobile: hamburger → full-screen overlay menu with stagger animation

**Visual:**
```
┌─────────────────────────────────────────────────┐
│  Sandhya   About  Skills  Projects  Contact  📄 │
└─────────────────────────────────────────────────┘
         ↑ floating pill, glass background
```

### 4.2 Hero Section — THE Memorable Moment

**Layout:** Full viewport height, **asymmetric split** — text slightly left of center, avatar floating to the right with intentional overlap into the margin. NOT a boring centered stack.
**Components:** Magic UI `blur-fade`, `sparkles-text`, `particles`, `dock`

**Atmospheric Background:**
- Radial mesh gradient: soft pink bloom (center-right, around avatar) fading to white
- Floating `particles` in background (pink-tinted, sparse — 15-20 particles, mouse-reactive)
- Subtle grain noise overlay for tactile depth

**Content (left side, ~60% width):**
- Small mono text in pink: `// hello world` (playful dev reference)
- Name: **"Sandhya Sharma"** — large display type (Outfit 700, clamp 3–5rem), each letter animated with clip-path reveal + sparkles trailing behind
- Title: "Creative Developer" — `text-generate-effect`, words appear one by one with blur-in
- Description: One-liner fading in with `blur-fade` (DM Sans, muted color)
- CTA row: `shimmer-button` "View My Work" (pink shimmer) + ghost "Resume" button

**Content (right side, overlapping):**
- Avatar (`sandhya.svg`) in a soft circle with:
  - Pink glow shadow (`box-shadow: 0 0 60px rgba(244, 114, 182, 0.2)`)
  - Gentle floating animation (translateY ±10px, 4s ease-in-out loop)
  - Subtle border-beam tracing the circle edge
- Avatar intentionally overlaps the center axis — breaking the grid

**Bottom of hero:**
- Social links as a horizontal `dock` component (macOS-style magnification on hover)
- Scroll indicator: thin line that draws downward + "scroll" text rotated vertically

**The Orchestrated Entrance (2 seconds):**
1. `0.0s` — Grain texture + gradient background fades in
2. `0.2s` — Avatar drops in from above with spring physics (slight overshoot)
3. `0.4s` — `// hello world` mono text slides in from left
4. `0.5s` — Name reveals letter-by-letter with clip-path (left to right, 0.03s per letter) + sparkle particles trail each letter
5. `0.9s` — Title generates word-by-word with blur
6. `1.2s` — Description blur-fades in
7. `1.4s` — CTAs slide up with stagger
8. `1.7s` — Dock fades in from below
9. `2.0s` — Particles begin floating, scroll indicator appears

### 4.3 About Section — Personal Story

**Layout:** Two-column on desktop — text left (55%), visual card right (45%) with the card **overlapping upward by ~40px** into the section divider, breaking the rigid section boundary. Stacked on mobile.
**Background:** White with subtle `dot-pattern` (Magic UI) at opacity 0.4
**Components:** Magic UI `box-reveal`, `border-beam`, `number-ticker`

**Content (left):**
- Section label: small mono text `01 —— about` in pink (not a generic "About Me" heading)
- Section heading: **"Crafting pixels with purpose"** — Outfit 600, large
- 2-3 paragraphs about Sandhya (her background, passion, approach)
- Each paragraph revealed with `box-reveal` effect (pink box wipes across to reveal text)
- Key stats row with `number-ticker` animated counters:
  - "7+" Projects | "25+" Technologies | "∞" Curiosity (playful twist on boring stats)

**Content (right):**
- A card with `border-beam` effect (pink beam traces the border continuously)
- Card has frosted glass effect (`backdrop-blur-sm + bg-white/70`)
- Inside: a mini "profile card" with:
  - Avatar (smaller), name, "Creative Developer" badge
  - Location pin icon + "India"
  - Status dot (green) + "Open to opportunities"
  - 2-3 fun facts as tiny pills (e.g., "Design lover", "Code nerd", "Tea > Coffee")
- Soft pink-to-lavender gradient background behind the card (not on it)

### 4.4 Experience Section — Career Timeline

**Layout:** Centered single-column (max-w-3xl) with vertical timeline
**Components:** `blur-fade`, `lucide-react` (Briefcase, MapPin)

**Design — Vertical Timeline:**
- Vertical pink gradient line on the left (pink-300 → transparent)
- Each role as a card anchored to the timeline with a dot connector
- Dot: double circle (outer border pink-300, inner filled pink-400), scales on hover
- Cards: frosted glass (`bg-white/70 backdrop-blur-sm`), pink border on hover, subtle shadow lift
- Staggered `blur-fade` entrance per card

**Content per card:**
- Role title (Outfit 600, text-primary)
- Company name in pink-500 with Briefcase icon + employment type pill (Full-time / Internship)
- Date range in mono text (top-right)
- Location with MapPin icon (muted)
- Description paragraph (text-secondary)
- Skill tags as pink-50 pills

**Experience Data:**
1. **Specialist Programmer** — Infosys (Mar 2025 – Present, Hyderabad, Hybrid)
2. **IT Associate (Frontend)** — VDOIT Technologies (Jul 2024 – Jan 2025, Gurugram, Hybrid)
3. **Frontend Developer (Intern)** — VDOIT Technologies (Jan 2024 – Jul 2024, Gurugram)

**Section label:** `02 —— experience`

### 4.5 Skills Section — Tech Stack Showcase

**Layout:** Full-width section with pink-50 background
**Components:** Magic UI `marquee`, Aceternity `animated-tooltip`

**Design Option — Marquee Rows:**
- 3 horizontal `marquee` rows scrolling at different speeds and directions
- Each row contains skill pills/badges with tech logo + name
- Pills have white background, subtle pink border, rounded-full
- On hover: pill scales up slightly, shows `animated-tooltip` with skill details
- Categories shown as subtle labels above each row

**Skill pills design:**
```
┌──────────────────┐
│ ⚛ React          │  ← icon + name, white bg, pink border
└──────────────────┘
```

- Row 1 (→): Frontend skills (React, Next.js, TypeScript, Tailwind, HTML/CSS, Motion)
- Row 2 (←): Backend + Languages (Node.js, REST APIs, MySQL, MongoDB, JavaScript, Python, C++)
- Row 3 (→): Tools + Design (Figma, Git, GitHub, Vercel, VS Code, Claude Code, Cursor AI)

### 4.6 Projects Section — Work Showcase

**Layout:** Bento-style grid
**Components:** Magic UI `bento-grid`, `safari`, Aceternity `focus-cards`, `spotlight`

**Design — Bento Grid:**
- Projects displayed in a bento grid layout (mixed sizes — 2 large, 4 medium, 1 wide)
- Each project card has:
  - Project screenshot inside a `safari` browser mockup frame
  - Title with subtle `spotlight` mouse-follow effect on the card
  - Short description
  - Tech tags as small pastel-colored pills
  - External link icon (top-right)
- On hover: card lifts with shadow, `border-beam` activates, slight scale
- `focus-cards` behavior: hovering one card softly dims others

**Grid layout (desktop):**
```
┌────────────────────┬───────────┐
│                    │           │
│   TwinProtocol     │  Kanban   │
│   (large)          │  (medium) │
│                    │           │
├───────────┬────────┴───────────┤
│           │                    │
│  TeamEng  │    Movix           │
│  (medium) │    (large)         │
│           │                    │
├───────────┴──────┬─────────────┤
│    Admin         │   School     │
│    (medium)      │   (medium)   │
├──────────────────┴─────────────┤
│   Graphics Supreme (full-wide) │
└────────────────────────────────┘
```

### 4.7 Contact Section — Get In Touch

**Layout:** Centered, clean
**Components:** Magic UI `shimmer-button`, `particles`

**Content:**
- Heading: "Let's Work Together" or "Say Hello" with a waving hand animation
- Subtext: "I'm currently open to new opportunities and collaborations"
- Email displayed prominently (click to copy with toast notification)
- `shimmer-button` "Send me an Email" (pink shimmer, opens mailto:)
- Social links repeated here as a clean row of icon buttons
- Very subtle `particles` in background (even sparser than hero)

### 4.8 Footer — Minimal Closing

**Layout:** Simple, centered
**Content:**
- "Designed & Built by Sandhya Sharma"
- Year: "2026"
- Small heart icon in pink
- Built with Next.js, Tailwind, Motion badge row (optional)
- Back-to-top button (smooth scroll via Lenis)

---

## 5. Animation Strategy

### Global
- **Lenis smooth scroll** wrapping entire app
- **Scroll-triggered entrances:** Every section uses `whileInView` with `once: true`
- **Stagger pattern:** Container variants with `staggerChildren: 0.08`

### Per-Section Animations
| Section | Entry Animation | Interactive |
|---------|----------------|-------------|
| Navbar | Slides down on load (0.3s) | Hide/show on scroll direction |
| Hero | Sequence: avatar → name → title → desc → CTAs → dock | Particles follow mouse slightly |
| About | Box-reveal for paragraphs, number-ticker for stats | Border-beam on card |
| Skills | Marquee continuous scroll | Tooltip on hover, pill scale |
| Projects | Bento cards fade-in-up with stagger | Spotlight hover, focus blur, card lift |
| Contact | Fade-in centered | Shimmer button, wave emoji |
| Footer | Fade-in on scroll | Back-to-top button hover |

### Micro-Interactions
- **Buttons:** scale 0.98 on press, subtle pink glow on hover
- **Links:** underline slides in from left on hover (pink)
- **Cards:** translateY(-4px) + shadow increase on hover
- **Avatar:** continuous gentle float (translateY ±8px, 3s loop)
- **Cursor:** subtle glow circle following mouse (desktop only, very faint pink)

---

## 6. Responsive Strategy

| Breakpoint | Layout Changes |
|------------|---------------|
| `lg` (1024px+) | Full bento grid, two-column about, horizontal nav |
| `md` (768px) | Simplified grid (2 cols), stacked about, pill nav |
| `sm` (640px) | Single column, hamburger menu, full-width cards |

Mobile-specific:
- Navbar becomes bottom-fixed pill with 4 icons (no labels)
- Hero stacks vertically (avatar on top)
- Marquee continues but single row
- Bento grid becomes vertical card stack
- All animations reduced (shorter duration, less distance)

---

## 7. Vercel Architecture & Performance Rules

> Applied from `vercel-composition-patterns` and `vercel-react-best-practices` skills.

### Component Architecture (Composition Patterns)

**No boolean props** — Every component uses composition, not flags:
```tsx
// BAD: <ProjectCard isLarge isFeatured showBorderBeam />
// GOOD: Explicit variants
<FeaturedProjectCard project={project} />
<CompactProjectCard project={project} />
```

**Compound components** for complex UI (navbar, dock, bento grid):
```tsx
// Navbar as compound component
const Navbar = { Root, Links, Logo, Resume }

<Navbar.Root>
  <Navbar.Logo />
  <Navbar.Links items={sectionLinks} />
  <Navbar.Resume />
</Navbar.Root>
```

**Explicit variants** over mode booleans:
- `SectionHeading` → not one component with `variant="about"|"skills"`, but composed inline with shared primitives
- Project cards → `FeaturedProjectCard` and `ProjectCard` (not `<ProjectCard isFeatured />`)

**React 19 APIs:**
- `use(Context)` instead of `useContext(Context)` everywhere
- No `forwardRef` — `ref` as a regular prop
- Functional `setState` for stable callbacks in animation handlers

### Performance (React Best Practices)

**CRITICAL — Dynamic imports for heavy components:**
```tsx
// Particles, Spotlight, Globe — loaded on demand, not in main bundle
import dynamic from "next/dynamic";
const Particles = dynamic(() => import("@/components/ui/particles"), { ssr: false });
const Spotlight = dynamic(() => import("@/components/ui/spotlight"), { ssr: false });
const CursorGlow = dynamic(() => import("@/components/shared/cursor-glow"), { ssr: false });
```

**CRITICAL — Avoid barrel file imports for icons:**
```tsx
// BAD: import { Github, Mail, Linkedin } from "lucide-react"  // loads ALL 1500+ icons
// GOOD: Direct imports or use optimizePackageImports in next.config
```
Add to `next.config.ts`:
```ts
experimental: {
  optimizePackageImports: ["lucide-react", "@icons-pack/react-simple-icons"]
}
```

**HIGH — Server Components by default:**
- `page.tsx` is a Server Component — renders section shells with static content
- Only animated wrappers get `"use client"` — keep them as thin leaf components
- Pass only needed primitive props across the RSC boundary (not entire objects):
```tsx
// Server Component (page.tsx)
{projects.map(p => (
  <ProjectCard key={p.title} title={p.title} description={p.description} url={p.url} image={p.image} tech={p.tech} />
))}
// NOT: <ProjectCard project={p} />  ← serializes entire object
```

**HIGH — Animate SVG wrappers, not SVGs directly:**
```tsx
// The sandhya.svg avatar: wrap in <div> before applying motion animations
<motion.div animate={{ y: [0, -10, 0] }}>
  <Image src="/sandhya.svg" alt="Sandhya" />
</motion.div>
// NOT: <motion.img src="/sandhya.svg" />
```

**MEDIUM — Passive event listeners for scroll/touch:**
- Lenis handles this internally (good)
- Any custom scroll handlers in cursor-glow or navbar must use `{ passive: true }`

**MEDIUM — content-visibility for off-screen sections:**
```css
.section-offscreen {
  content-visibility: auto;
  contain-intrinsic-size: 0 600px;
}
```
Apply to Skills, Projects, Contact sections — browser skips layout/paint until they're near viewport.

**Additional performance rules:**
- `next/image` for all project screenshots with proper `width`/`height`/`sizes`
- `next/font/google` for Outfit + DM Sans (already planned)
- Lenis initialized once in root layout, not per-section
- `will-change: transform` only on actively animating elements, removed after animation completes

---

## 8. Execution Order (Step-by-Step)

### Phase 1: Foundation
1. Install dependencies (`motion`, `lenis`, `lucide-react`, `@icons-pack/react-simple-icons`)
2. Set up fonts (**Outfit** + **DM Sans**) in `layout.tsx`
3. Configure `globals.css` with full color palette, shadows, Lenis CSS, grain texture, content-visibility
4. Update `next.config.ts` with `optimizePackageImports` for lucide-react and simple-icons
5. Create `lib/constants.ts` with all content data (from reference)
6. Create `lib/types.ts` with TypeScript interfaces
7. Create `lib/animations.ts` with Motion variant presets
8. Create `components/shared/smooth-scroll.tsx` (Lenis wrapper)
9. Update `layout.tsx` with fonts, SmoothScroll, metadata
10. Move `sandhya.svg` into `public/` directory
11. Copy project images to `public/images/projects/`

### Phase 2: UI Components
12. Create/copy Magic UI components needed (blur-fade, shimmer-button, dock, marquee, particles, sparkles-text, box-reveal, number-ticker, border-beam, bento-grid, safari)
13. Create/copy Aceternity UI components needed (floating-navbar, spotlight, text-generate, focus-cards, animated-tooltip)
14. Create shared components (section-heading, animated-section, cursor-glow)
15. Customize all component colors to pink palette
16. Convert any `framer-motion` imports to `motion/react` in copied components
17. Apply Vercel patterns: `use()` not `useContext()`, no `forwardRef`, `ref` as regular prop

### Phase 3: Layout & Navigation
18. Build `components/layout/navbar.tsx` as compound component (Navbar.Root, Navbar.Links, etc.)
19. Build `components/layout/footer.tsx`
20. Compose layout in `page.tsx` — Server Component shell with `"use client"` leaf wrappers
21. Ensure RSC boundary passes only primitive props (no full objects across boundary)

### Phase 4: Sections
22. Build `sections/hero.tsx` (asymmetric layout, orchestrated entrance, particles via dynamic import)
23. Build `sections/about.tsx` (box-reveal, stats, overlapping border-beam card)
24. Build `sections/skills.tsx` (marquee rows, skill pills with direct icon imports)
25. Build `sections/projects.tsx` (bento grid with explicit FeaturedProjectCard / ProjectCard variants)
26. Build `sections/contact.tsx` (CTA, email, social links)

### Phase 5: Polish & Performance Audit
27. Add scroll-triggered `blur-fade` animations to all sections
28. Add micro-interactions (hover states, press states, cursor glow via dynamic import)
29. Implement responsive layouts for all breakpoints
30. Add active section tracking for navbar (passive scroll listeners)
31. **Vercel performance audit:**
    - Verify all heavy components use `next/dynamic` with `{ ssr: false }`
    - Verify icon imports use `optimizePackageImports` or direct paths
    - Verify SVG animations use wrapper `<div>`, not direct SVG
    - Verify `content-visibility: auto` on off-screen sections
    - Verify Server Components are default, `"use client"` only on leaf wrappers
    - Verify no barrel imports, no boolean prop proliferation
32. Final visual QA, animation timing, and lighthouse audit

---

## 9. Content Data (from reference project)

All content will be ported from `sandhya-portfolio/src/lib/constants.ts`:
- **Name:** Sandhya Sharma
- **Title:** Creative Developer
- **Description:** Full-stack developer crafting pixel-perfect, high-performance web experiences
- **Email:** sharmasandhya95185@gmail.com
- **7 Projects** with titles, descriptions, tech stacks, and URLs
- **6 Skill Categories** (Frontend, Backend, AI & Agents, UI/UX, DevOps & Tools, Languages)
- **5 Social Links** (GitHub, LinkedIn, Medium, Instagram, Email)
- **Avatar:** `sandhya.svg`

---

## 10. Key Design Decisions Summary

| Decision | Choice | Why |
|----------|--------|-----|
| Design style | "Petal" — Soft Precision | Cute through craft, not decoration. Memorable. |
| Primary color | Pink-400 (#F472B6) | Vibrant but not overwhelming |
| Backgrounds | Layered: gradients + grain + patterns | Atmospheric depth, not flat white |
| Font display | **Outfit** (600-700) | Warm geometric, characterful, NOT generic |
| Font body | **DM Sans** (400-500) | Pairs with Outfit, wider + warmer than Inter |
| Icons | Lucide + Simple Icons | Clean strokes + brand logos |
| Animations | Motion (motion/react) | Best React integration, declarative API |
| Animation strategy | One orchestrated hero + consistent scroll reveals | Impact through choreography, not quantity |
| Smooth scroll | Lenis | Industry standard, works with Motion |
| UI components | Magic UI + Aceternity UI (cherry-picked) | Best-in-class animated components |
| Navigation | Floating pill navbar | Modern, minimal, trending |
| Projects layout | Bento grid with grid-breaking overlap | Visual interest through asymmetry |
| Skills display | Marquee rows | Dynamic, modern, shows breadth |
| Spatial composition | Asymmetric hero, overlapping cards, broken grids | Feels designed, not templated |
| No dark mode | White only | Matches cute/pink aesthetic, simplifies design |

---

## 11. Skill Compliance Checklists

### Frontend Design Skill

- [ ] **No generic fonts** — Outfit + DM Sans (not Inter/Roboto/Arial)
- [ ] **No flat backgrounds** — every section has atmosphere (gradient, pattern, grain, or texture)
- [ ] **Dominant color with sharp accents** — Pink dominates, lavender/peach as accents
- [ ] **One unforgettable moment** — The hero entrance sequence
- [ ] **Unexpected layout** — Asymmetric hero, overlapping about card, grid-breaking bento
- [ ] **Motion with purpose** — Hero choreography is the star; scroll reveals are supporting cast
- [ ] **Custom cursor effect** — Subtle pink glow following mouse (desktop only)
- [ ] **Grain/texture overlay** — Global noise texture at low opacity for tactile depth
- [ ] **Not cookie-cutter** — Section labels use mono text (`01 —— about`), not generic headings

### Vercel Composition Patterns Skill

- [ ] **No boolean props** — No `isFeatured`, `isLarge`, `showBeam` booleans on components
- [ ] **Compound components** — Navbar, Dock use `Component.SubComponent` pattern
- [ ] **Explicit variants** — `FeaturedProjectCard` vs `ProjectCard` (not boolean flags)
- [ ] **Children over render props** — Composition via `children`, not `renderX` props
- [ ] **React 19 APIs** — `use()` not `useContext()`, no `forwardRef`, ref as regular prop
- [ ] **State lifted to providers** — Active section state in context, not prop-drilled

### Vercel React Best Practices Skill

- [ ] **Dynamic imports** — `next/dynamic` + `{ ssr: false }` for Particles, Spotlight, CursorGlow
- [ ] **No barrel imports** — `optimizePackageImports` configured for lucide-react, simple-icons
- [ ] **Server Components default** — `page.tsx` is RSC, only animation leaf nodes are `"use client"`
- [ ] **Minimal serialization** — Primitive props across RSC boundary, not full objects
- [ ] **SVG wrapper animation** — Avatar animated via `<motion.div>` wrapping `<Image>`, not directly
- [ ] **Passive event listeners** — All scroll/touch handlers use `{ passive: true }`
- [ ] **content-visibility** — Off-screen sections use `content-visibility: auto` for faster initial render
- [ ] **Parallel operations** — No request waterfalls (N/A for static portfolio, but kept as principle)
- [ ] **Font optimization** — `next/font/google` for Outfit + DM Sans with `variable` CSS props
- [ ] **Image optimization** — `next/image` with explicit `width`, `height`, `sizes` for all project screenshots

---

*This plan is ready for execution. Each phase builds on the previous one, and components are designed to be built independently then composed together.*
