'use client'

import Image from 'next/image'
import thumbUpWhite from '@/assets/icons/thumb_up_white.svg'
import thumbUpBlack from '@/assets/icons/thumb_up_black.svg'
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

  let textDisplay: string = currentLikes.toString()
  if (currentLikes >= 1_000 && currentLikes < 1_000_000) {
    textDisplay = (currentLikes / 1_000).toFixed(1) + ' K'
  } else if (currentLikes >= 1_000_000 && currentLikes < 1_000_000_000) {
    textDisplay = (currentLikes / 1_000_000).toFixed(1) + ' M'
  } else if (currentLikes >= 1_000_000_000) {
    textDisplay = (currentLikes / 1_000_000_000).toFixed(1) + ' B'
  }

  return (
    <div className='w-fit h-fit'>
      <Button
        onClick={() => mutate({ videoId })}
        variant='secondary'
        className='bg-zinc-200 rounded-full hover:bg-zinc-300 shadow-none border-none outline-none'
      >
        {/* Display the appropriate image based on the `liked` state */}
        <Image
          src={liked ? thumbUpBlack : thumbUpWhite}
          alt={liked ? 'Unlike' : 'Like'}
          width={20}
          height={20}
        />
        <span>{textDisplay}</span>
      </Button>
    </div>
  )
}
