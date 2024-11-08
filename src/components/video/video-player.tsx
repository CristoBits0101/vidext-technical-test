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
    <div className='w-full h-fit'>
      <div className='w-full rounded-3xl border border-neutral-200/75 bg-[#F7F7F5] p-2.5'>
        <div className='relative mx-auto w-full overflow-hidden rounded-xl bg-neutral-300 bg-opacity-40 p-2 ring-1 ring-black/5'>
          <ReactPlayer
            url={`${video.url}?modestbranding=1&controls=1&rel=0`}
            controls
            width='100%'
            height='auto'
            className='aspect-video rounded-2xl'
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
      </div>
      <div className='w-full h-fit px-5'>
        <h2 className='py-2 w-full truncate font-medium text-xl'>
          {video.title}
        </h2>
        <div className='w-full h-fit flex gap-4 items-center'>
          {/* Current views */}
          <span className='w-fit truncate bg-zinc-200 rounded-full h-9 px-4 flex items-center justify-center'>
            {currentViews &&
              `${currentViews} ${currentViews > 10 ? 'Visualizaciones' : ''}`}
          </span>
          {/* Like Counter */}
          <LikeCounter videoId={video.id} initialLikes={video.likes} />
        </div>
      </div>
    </div>
  )
}
