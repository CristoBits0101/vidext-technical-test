'use client'

import React from 'react'
import ReactPlayer from 'react-player'

type VideoPlayerProps = {
  video: {
    id: number
    title: string
    url: string
  }
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div className='w-full bg-gray-800 p-4 mb-4'>
      <h2 className='text-white mb-2'>{video.title}</h2>
      <ReactPlayer
        url={`${video.url}?modestbranding=1&controls=1&rel=0`}
        controls
        width='100%'
        height='auto'
        className='aspect-video'
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
