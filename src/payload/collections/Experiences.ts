import type { CollectionConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  admin: {
    useAsTitle: "role",
    defaultColumns: ["role", "company", "period", "order"],
  },
  access: {
    create: isAdmin,
    read: isPublic,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Full-time", value: "Full-time" },
        { label: "Internship", value: "Internship" },
        { label: "Contract", value: "Contract" },
        { label: "Freelance", value: "Freelance" },
      ],
    },
    {
      name: "period",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "skills",
      type: "array",
      fields: [
        {
          name: "skill",
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
