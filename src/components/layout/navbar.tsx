"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/floating-navbar";
import { sectionLinks } from "@/lib/constants";

export function SiteNavbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
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
      <Navbar.Logo>Sandhya</Navbar.Logo>
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
      <Navbar.CTA href="/resume.pdf">Resume</Navbar.CTA>
    </Navbar.Root>
  );
}
