/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "virmjpqxaajeqwjohjll.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Added Unsplash domain
      },
    ],
  },
};

export default nextConfig;
