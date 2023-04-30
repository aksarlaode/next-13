import { cookies } from "next/headers";
import superjson from "superjson";

import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";
//import { createContext } from "~/server/context";
import { createTRPCNextLayout } from "~/trpc/@trpc/next-layout";
import { createGetUser } from "./get-user";

export const rsc = createTRPCNextLayout({
  router: appRouter,
  transformer: superjson,
  createContext() {
    return createTRPCContext({
      type: "rsc",
      // We seem to be allowed to call cookies() here.
      getUser: createGetUser(cookies()),
    });
  },
});
