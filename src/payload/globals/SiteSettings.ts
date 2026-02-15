import type { GlobalConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    // ── Hero ──
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "firstName", type: "text", required: true },
        { name: "lastName", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "avatarUrl", type: "text", defaultValue: "/sandhya.svg" },
        { name: "resumeUrl", type: "text", defaultValue: "/resume.pdf" },
      ],
    },
    // ── About ──
    {
      name: "about",
      type: "group",
      fields: [
        { name: "heading", type: "text", defaultValue: "Crafting pixels\nwith purpose" },
        { name: "paragraph1", type: "textarea", required: true },
        { name: "paragraph2", type: "textarea", required: true },
        {
          name: "stats",
          type: "array",
          fields: [
            { name: "value", type: "text", required: true },
            { name: "label", type: "text", required: true },
          ],
        },
        // Bento card fields
        { name: "statusText", type: "text", defaultValue: "Available for work" },
        { name: "statusSubtext", type: "text", defaultValue: "Open to full-time roles" },
        { name: "roleLabel", type: "text", defaultValue: "Frontend Engineer" },
        // Code snippet
        {
          name: "codeSnippet",
          type: "group",
          fields: [
            { name: "role", type: "text", defaultValue: "Frontend Dev" },
            { name: "fuel", type: "text", defaultValue: "old songs & curiosity" },
            { name: "motto", type: "text", defaultValue: "ship fast, ship pretty" },
          ],
        },
        // Currently doing
        {
          name: "currently",
          type: "array",
          fields: [
            { name: "text", type: "text", required: true },
            { name: "highlight", type: "text", required: true },
          ],
        },
        // Vibes
        {
          name: "vibes",
          type: "array",
          fields: [
            { name: "text", type: "text", required: true },
          ],
        },
        // Personality pills
        {
          name: "personalityPills",
          type: "array",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "icon", type: "text", required: true },
            { name: "color", type: "text", required: true },
          ],
        },
      ],
    },
    // ── Contact ──
    {
      name: "contact",
      type: "group",
      fields: [
        { name: "email", type: "email", required: true },
        { name: "heading", type: "text", defaultValue: "Let's create\nsomething together" },
        { name: "description", type: "textarea" },
      ],
    },
    // ── SEO ──
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "metaTitle", type: "text" },
        { name: "metaDescription", type: "textarea" },
        { name: "siteUrl", type: "text" },
      ],
    },
  ],
};
