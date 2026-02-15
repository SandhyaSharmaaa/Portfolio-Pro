import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@icons-pack/react-simple-icons"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
    ],
  },
};

export default nextConfig;
