import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sandhya Sharma — Frontend Engineer",
    short_name: "Sandhya",
    description:
      "Frontend engineer who builds pixel-perfect, high-performance web experiences with modern technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFBFA",
    theme_color: "#FFFBFA",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
