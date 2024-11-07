import { router } from '@/server/trpc'
import { videoRouter } from '@/server/routers/video'

export const appRouter = router({
  video: videoRouter,
})

export type AppRouter = typeof appRouter
