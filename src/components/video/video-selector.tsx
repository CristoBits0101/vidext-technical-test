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
  // Based on the video, select and update what data it should show.
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const videoId = parseInt(event.target.value, 10)
    onVideoSelect(videoId)
  }

  return (
    <div className='w-full'>
      <select
        // Communicate the video select
        onChange={handleSelectChange}
        className='p-2 border rounded w-full'
        // Show the current video
        defaultValue={selectedVideoId ?? 'Select a video'}
      >
        {videos.map((video) => (
          <option key={video.id} value={video.id}>
            {video.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default VideoSelector
