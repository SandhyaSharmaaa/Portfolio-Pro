import type {
  Experience,
  NavLink,
  Project,
  SectionLink,
  Skill,
  SiteConfig,
  SocialLink,
} from "./types";

export const siteConfig: SiteConfig = {
  name: "Sandhya Sharma",
  firstName: "Sandhya",
  lastName: "Sharma",
  title: "Creative Developer",
  description:
    "Full-stack developer crafting pixel-perfect, high-performance web experiences with modern technologies.",
  url: "https://sandhyasharma.dev",
  email: "sharmasandhya95185@gmail.com",
};

export const navLinks: NavLink[] = [
  { label: "Sandhya", href: "#home" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sandhya-sharmaaa/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/SandhyaSharmaaa",
    external: true,
  },
  {
    label: "Medium",
    href: "https://medium.com/@sandhyaaa",
    external: true,
  },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export const sectionLinks: SectionLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    role: "Specialist Programmer",
    company: "Infosys",
    type: "Full-time",
    period: "Mar 2025 — Present",
    location: "Hyderabad, India · Hybrid",
    description:
      "Building scalable enterprise solutions and contributing to large-scale product development.",
    skills: ["React.js", "TypeScript", "Next.js"],
  },
  {
    role: "Information Technology Associate (Frontend)",
    company: "VDOIT Technologies",
    type: "Full-time",
    period: "Jul 2024 — Jan 2025",
    location: "Gurugram, India · Hybrid",
    description:
      "Designed and developed UI/UX for AI-driven chatbot project. Improved user engagement by 30% through clean code practices. Implemented 10+ custom hooks and mentored 5 interns.",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
  },
  {
    role: "Frontend Developer",
    company: "VDOIT Technologies",
    type: "Internship",
    period: "Jan 2024 — Jul 2024",
    location: "Gurugram, India",
    description:
      "Developed responsive interfaces with React.js. Collaborated with cross-functional teams on AI chatbot and internal tooling projects.",
    skills: ["React.js", "JavaScript", "CSS"],
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Motion (Framer)",
    ],
  },
  {
    category: "Backend",
    tools: ["Node.js", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    category: "AI & Agents",
    tools: [
      "Claude Code",
      "Cursor AI",
      "GitHub Copilot",
      "v0 by Vercel",
      "Prompt Engineering",
    ],
  },
  {
    category: "UI/UX",
    tools: ["Figma", "Adobe Illustrator", "Responsive Design", "Design Systems"],
  },
  {
    category: "DevOps & Tools",
    tools: ["Git", "GitHub", "Vercel", "CI/CD", "VS Code"],
  },
  {
    category: "Languages",
    tools: ["JavaScript", "TypeScript", "C", "C++", "SQL", "Python"],
  },
];

export const projects: Project[] = [
  {
    title: "TwinProtocol — AI Twin Chatbot",
    description:
      "AI twin chatbot — real-time conversational UI with custom LLM integration",
    tech: ["React", "TypeScript", "Tailwind CSS", "MUI", "shadcn/ui"],
    url: "https://twinprotocol.com/",
    image: "/images/projects/twin.png",
  },
  {
    title: "Kanban Board — Makes management easier",
    description:
      "Drag-and-drop Kanban board with real-time state management",
    tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    url: "https://sandhya-asana-clone.netlify.app/",
    image: "/images/projects/kanban.png",
  },
  {
    title: "Team Engineer — Serving them the best",
    description:
      "Full-stack team collaboration platform with MySQL backend",
    tech: ["Node.js", "JavaScript", "MySQL"],
    url: "https://teamengineers.onrender.com/",
    image: "/images/projects/teamengineer.png",
  },
  {
    title: "Movix — Stream Your Favourites",
    description:
      "Movie discovery app with TMDB API integration and dynamic routing",
    tech: ["React", "JavaScript"],
    url: "https://movix-imdb.vercel.app/",
    image: "/images/projects/movix.jpeg",
  },
  {
    title: "Admin Dashboard — Modern analytics on way",
    description:
      "Analytics dashboard with interactive charts and responsive data tables",
    tech: ["React", "JavaScript", "Tailwind CSS", "MUI"],
    url: "https://sandhya-admin-dashboard.netlify.app/",
    image: "/images/projects/admin.png",
  },
  {
    title: "Vardey Devi — School For The Change",
    description:
      "School website with CMS-driven content and responsive design",
    tech: ["WordPress", "CSS"],
    url: "https://vdcps.org.in/",
    image: "/images/projects/school.jpeg",
  },
  {
    title: "Graphics Supreme — Turning Chaos into Creativity",
    description: "Brand identity and graphic design portfolio",
    tech: ["Canva", "Adobe Illustrator"],
    url: "https://drive.google.com/drive/folders/1zJZLjotr4lP0agBCB5bAkvWMvNZv7tPX?usp=drive_link",
    image: "/images/projects/graphic.jpg",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/SandhyaSharmaaa",
    icon: "Github",
    label: "Visit GitHub profile",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/sandhya-sharmaaa/",
    icon: "Linkedin",
    label: "Visit LinkedIn profile",
  },
  {
    platform: "Medium",
    url: "https://medium.com/@sandhyaaa",
    icon: "BookOpen",
    label: "Read articles on Medium",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/sandhya.sharma350/",
    icon: "Instagram",
    label: "Follow on Instagram",
  },
  {
    platform: "Email",
    url: `mailto:${siteConfig.email}`,
    icon: "Mail",
    label: "Send an email",
  },
];
