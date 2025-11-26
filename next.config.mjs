/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-personal",
  assetPrefix: "/portfolio-personal",
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
