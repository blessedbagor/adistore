import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL, // Pass the DATABASE_URL to Next.js
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME, // If you're using public environment variables
    NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    NEXT_PUBLIC_APP_DEVELOPER: process.env.NEXT_PUBLIC_APP_DEVELOPER,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  // Add other custom config options if needed
};

export default nextConfig;
