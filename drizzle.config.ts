import "dotenv/config";
import type { Config } from "drizzle-kit";

//import { env } from "./src/env.mjs";

const config: Config = {
  schema: "./src/db/schema.ts",
  connectionString: process.env.DB_URL,
  //connectionString: env.DB_URL,
};

export default config;
