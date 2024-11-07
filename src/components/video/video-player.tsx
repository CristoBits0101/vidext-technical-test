'use client'

import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { trpc } from '@/utils/trpc'

type VideoPlayerProps = {
  video: {
    id: number
    title: string
    url: string
    views: number
  }
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  const [currentViews, setCurrentViews] = useState(video.views)
  const [hasIncremented, setHasIncremented] = useState(false)

  const { mutate } = trpc.video.incrementView.useMutation({
    onSuccess: (updatedVideo) => {
      setCurrentViews(updatedVideo.video.views)
    },
  })

  const handleStart = () => {
    if (!hasIncremented) {
      mutate({ videoId: video.id })
      setHasIncremented(true)
    }
  }

  return (
    <div className='w-full bg-gray-800 p-4 mb-4'>
      <h2 className='text-white mb-2'>{video.title}</h2>
      <p className='text-white'>Views: {currentViews}</p>
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
    </div>
  )
}
