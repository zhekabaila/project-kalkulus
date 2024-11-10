import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-web.ruangguru.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
