import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined, // <=== static export for the GitHub Pages build only
  // reactStrictMode: true,
  turbopack: {
    root: fileURLToPath(new URL('.', import.meta.url)), // <=== this project folder, not ~/
  },
};

export default nextConfig;
