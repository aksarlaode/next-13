import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  typescript: {
    // TODO: turn this off once we get things more stable
    ignoreBuildErrors: true,
  },
};

export default config;
