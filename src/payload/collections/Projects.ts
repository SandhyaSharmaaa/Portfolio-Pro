import type { CollectionConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order"],
  },
  access: {
    create: isAdmin,
    read: isPublic,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "imageUrl",
      type: "text",
      admin: {
        description: "Fallback image URL if no media upload is provided",
      },
    },
    {
      name: "techStack",
      type: "array",
      fields: [
        {
          name: "tech",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "liveUrl",
      type: "text",
    },
    {
      name: "githubUrl",
      type: "text",
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
