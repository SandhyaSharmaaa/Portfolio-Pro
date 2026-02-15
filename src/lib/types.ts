export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  image: string;
}

export interface Skill {
  category: string;
  tools: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SectionLink {
  label: string;
  href: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location?: string;
  description?: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  url: string;
  email: string;
}

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  thumbnail: string;
  description: string;
}

// ── CMS prop types ──

export interface HeroProps {
  name: string;
  firstName: string;
  title: string;
  description: string;
  avatarUrl: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface CodeSnippet {
  role: string;
  fuel: string;
  motto: string;
}

export interface CurrentlyItem {
  text: string;
  highlight: string;
}

export interface PersonalityPill {
  label: string;
  icon: string;
  color: string;
}

export interface AboutProps {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  stats: AboutStat[];
  statusText: string;
  statusSubtext: string;
  roleLabel: string;
  codeSnippet: CodeSnippet;
  currently: CurrentlyItem[];
  vibes: string[];
  personalityPills: PersonalityPill[];
}

export interface ContactProps {
  email: string;
  heading: string;
  description: string;
  socialLinks: SocialLink[];
  mediumUrl?: string;
}
