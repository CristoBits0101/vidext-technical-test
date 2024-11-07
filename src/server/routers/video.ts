import { router, procedure } from '@/server/trpc'
import { z } from 'zod'

export const videoRouter = router({
  getVideos: procedure.query(() => {
    return [
      { id: 1, title: 'Video 1', views: 100, likes: 10 },
      { id: 2, title: 'Video 2', views: 150, likes: 15 },
    ]
  }),
  incrementView: procedure
    .input(z.object({ videoId: z.number() }))
    .mutation(({ input }) => {
      console.log(`Incrementando vistas para el video ID ${input.videoId}`)
      return { success: true }
    }),
})
