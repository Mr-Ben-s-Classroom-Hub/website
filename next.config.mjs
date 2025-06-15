/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // Remove basePath and assetPrefix if using custom domain
  // For GitHub Pages with repository name, uncomment and update:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
}

export default nextConfig
