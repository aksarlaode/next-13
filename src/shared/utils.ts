import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import { type AppRouter } from "~/server/api/root";

export type Inputs = inferRouterInputs<AppRouter>;
export type Outputs = inferRouterOutputs<AppRouter>;
