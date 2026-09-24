import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { qualities: [75, 90, 100] },
  // Page URLs in the registry and all internal links end with "/"; without this every link would 308-redirect.
  trailingSlash: true,
};

export default nextConfig;
