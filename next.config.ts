import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` emits a deployable site in /out
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
