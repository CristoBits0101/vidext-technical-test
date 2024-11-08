import { router, procedure } from '@/server/trpc'
import { z } from 'zod'
import videoData from '@/mocks/videoData.json'

export const videoRouter = router({
  getVideos: procedure.query(() => {
    return videoData
  }),

  incrementView: procedure
    .input(z.object({ videoId: z.number() }))
    .mutation(({ input }) => {
      const videoIndex = videoData.findIndex((v) => v.id === input.videoId)
      if (videoIndex === -1) throw new Error('Video not found')
      videoData[videoIndex].views += 1
      return { success: true, video: videoData[videoIndex] }
    }),

  incrementLike: procedure
    .input(z.object({ videoId: z.number() }))
    .mutation(({ input }) => {
      const videoIndex = videoData.findIndex((v) => v.id === input.videoId)
      if (videoIndex === -1) throw new Error('Video not found')
      const video = videoData[videoIndex]
      video.likes += video.likedByUser ? -1 : 1
      video.likedByUser = !video.likedByUser
      return { success: true, video }
    }),
})
