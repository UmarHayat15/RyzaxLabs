/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 60 * 60 * 24, // 24h

    remotePatterns: [
      // Your existing hosts
      { protocol: "https", hostname: "expert-themes.com", pathname: "/html/globex/images/**" },
      { protocol: "https", hostname: "seatechconsulting.com", pathname: "/Images/**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
      { protocol: "https", hostname: "cdn.simpleicons.org", pathname: "/**" },
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },

      // ✅ Add Unsplash
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "plus.unsplash.com", pathname: "/**" },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;