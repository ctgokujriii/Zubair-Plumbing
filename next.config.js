/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The only image through next/image is a 25 KB local webp; optimisation
    // would spend the Vercel image quota to save almost nothing.
    unoptimized: true,
  },
};

module.exports = nextConfig;
