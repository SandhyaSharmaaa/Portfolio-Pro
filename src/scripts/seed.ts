import { getPayload } from "payload";
import config from "@payload-config";

async function seed() {
  const payload = await getPayload({ config });

  console.log("Seeding database...");

  // ── Create admin user ──
  try {
    await payload.create({
      collection: "users",
      data: {
        email: "sharmasandhya95185@gmail.com",
        password: "Bharti@9211#",
      },
    });
    console.log("Admin user created");
  } catch {
    console.log("Admin user already exists, skipping...");
  }

  // ── Seed Experiences ──
  const existingExperiences = await payload.find({ collection: "experiences", limit: 1 });
  if (existingExperiences.totalDocs === 0) {
    const experienceData = [
      {
        role: "Specialist Programmer",
        company: "Infosys",
        type: "Full-time" as const,
        period: "Mar 2025 — Present",
        location: "Hyderabad, India · Hybrid",
        description:
          "Building scalable enterprise solutions and contributing to large-scale product development.",
        skills: [
          { skill: "React.js" },
          { skill: "TypeScript" },
          { skill: "Next.js" },
        ],
        order: 1,
      },
      {
        role: "Information Technology Associate (Frontend)",
        company: "VDOIT Technologies",
        type: "Full-time" as const,
        period: "Jul 2024 — Jan 2025",
        location: "Gurugram, India · Hybrid",
        description:
          "Designed and developed UI/UX for AI-driven chatbot project. Improved user engagement by 30% through clean code practices. Implemented 10+ custom hooks and mentored 5 interns.",
        skills: [
          { skill: "React.js" },
          { skill: "Next.js" },
          { skill: "TypeScript" },
          { skill: "Tailwind CSS" },
          { skill: "MUI" },
        ],
        order: 2,
      },
      {
        role: "Frontend Developer",
        company: "VDOIT Technologies",
        type: "Internship" as const,
        period: "Jan 2024 — Jul 2024",
        location: "Gurugram, India",
        description:
          "Developed responsive interfaces with React.js. Collaborated with cross-functional teams on AI chatbot and internal tooling projects.",
        skills: [
          { skill: "React.js" },
          { skill: "JavaScript" },
          { skill: "CSS" },
        ],
        order: 3,
      },
    ];

    for (const exp of experienceData) {
      await payload.create({ collection: "experiences", data: exp });
    }
    console.log("Experiences seeded");
  } else {
    console.log("Experiences already exist, skipping...");
  }

  // ── Seed Projects ──
  const existingProjects = await payload.find({ collection: "projects", limit: 1 });
  if (existingProjects.totalDocs === 0) {
    const projectData = [
      {
        title: "TwinProtocol — AI Twin Chatbot",
        description:
          "AI twin chatbot — real-time conversational UI with custom LLM integration",
        techStack: [
          { tech: "React" },
          { tech: "TypeScript" },
          { tech: "Tailwind CSS" },
          { tech: "MUI" },
          { tech: "shadcn/ui" },
        ],
        liveUrl: "https://twinprotocol.com/",
        imageUrl: "/images/projects/twin.png",
        order: 1,
      },
      {
        title: "Kanban Board — Makes management easier",
        description:
          "Drag-and-drop Kanban board with real-time state management",
        techStack: [
          { tech: "React" },
          { tech: "TypeScript" },
          { tech: "Tailwind CSS" },
          { tech: "shadcn/ui" },
        ],
        liveUrl: "https://sandhya-asana-clone.netlify.app/",
        imageUrl: "/images/projects/kanban.png",
        order: 2,
      },
      {
        title: "Team Engineer — Serving them the best",
        description:
          "Full-stack team collaboration platform with MySQL backend",
        techStack: [
          { tech: "Node.js" },
          { tech: "JavaScript" },
          { tech: "MySQL" },
        ],
        liveUrl: "https://teamengineers.onrender.com/",
        imageUrl: "/images/projects/teamengineer.png",
        order: 3,
      },
      {
        title: "Movix — Stream Your Favourites",
        description:
          "Movie discovery app with TMDB API integration and dynamic routing",
        techStack: [{ tech: "React" }, { tech: "JavaScript" }],
        liveUrl: "https://movix-imdb.vercel.app/",
        imageUrl: "/images/projects/movix.jpeg",
        order: 4,
      },
      {
        title: "Admin Dashboard — Modern analytics on way",
        description:
          "Analytics dashboard with interactive charts and responsive data tables",
        techStack: [
          { tech: "React" },
          { tech: "JavaScript" },
          { tech: "Tailwind CSS" },
          { tech: "MUI" },
        ],
        liveUrl: "https://sandhya-admin-dashboard.netlify.app/",
        imageUrl: "/images/projects/admin.png",
        order: 5,
      },
      {
        title: "Vardey Devi — School For The Change",
        description:
          "School website with CMS-driven content and responsive design",
        techStack: [{ tech: "WordPress" }, { tech: "CSS" }],
        liveUrl: "https://vdcps.org.in/",
        imageUrl: "/images/projects/school.jpeg",
        order: 6,
      },
      {
        title: "Graphics Supreme — Turning Chaos into Creativity",
        description: "Brand identity and graphic design portfolio",
        techStack: [{ tech: "Canva" }, { tech: "Adobe Illustrator" }],
        liveUrl:
          "https://drive.google.com/drive/folders/1zJZLjotr4lP0agBCB5bAkvWMvNZv7tPX?usp=drive_link",
        imageUrl: "/images/projects/graphic.jpg",
        order: 7,
      },
    ];

    for (const project of projectData) {
      await payload.create({ collection: "projects", data: project });
    }
    console.log("Projects seeded");
  } else {
    console.log("Projects already exist, skipping...");
  }

  // ── Seed Skills ──
  const existingSkills = await payload.find({ collection: "skills", limit: 1 });
  if (existingSkills.totalDocs === 0) {
    const skillData = [
      {
        category: "Frontend",
        tools: [
          { name: "React" },
          { name: "Next.js" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "HTML/CSS" },
          { name: "Motion (Framer)" },
        ],
        order: 1,
      },
      {
        category: "Backend",
        tools: [
          { name: "Node.js" },
          { name: "REST APIs" },
          { name: "MySQL" },
          { name: "MongoDB" },
        ],
        order: 2,
      },
      {
        category: "AI & Agents",
        tools: [
          { name: "Claude Code" },
          { name: "Cursor AI" },
          { name: "GitHub Copilot" },
          { name: "v0 by Vercel" },
          { name: "Prompt Engineering" },
        ],
        order: 3,
      },
      {
        category: "UI/UX",
        tools: [
          { name: "Figma" },
          { name: "Adobe Illustrator" },
          { name: "Responsive Design" },
          { name: "Design Systems" },
        ],
        order: 4,
      },
      {
        category: "DevOps & Tools",
        tools: [
          { name: "Git" },
          { name: "GitHub" },
          { name: "Vercel" },
          { name: "CI/CD" },
          { name: "VS Code" },
        ],
        order: 5,
      },
      {
        category: "Languages",
        tools: [
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "C" },
          { name: "C++" },
          { name: "SQL" },
          { name: "Python" },
        ],
        order: 6,
      },
    ];

    for (const skill of skillData) {
      await payload.create({ collection: "skills", data: skill });
    }
    console.log("Skills seeded");
  } else {
    console.log("Skills already exist, skipping...");
  }

  // ── Seed Site Settings ──
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      hero: {
        name: "Sandhya Sharma",
        firstName: "Sandhya",
        lastName: "Sharma",
        title: "Frontend Engineer",
        description:
          "Frontend engineer who builds pixel-perfect, high-performance web experiences with modern technologies.",
        avatarUrl: "/sandhya.svg",
        resumeUrl: "/resume.pdf",
      },
      about: {
        heading: "Crafting pixels\nwith purpose",
        paragraph1:
          "I'm Sandhya — a frontend engineer who believes great software is equal parts engineering and empathy. I build pixel-perfect, high-performance web experiences that users actually enjoy using.",
        paragraph2:
          "With a deep love for clean design systems and modern frontend tools, I turn complex ideas into elegant interfaces. Whether it's React, Next.js, or crafting the perfect micro-interaction — I sweat the details so users don't have to.",
        stats: [
          { value: "7+", label: "Projects" },
          { value: "25+", label: "Technologies" },
          { value: "Infinity", label: "Curiosity" },
        ],
        statusText: "Available for work",
        statusSubtext: "Open to full-time roles",
        roleLabel: "Frontend Engineer",
        codeSnippet: {
          role: "Frontend Dev",
          fuel: "old songs & curiosity",
          motto: "ship fast, ship pretty",
        },
        currently: [
          { text: "Building with", highlight: "Next.js" },
          { text: "Learning", highlight: "AI agents" },
        ],
        vibes: [
          { text: "Old Hindi songs on repeat" },
          { text: "Pizza > everything" },
        ],
        personalityPills: [
          {
            label: "Component architect",
            icon: "Code",
            color: "bg-pink-50 text-pink-500",
          },
          {
            label: "Pixel perfectionist",
            icon: "Heart",
            color: "bg-rose-50 text-rose-500",
          },
          {
            label: "Shopping enthusiast",
            icon: "ShoppingBag",
            color: "bg-amber-50 text-amber-600",
          },
          {
            label: "Detail nerd",
            icon: "Sparkles",
            color: "bg-violet-50 text-violet-500",
          },
        ],
      },
      contact: {
        email: "sharmasandhya95185@gmail.com",
        heading: "Let's create\nsomething together",
        description:
          "I'm always open to new opportunities, collaborations, or just a friendly chat. Drop me a message and I'll get back to you!",
      },
      seo: {
        metaTitle: "Sandhya Sharma — Frontend Engineer",
        metaDescription:
          "Frontend engineer who builds pixel-perfect, high-performance web experiences with modern technologies.",
        siteUrl: "https://sandhyasharma.dev",
      },
    },
  });
  console.log("Site settings seeded");

  // ── Seed Social Links ──
  await payload.updateGlobal({
    slug: "social-links",
    data: {
      links: [
        {
          platform: "GitHub",
          url: "https://github.com/SandhyaSharmaaa",
          icon: "Github",
          label: "Visit GitHub profile",
          visible: true,
        },
        {
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/sandhya-sharmaaa/",
          icon: "Linkedin",
          label: "Visit LinkedIn profile",
          visible: true,
        },
        {
          platform: "Medium",
          url: "https://medium.com/@sandhyaaa",
          icon: "BookOpen",
          label: "Read articles on Medium",
          visible: true,
        },
        {
          platform: "Instagram",
          url: "https://www.instagram.com/sandhya.sharma350/",
          icon: "Instagram",
          label: "Follow on Instagram",
          visible: true,
        },
        {
          platform: "Email",
          url: "mailto:sharmasandhya95185@gmail.com",
          icon: "Mail",
          label: "Send an email",
          visible: true,
        },
      ],
    },
  });
  console.log("Social links seeded");

  // ── Seed Navigation ──
  await payload.updateGlobal({
    slug: "navigation",
    data: {
      navLinks: [
        { label: "Sandhya", href: "#home", external: false },
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
      ],
      sectionLinks: [
        { label: "About", href: "#about", order: 1 },
        { label: "Experience", href: "#experience", order: 2 },
        { label: "Skills", href: "#skills", order: 3 },
        { label: "Projects", href: "#projects", order: 4 },
        { label: "Blog", href: "#blog", order: 5 },
        { label: "Contact", href: "#contact", order: 6 },
      ],
    },
  });
  console.log("Navigation seeded");

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
