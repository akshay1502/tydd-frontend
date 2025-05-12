import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/api/media/file/**",
      },
      {
        protocol: "https",
        hostname: "tydd.vercel.app",
        pathname: "/api/media/file/**",
      },
    ],
  },
};

export default nextConfig;
