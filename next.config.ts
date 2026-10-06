import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger Node.js Web Apps runs `next start` against this build.
  // For shared-hosting FTP uploads, use `npm run build:hostinger-static` instead.
  poweredByHeader: false,
};

export default nextConfig;
