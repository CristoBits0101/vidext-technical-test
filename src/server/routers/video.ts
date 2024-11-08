// Import mock video data
import videoData from '@/mocks/videoData.json'

// Import router and procedure helpers from TRPC
import { router, procedure } from '@/server/trpc'

// Import Zod for input validation
import { z } from 'zod'

// Define the video router with various procedures
export const videoRouter = router({
  // Procedure to get all videos
  getVideos: procedure.query(() => {
    return videoData
  }),

  // Procedure to increment the view count of a specific video
  incrementView: procedure
    // Validate input schema
    .input(z.object({ videoId: z.number() }))
    // Find video and increase views
    .mutation(({ input }) => {
      const videoIndex = videoData.findIndex((v) => v.id === input.videoId)
      if (videoIndex === -1) throw new Error('Video not found')
      videoData[videoIndex].views += 1
      return { success: true, video: videoData[videoIndex] }
    }),

  // Procedure to toggle like status and update the like count of a video
  incrementLike: procedure
    // Validate input schema
    .input(z.object({ videoId: z.number() }))
    // Find video and increase views
    .mutation(({ input }) => {
      const videoIndex = videoData.findIndex((v) => v.id === input.videoId)
      if (videoIndex === -1) throw new Error('Video not found')
      const video = videoData[videoIndex]
      video.likes += video.likedByUser ? -1 : 1
      video.likedByUser = !video.likedByUser
      return { success: true, video }
    }),
})
