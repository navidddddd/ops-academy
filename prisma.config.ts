// prisma.config.ts
import { defineConfig } from "@prisma/config";
import { config } from "dotenv";

// Explicitly load the .env file so the Prisma CLI can read the variables securely
config();

export default defineConfig({
  // Connection for normal queries via connection pooler
  // @ts-ignore
  datasource: {
    url: process.env.DATABASE_URL,
  },

  // Direct connection for schema migrations
  // @ts-ignore
  migrate: {
    url: process.env.DIRECT_URL,
  },
});
