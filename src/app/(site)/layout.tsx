import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { LazyCursor } from "@/components/ui/lazy-cursor";
import "@/styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sandhyasharma.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ── Basic ──
  title: {
    default: "Sandhya Sharma — Frontend Engineer",
    template: "%s | Sandhya Sharma",
  },
  description:
    "Frontend engineer specializing in React, Next.js, and TypeScript. Building pixel-perfect, high-performance web experiences with modern technologies.",
  keywords: [
    "Sandhya Sharma",
    "frontend engineer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "portfolio",
    "web developer",
    "UI engineer",
    "JavaScript",
    "Tailwind CSS",
    "web development",
    "Hyderabad",
    "India",
  ],
  authors: [{ name: "Sandhya Sharma", url: siteUrl }],
  creator: "Sandhya Sharma",
  publisher: "Sandhya Sharma",
  category: "technology",

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical ──
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },

  // ── Open Graph ──
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sandhya Sharma",
    title: "Sandhya Sharma — Frontend Engineer",
    description:
      "Frontend engineer specializing in React, Next.js, and TypeScript. Building pixel-perfect, high-performance web experiences.",
  },

  // ── Twitter ──
  twitter: {
    card: "summary_large_image",
    title: "Sandhya Sharma — Frontend Engineer",
    description:
      "Frontend engineer specializing in React, Next.js, and TypeScript. Building pixel-perfect, high-performance web experiences.",
  },

  // ── Icons ──
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },

  // ── Other ──
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFBFA" },
    { media: "(prefers-color-scheme: dark)", color: "#2D2A2E" },
  ],
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn-images-1.medium.com" />
        <link
          rel="dns-prefetch"
          href="https://cdn-images-1.medium.com"
        />
      </head>
      <body
        className={`${outfit.variable} ${dmSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <LazyCursor />
          <LoadingScreen />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
