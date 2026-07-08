import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // این خط به Next.js می‌گوید که Prisma را فشرده نکند و به آن دست نزند
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;
