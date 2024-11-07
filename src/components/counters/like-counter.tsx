'use client'

import { useState } from 'react'
import { trpc } from '@/utils/trpc'

type LikeCounterProps = {
  videoId: number
  initialLikes: number
}

export default function LikeCounter({
  videoId,
  initialLikes,
}: LikeCounterProps) {
  const [liked, setLiked] = useState(false) // Nuevo estado para controlar si se ha hecho "like"
  const { mutate, data } = trpc.video.incrementLike.useMutation({
    onSuccess: () => {
      setLiked(!liked)
    },
  })

  const currentLikes = data ? data.video.likes : initialLikes

  return (
    <div>
      <p>Likes: {currentLikes}</p>
      <button
        onClick={() => mutate({ videoId })}
        className={`px-3 py-1 rounded ${
          liked ? 'bg-red-600' : 'bg-red-500'
        } text-white`}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  )
}
