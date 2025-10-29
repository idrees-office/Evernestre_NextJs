import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


const nextConfig = {
  images: {
    domains: ['test_backend.leadshub.ae', 'i.pravatar.cc', 'evernest.ae'],
    // or using remotePatterns for more control (recommended in newer Next.js versions)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test_backend.leadshub.ae',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'i.evernest.ae',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
