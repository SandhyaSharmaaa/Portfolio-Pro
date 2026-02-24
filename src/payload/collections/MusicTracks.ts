import type { CollectionConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const MusicTracks: CollectionConfig = {
  slug: "music-tracks",
  upload: {
    staticDir: "public/music",
    mimeTypes: ["audio/mpeg"],
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
      name: "externalUrl",
      type: "text",
      admin: {
        description:
          "Optional external URL (e.g. CDN/S3). If provided, this is used instead of the uploaded file.",
      },
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
  ],
};
