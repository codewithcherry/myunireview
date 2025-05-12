import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'cdn.pixabay.com',       // Your primary domain
      'images.unsplash.com', // Example external domain
      'lh3.googleusercontent.com', // Main Google user content domain
      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'img.freepik.com',
      'www.shutterstock.com',
      'lh6.googleusercontent.com',
      "images.shiksha.com",
      "images.squarespace-cdn.com",
      "www.georgecollege.org",
      "www.siecindia.com",
      "siuk-europe.s3.amazonaws.com",
      '*.googleusercontent.com', // Wildcard for all subdomains
      'platform-lookaside.fbsbx.com', // Facebook CDN
      'avatars.githubusercontent.com' // GitHub avatars

    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
