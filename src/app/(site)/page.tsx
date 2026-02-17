import { SiteNavbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { FixedSocialDock } from "@/components/ui/fixed-social-dock";
import {
  PersonSchema,
  WebSiteSchema,
  ProfilePageSchema,
} from "@/components/seo/structured-data";
import { fetchMediumArticles } from "@/lib/medium";
import {
  getSiteSettings,
  getSocialLinks,
  getNavigation,
  getExperiences,
  getProjects,
  getSkills,
} from "@/lib/payload";
import type {
  Experience as ExperienceType,
  Project,
  Skill,
  SocialLink,
  SectionLink,
  AboutProps,
  HeroProps,
  ContactProps,
} from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [siteSettings, socialLinksData, navigation, experienceDocs, projectDocs, skillDocs, articles] =
    await Promise.all([
      getSiteSettings(),
      getSocialLinks(),
      getNavigation(),
      getExperiences(),
      getProjects(),
      getSkills(),
      fetchMediumArticles(),
    ]);

  // Transform CMS data to serializable props
  const socialLinks: SocialLink[] = (
    (socialLinksData as Record<string, unknown>).links as Array<{
      platform: string;
      url: string;
      icon: string;
      label: string;
      visible?: boolean;
    }>
  )
    ?.filter((l) => l.visible !== false)
    .map((l) => ({
      platform: l.platform,
      url: l.url,
      icon: l.icon,
      label: l.label,
    })) || [];

  const hero = (siteSettings as Record<string, unknown>).hero as Record<string, string>;
  const about = (siteSettings as Record<string, unknown>).about as Record<string, unknown>;
  const contact = (siteSettings as Record<string, unknown>).contact as Record<string, string>;
  const nav = navigation as Record<string, unknown>;

  const sectionLinks: SectionLink[] =
    ((nav.sectionLinks as Array<{ label: string; href: string }>) || []).map((l) => ({
      label: l.label,
      href: l.href,
    }));

  const heroProps: HeroProps = {
    name: hero.name || "Sandhya Sharma",
    firstName: hero.firstName || "Sandhya",
    title: hero.title || "Frontend Engineer",
    description: hero.description || "",
    avatarUrl: hero.avatarUrl || "/sandhya.svg",
    resumeUrl: hero.resumeUrl || "/resume.pdf",
    socialLinks,
  };

  const aboutStats = (about.stats as Array<{ value: string; label: string }>) || [];
  const codeSnippet = (about.codeSnippet as Record<string, string>) || {};
  const currentlyItems = (about.currently as Array<{ text: string; highlight: string }>) || [];
  const vibesItems = (about.vibes as Array<{ text: string }>) || [];
  const pillItems =
    (about.personalityPills as Array<{ label: string; icon: string; color: string }>) || [];

  const aboutProps: AboutProps = {
    heading: (about.heading as string) || "Crafting pixels\nwith purpose",
    paragraph1: (about.paragraph1 as string) || "",
    paragraph2: (about.paragraph2 as string) || "",
    stats: aboutStats.map((s) => ({ value: s.value, label: s.label })),
    statusText: (about.statusText as string) || "Available for work",
    statusSubtext: (about.statusSubtext as string) || "Open to full-time roles",
    roleLabel: (about.roleLabel as string) || "Frontend Engineer",
    codeSnippet: {
      role: codeSnippet.role || "Frontend Dev",
      fuel: codeSnippet.fuel || "old songs & curiosity",
      motto: codeSnippet.motto || "ship fast, ship pretty",
    },
    currently: currentlyItems.map((c) => ({ text: c.text, highlight: c.highlight })),
    vibes: vibesItems.map((v) => v.text),
    personalityPills: pillItems.map((p) => ({
      label: p.label,
      icon: p.icon,
      color: p.color,
    })),
  };

  const experiences: ExperienceType[] = experienceDocs.map((doc: Record<string, unknown>) => ({
    role: doc.role as string,
    company: doc.company as string,
    type: doc.type as string,
    period: doc.period as string,
    location: (doc.location as string) || undefined,
    description: (doc.description as string) || undefined,
    skills: ((doc.skills as Array<{ skill: string }>) || []).map((s) => s.skill),
  }));

  const projects: Project[] = projectDocs.map((doc: Record<string, unknown>) => {
    const mediaImage = doc.image as Record<string, unknown> | null;
    let imageUrl = (doc.imageUrl as string) || "/images/projects/placeholder.png";
    if (mediaImage && typeof mediaImage === "object" && mediaImage.url) {
      imageUrl = mediaImage.url as string;
    } else if (typeof doc.image === "string" && doc.image) {
      imageUrl = doc.image;
    }

    return {
      title: doc.title as string,
      description: doc.description as string,
      tech: ((doc.techStack as Array<{ tech: string }>) || []).map((t) => t.tech),
      url: (doc.liveUrl as string) || (doc.githubUrl as string) || "#",
      image: imageUrl,
    };
  });

  const skills: Skill[] = skillDocs.map((doc: Record<string, unknown>) => ({
    category: doc.category as string,
    tools: ((doc.tools as Array<{ name: string }>) || []).map((t) => t.name),
  }));

  const contactProps: ContactProps = {
    email: contact.email || "",
    heading: contact.heading || "Let's create\nsomething together",
    description:
      contact.description ||
      "I'm always open to new opportunities, collaborations, or just a friendly chat. Drop me a message and I'll get back to you!",
    socialLinks,
  };

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sandhyasharma.dev";
  const socialUrls = socialLinks
    .map((l) => l.url)
    .filter((u) => !u.startsWith("mailto:"));

  return (
    <>
      {/* JSON-LD Structured Data */}
      <PersonSchema
        name={heroProps.name}
        jobTitle={heroProps.title}
        description={heroProps.description}
        url={siteUrl}
        email={contactProps.email}
        image={`${siteUrl}${heroProps.avatarUrl}`}
        sameAs={socialUrls}
      />
      <WebSiteSchema
        name={`${heroProps.name} Portfolio`}
        url={siteUrl}
        description={heroProps.description}
      />
      <ProfilePageSchema
        name={heroProps.name}
        url={siteUrl}
        description={heroProps.description}
        image={`${siteUrl}${heroProps.avatarUrl}`}
      />

      <SiteNavbar
        sectionLinks={sectionLinks}
        firstName={heroProps.firstName}
        resumeUrl={heroProps.resumeUrl}
      />
      <FixedSocialDock links={socialLinks} />
      <main className="relative">
        <Hero {...heroProps} />
        <About {...aboutProps} />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Blog articles={articles} />
        <Contact {...contactProps} />
      </main>
      <Footer name={heroProps.name} />
    </>
  );
}
