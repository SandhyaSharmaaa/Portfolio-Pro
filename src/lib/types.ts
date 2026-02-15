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
