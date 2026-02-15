import type { CollectionConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const Skills: CollectionConfig = {
  slug: "skills",
  admin: {
    useAsTitle: "category",
    defaultColumns: ["category", "order"],
  },
  access: {
    create: isAdmin,
    read: isPublic,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "tools",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
      ],
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
