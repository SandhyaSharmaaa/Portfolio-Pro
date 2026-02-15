interface StructuredDataProps {
  data: Record<string, unknown>;
  id: string;
}

function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  email: string;
  image: string;
  sameAs: string[];
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  url,
  email,
  image,
  sameAs,
}: PersonSchemaProps) {
  return (
    <StructuredData
      id="person-schema"
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${url}#person`,
        name,
        jobTitle,
        description,
        url,
        email: `mailto:${email}`,
        image: {
          "@type": "ImageObject",
          url: image,
        },
        sameAs: sameAs.filter((u) => !u.startsWith("mailto:")),
        knowsAbout: [
          "Frontend Development",
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Web Performance",
          "UI/UX Design",
        ],
      }}
    />
  );
}

interface WebSiteSchemaProps {
  name: string;
  url: string;
  description: string;
}

export function WebSiteSchema({ name, url, description }: WebSiteSchemaProps) {
  return (
    <StructuredData
      id="website-schema"
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${url}#website`,
        name,
        url,
        description,
        publisher: { "@id": `${url}#person` },
        inLanguage: "en-US",
      }}
    />
  );
}

interface ProfilePageSchemaProps {
  name: string;
  url: string;
  description: string;
  image: string;
}

export function ProfilePageSchema({
  name,
  url,
  description,
  image,
}: ProfilePageSchemaProps) {
  return (
    <StructuredData
      id="profilepage-schema"
      data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${url}#profilepage`,
        name: `${name} — Portfolio`,
        url,
        description,
        dateModified: new Date().toISOString(),
        mainEntity: { "@id": `${url}#person` },
        image: { "@type": "ImageObject", url: image },
        inLanguage: "en-US",
      }}
    />
  );
}
