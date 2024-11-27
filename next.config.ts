import withPWAInit from '@ducanh2912/next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
})

const nextConfig = withPWA({
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
  reactStrictMode: true,
})

export default nextConfig
