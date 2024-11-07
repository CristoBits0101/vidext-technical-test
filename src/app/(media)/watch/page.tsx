'use client'

import { trpc } from '@/utils/trpc'

export default function WatchPage() {
  const getUsers = trpc.video.getVideos.useQuery()
  if (getUsers.isLoading) return <div>Loading...</div>
  if (getUsers.error) return <div>Error: {getUsers.error.message}</div>
  return <div className='w-fit h-full'>{JSON.stringify(getUsers.data)}</div>
}
