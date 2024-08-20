/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
        pathname: "**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
