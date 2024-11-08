'use client'

import LikeCounter from '@/components/counters/like-counter'
import ReactPlayer from 'react-player'
import React, { useState } from 'react'
import { trpc } from '@/utils/trpc'

type VideoPlayerProps = {
  video: {
    id: number
    title: string
    url: string
    views: number
    likes: number
  }
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  // Update views on each playback
  const [currentViews, setCurrentViews] = useState(video.views)

  // Check if the user has liked the video
  const [hasIncremented, setHasIncremented] = useState(false)

  // 
  const { mutate } = trpc.video.incrementView.useMutation({
    onSuccess: (updatedVideo) => {
      setCurrentViews(updatedVideo.video.views)
    },
  })

  // 
  const handleStart = () => {
    if (!hasIncremented) {
      mutate({ videoId: video.id })
      setHasIncremented(true)
    }
  }

  return (
    <div className='w-full bg-gray-800'>
      <div>
        
      </div>
      <ReactPlayer
        url={`${video.url}?modestbranding=1&controls=1&rel=0`}
        controls
        width='100%'
        height='auto'
        className='aspect-video'
        onStart={handleStart}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              controls: 1,
              showinfo: 0,
            },
          },
        }}
      />
      <div>
        <h2 className='text-white'>{video.title}</h2>
        <div>
          {/* Current views */}
          <p className='text-white'>Views: {currentViews}</p>
          {/* Like Counter */}
          <LikeCounter videoId={video.id} initialLikes={video.likes} />
        </div>
      </div>
    </div>
  )
}
