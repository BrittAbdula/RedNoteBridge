/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! 仅在生产构建时忽略类型错误
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig 