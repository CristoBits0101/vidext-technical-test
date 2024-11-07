'use client'

import { trpc } from '@/utils/trpc'

type ViewCounterProps = {
  videoId: number
  initialViews: number
}

export default function ViewCounter({
  videoId,
  initialViews,
}: ViewCounterProps) {
  const { mutate, data } = trpc.video.incrementView.useMutation({
    onSuccess: () => {
      console.log(`Views updated for video ${videoId}`)
    },
  })

  return (
    <div>
      <p>Views: {data ? data.video.views : initialViews}</p>
      <button
        onClick={() => mutate({ videoId })}
        className='bg-blue-500 text-white px-3 py-1 rounded'
      >
        Increment View
      </button>
    </div>
  )
}
