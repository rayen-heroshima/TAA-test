import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.netzeronews.io',
      },
      {
        protocol: 'https',
        hostname: 'www.euractiv.fr',
      },
      {
        protocol: 'https',
        hostname: 'ecoprism.com',
      },
      {
        protocol: 'https',
        hostname: 'white-tillet.com',
      },
      {
        protocol: 'https',
        hostname: 'fastercapital.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'minurso.unmissions.org',
      },
      
    ],
  },
  trailingSlash: false, // Ensure URLs are handled without trailing slashes
  output: 'standalone', // Optimize for deployment on serverless platforms like Vercel
  async rewrites() {
    return [
      {
        source: '/:path*', // Rewrite all paths to handle client-side routing
        destination: '/',
      },
    ];
  },
};

export default nextConfig;