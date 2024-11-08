'use client'

import VideoSelector from '@/components/video/video-selector'
import VideoPlayer from '@/components/video/video-player'
import { trpc } from '@/utils/trpc'
import { useState } from 'react'

export default function WatchPage() {
  // Query videos
  const { data, isLoading, error } = trpc.video.getVideos.useQuery()

  // Video to show
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(1)

  // Validations
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data || data.length === 0) return <div>⚠️ No videos available</div>

  const selectedVideo =
    data.find((video) => video.id === selectedVideoId) || data[0]

  return (
    <div className='flex flex-col w-full h-full gap-4 bg-yellow-50'>
      {/* Video Selector */}
      <VideoSelector
        videos={data}
        selectedVideoId={selectedVideoId}
        onVideoSelect={setSelectedVideoId}
      />
      {/* Video Player */}
      {selectedVideo && (
        <div className='w-full bg-red-100'>
          <VideoPlayer video={selectedVideo} />
        </div>
      )}
    </div>
  )
}
