import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true
  },
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
    removeConsole: process.env.NODE_ENV ===  "production"
  },
  compress: true,
  async headers() {
    return [
      {
        source: "/:path*.(webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ]
  }
  /* config options here */
};

export default nextConfig;
