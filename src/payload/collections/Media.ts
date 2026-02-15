import type { CollectionConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    mimeTypes: ["image/*"],
  },
  access: {
    create: isAdmin,
    read: isPublic,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
