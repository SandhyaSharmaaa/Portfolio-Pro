import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@icons-pack/react-simple-icons"],
  },
};

export default nextConfig;
