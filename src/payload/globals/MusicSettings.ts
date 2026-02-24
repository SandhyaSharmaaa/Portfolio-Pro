import type { GlobalConfig } from "payload";
import { isAdmin, isPublic } from "../access";

export const MusicSettings: GlobalConfig = {
  slug: "music-settings",
  access: {
    read: isPublic,
    update: isAdmin,
  },
  fields: [
    {
      name: "enabled",
      type: "checkbox",
      defaultValue: true,
      label: "Show music player",
    },
    {
      name: "autoplay",
      type: "checkbox",
      defaultValue: false,
      label: "Auto-play on page load",
    },
    {
      name: "volume",
      type: "number",
      defaultValue: 0.15,
      min: 0,
      max: 1,
      admin: {
        step: 0.05,
        description: "Volume level (0 = muted, 1 = max)",
      },
    },
  ],
};
