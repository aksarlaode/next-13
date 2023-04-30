import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

//import { env } from "../env.mjs";

// Create the connection.
const connection = connect({
  //host: env.DB_HOST,
  //username: env.DB_USERNAME,
  //password: env.DB_HOST,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

export const db = drizzle(connection);
