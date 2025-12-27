import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */

  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/healthy-food",
  assetPrefix: "/healthy-food/",
}

export default nextConfig
