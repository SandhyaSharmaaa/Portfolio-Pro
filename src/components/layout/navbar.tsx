"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/floating-navbar";
import type { SectionLink } from "@/lib/types";

export function SiteNavbar({
  sectionLinks,
  firstName,
  resumeUrl,
}: {
  sectionLinks: SectionLink[];
  firstName: string;
  resumeUrl: string;
}) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "blog", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar.Root>
      <Navbar.Logo>{firstName}</Navbar.Logo>
      <div className="hidden items-center gap-0.5 lg:flex">
        {sectionLinks.map((link) => (
          <Navbar.Link
            key={link.href}
            href={link.href}
            active={activeSection === link.href.replace("#", "")}
          >
            {link.label}
          </Navbar.Link>
        ))}
      </div>
      <Navbar.Mobile links={sectionLinks} activeSection={activeSection} />
      <Navbar.CTA href={resumeUrl}>Resume</Navbar.CTA>
    </Navbar.Root>
  );
}
