'use client'

interface VideoSelectorProps {
  videos: Array<{ id: number; title: string }>
  selectedVideoId: number | null
  onVideoSelect: (videoId: number) => void
}

const VideoSelector: React.FC<VideoSelectorProps> = ({
  videos,
  selectedVideoId,
  onVideoSelect,
}) => {
  // Handle the change event for the select element and update the selected video
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const videoId = parseInt(event.target.value, 10)
    onVideoSelect(videoId)
  }

  return (
    <div className='relative w-full h-fit'>
      {/* Styled select element with rounded corners */}
      <select
        onChange={handleSelectChange}
        className='w-full rounded-full border border-neutral-200/75 bg-[#FFFFFF] px-5 py-2.5 appearance-none pr-10'
        defaultValue={selectedVideoId ?? 'Select a video'}
      >
        {/* Map through the videos array to create options */}
        {videos.map((video) => (
          <option key={video.id} value={video.id}>
            {video.title}
          </option>
        ))}
      </select>
      {/* Custom arrow icon positioned at the right */}
      <div className='absolute inset-y-0 right-5 flex items-center pointer-events-none'>
        <svg
          className='w-4 h-4 text-gray-500'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </div>
  )
}

export default VideoSelector
