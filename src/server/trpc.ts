// Import tRPC for creating the server
import { initTRPC } from '@trpc/server'

// Initialize the tRPC instance
const trpc = initTRPC.create()

// Export reusable helpers for building routers and procedures
export const router = trpc.router
export const procedure = trpc.procedure
