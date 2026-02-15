"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface NavbarRootProps {
  children: React.ReactNode;
  className?: string;
}

function NavbarRoot({ children, className }: NavbarRootProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY < 50);
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed left-1/2 top-4 z-50",
          "flex items-center gap-0.5 rounded-2xl px-1.5 py-1.5",
          atTop
            ? "border border-border/40 bg-white/50 backdrop-blur-lg"
            : "border border-border/60 bg-white/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)]",
          "transition-[background,border,box-shadow] duration-500",
          className,
        )}
      >
        {children}
      </motion.nav>
    </AnimatePresence>
  );
}

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

function NavbarLink({ href, children, active, className }: NavbarLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "relative rounded-xl px-3.5 py-2 text-[13px] font-medium transition-all duration-200",
        active ? "text-pink-500" : "text-text-muted hover:text-text-primary",
        className,
      )}
    >
      {active && (
        <motion.span
          layoutId="navbar-active"
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_3px_rgba(0,0,0,0.05)]"
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </a>
  );
}

interface NavbarLogoProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

function NavbarLogo({ children, href = "#home", className }: NavbarLogoProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center gap-1.5 rounded-xl px-3 py-2 font-display text-sm font-semibold text-text-primary transition-colors hover:text-pink-500",
        className,
      )}
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 shadow-[0_2px_8px_rgba(224,141,160,0.3)]">
        <Sparkles className="h-3 w-3 text-white" />
      </span>
      {children}
    </a>
  );
}

interface NavbarCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavbarCTA({ href, children, className }: NavbarCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "ml-1 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 px-4 py-2 text-[13px] font-medium text-white shadow-[0_2px_10px_rgba(224,141,160,0.25)] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(224,141,160,0.35)] hover:brightness-105",
        className,
      )}
    >
      {children}
    </a>
  );
}

export const Navbar = {
  Root: NavbarRoot,
  Link: NavbarLink,
  Logo: NavbarLogo,
  CTA: NavbarCTA,
};
