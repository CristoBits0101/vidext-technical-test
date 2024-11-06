import { initTRPC } from '@trpc/server'

// tRPC initialization
const t = initTRPC.create()

// Export reusable helpers
export const router = t.router
export const publicProcedure = t.procedure
