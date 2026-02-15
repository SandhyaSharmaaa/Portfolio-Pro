import type { GlobalConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    {
      name: "navLinks",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
        {
          name: "external",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    },
    {
      name: "sectionLinks",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
        { name: "order", type: "number", defaultValue: 0 },
      ],
    },
  ],
};
