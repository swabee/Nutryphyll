import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ik.imagekit.io'],
    unoptimized:true
  },
  output: 'export',
  
};

export default nextConfig;
