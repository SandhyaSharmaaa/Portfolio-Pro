import Parser from "rss-parser";
import type { MediumArticle } from "./types";

const MEDIUM_USERNAME = "sandhyaaa";

type MediumFeedItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  categories?: string[];
  content?: string;
  contentSnippet?: string;
  "content:encoded"?: string;
};

const parser = new Parser<Record<string, never>, MediumFeedItem>({
  customFields: {
    item: [["content:encoded", "content:encoded"]],
  },
});

function extractThumbnail(html: string): string {
  // Medium stores thumbnails as the first <img> in content:encoded
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  return match?.[1] || "";
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractDescription(html: string): string {
  const text = stripHtml(html);
  if (text.length <= 180) return text;
  // Cut at the last space before 180 chars
  const truncated = text.slice(0, 180);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 100 ? truncated.slice(0, lastSpace) : truncated) + "...";
}

export async function fetchMediumArticles(): Promise<MediumArticle[]> {
  try {
    const feed = await parser.parseURL(
      `https://medium.com/feed/@${MEDIUM_USERNAME}`,
    );

    return (feed.items || []).slice(0, 5).map((item) => {
      const fullContent =
        item["content:encoded"] || item.content || "";

      return {
        title: item.title || "Untitled",
        link: item.link || "",
        pubDate: item.pubDate || "",
        categories: item.categories || [],
        thumbnail: extractThumbnail(fullContent),
        description: extractDescription(
          fullContent || item.contentSnippet || "",
        ),
      };
    });
  } catch (error) {
    console.error("Failed to fetch Medium articles:", error);
    return [];
  }
}
