import type { GlobalConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const SocialLinks: GlobalConfig = {
  slug: "social-links",
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    {
      name: "links",
      type: "array",
      fields: [
        { name: "platform", type: "text", required: true },
        { name: "url", type: "text", required: true },
        { name: "icon", type: "text", required: true },
        { name: "label", type: "text", required: true },
        {
          name: "visible",
          type: "checkbox",
          defaultValue: true,
        },
      ],
    },
  ],
};
