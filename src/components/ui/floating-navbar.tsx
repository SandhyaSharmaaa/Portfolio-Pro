"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Sparkles, Menu, X } from "lucide-react";
import type { SectionLink } from "@/lib/types";

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
        "ml-1 hidden rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 px-4 py-2 text-[13px] font-medium text-white shadow-[0_2px_10px_rgba(224,141,160,0.25)] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(224,141,160,0.35)] hover:brightness-105 lg:inline-block",
        className,
      )}
    >
      {children}
    </a>
  );
}

interface NavbarMobileProps {
  links: SectionLink[];
  activeSection: string;
}

function NavbarMobile({ links, activeSection }: NavbarMobileProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-surface/80 backdrop-blur-2xl"
            onClick={() => setOpen(false)}
          />

          {/* Overlay content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[56] flex flex-col justify-between px-8 py-20"
          >
            {/* Decorative gradient blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-pink-200/20 blur-[100px]" />
              <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent-lavender/15 blur-[100px]" />
            </div>

            {/* Close button */}
            <motion.button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-white/50 text-text-muted backdrop-blur-sm transition-colors hover:border-pink-200 hover:text-pink-500"
            >
              <X className="h-5 w-5" />
            </motion.button>

            {/* Navigation links — editorial numbered list */}
            <nav className="relative flex flex-1 flex-col justify-center gap-1">
              {links.map((link, i) => {
                const isActive =
                  activeSection === link.href.replace("#", "");
                const num = String(i + 1).padStart(2, "0");
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="group relative flex items-center gap-4 py-3"
                  >
                    {/* Number */}
                    <span
                      className={cn(
                        "font-mono text-xs tracking-wider transition-colors duration-200",
                        isActive
                          ? "text-pink-400"
                          : "text-text-muted/40 group-hover:text-pink-300",
                      )}
                    >
                      {num}
                    </span>

                    {/* Vertical tick */}
                    <span
                      className={cn(
                        "h-5 w-px transition-all duration-300",
                        isActive
                          ? "bg-pink-400"
                          : "bg-border/50 group-hover:bg-pink-300",
                      )}
                    />

                    {/* Label */}
                    <span
                      className={cn(
                        "font-display text-2xl font-semibold tracking-[-0.02em] transition-colors duration-200",
                        isActive
                          ? "text-text-primary"
                          : "text-text-muted group-hover:text-text-primary",
                      )}
                    >
                      {link.label}
                    </span>

                    {/* Active dot */}
                    {isActive && (
                      <motion.span
                        layoutId="mobile-active"
                        className="ml-auto h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(224,141,160,0.5)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}

                    {/* Bottom border line — draws on hover */}
                    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-pink-300/40 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom section number */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: links.length * 0.05 + 0.1 }}
              className="relative font-mono text-[10px] tracking-widest text-text-muted/40"
            >
              NAVIGATION
            </motion.p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-500 transition-colors hover:bg-pink-100"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Portal overlay to document.body to escape transformed parent */}
      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}

export const Navbar = {
  Root: NavbarRoot,
  Link: NavbarLink,
  Logo: NavbarLogo,
  CTA: NavbarCTA,
  Mobile: NavbarMobile,
};
