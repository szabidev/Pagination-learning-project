/** @type {import('next').NextConfig} */
const nextConfig = {
  // config so that I can use unsplash.com images
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
