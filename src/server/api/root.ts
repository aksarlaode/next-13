/**
 * This file contains the root router of your tRPC-backend
 */

import { exampleRouter } from "./routers/example";
import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  whoami: publicProcedure.query(({ ctx }) => {
    return ctx.user ?? null;
  }),
});

export type AppRouter = typeof appRouter;
