// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-portfolio",
  images: {
    unoptimized: true, // GitHub Pages no soporta la optimización de imágenes de Next.js
  },
};

module.exports = nextConfig;
