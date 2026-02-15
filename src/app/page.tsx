import { SiteNavbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { fetchMediumArticles } from "@/lib/medium";

export const revalidate = 600; // ISR: revalidate every 10 minutes

export default async function Home() {
  const articles = await fetchMediumArticles();

  return (
    <>
      <SiteNavbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog articles={articles} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
