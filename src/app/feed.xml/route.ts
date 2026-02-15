import { NextResponse } from "next/server";
import { fetchMediumArticles } from "@/lib/medium";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = await fetchMediumArticles();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sandhyasharma.dev";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sandhya Sharma — Blog</title>
    <link>${siteUrl}</link>
    <description>Frontend engineering insights, tutorials, and thoughts by Sandhya Sharma.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (article) => `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(article.link)}</link>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${article.pubDate ? new Date(article.pubDate).toUTCString() : ""}</pubDate>
      <guid isPermaLink="true">${escapeXml(article.link)}</guid>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
