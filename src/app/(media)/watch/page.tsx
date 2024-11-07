'use client'

import { useState, useEffect } from 'react'
import { trpc } from '@/utils/trpc'
import VideoPlayer from '@/components/video/video-player'
import ViewCounter from '@/components/counters/view-counter'
import LikeCounter from '@/components/counters/like-counter'

export default function WatchPage() {
  const { data, isLoading, error } = trpc.video.getVideos.useQuery()
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(1) // Valor por defecto: id 1

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data || data.length === 0) return <div>No videos available</div>

  // Actualiza `selectedVideo` para que siempre tenga un valor por defecto
  const selectedVideo =
    data.find((video) => video.id === selectedVideoId) || data[0]

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const videoId = parseInt(event.target.value, 10)
    setSelectedVideoId(videoId)
  }

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='w-full mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Select a Video</h2>
        <select
          onChange={handleSelectChange}
          className='p-2 border rounded w-full'
          defaultValue={selectedVideoId ?? ''}
        >
          {data.map((video) => (
            <option key={video.id} value={video.id}>
              {video.title}
            </option>
          ))}
        </select>
      </div>

      {selectedVideo && (
        <div className='w-full mt-4'>
          <VideoPlayer video={selectedVideo} />
          <div className='mt-2'>
            <ViewCounter
              videoId={selectedVideo.id}
              initialViews={selectedVideo.views}
            />
            <LikeCounter
              videoId={selectedVideo.id}
              initialLikes={selectedVideo.likes}
            />
          </div>
        </div>
      )}
    </div>
  )
}
