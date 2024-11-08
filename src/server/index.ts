// We import the server router
import { router } from '@/server/trpc'

// We import the route with the procedures
import { videoRouter } from '@/server/routers/video'

// Create the main app router
export const appRouter = router({
  video: videoRouter,
})

// Export the type of the app router
export type AppRouter = typeof appRouter
