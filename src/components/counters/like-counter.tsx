'use client'

import { Button } from '@/components/ui/button'
import { trpc } from '@/utils/trpc'
import { useState } from 'react'

type LikeCounterProps = {
  videoId: number
  initialLikes: number
}

export default function LikeCounter({
  videoId,
  initialLikes,
}: LikeCounterProps) {
  const [liked, setLiked] = useState(false)
  const { mutate, data } = trpc.video.incrementLike.useMutation({
    onSuccess: () => {
      setLiked(!liked)
    },
  })

  const currentLikes = data ? data.video.likes : initialLikes

  return (
    <div className=''>
      <Button
        onClick={() => mutate({ videoId })}
        className={`px-3 py-1 rounded ${
          liked ? 'bg-red-600' : 'bg-red-500'
        } text-white`}
      >
        {liked ? 'Unlike' : 'Like'} <span>{currentLikes}</span>
      </Button>
    </div>
  )
}
