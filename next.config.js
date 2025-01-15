/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! 仅在生产构建时忽略类型错误
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 