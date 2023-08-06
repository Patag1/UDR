'use client'

import { videos } from '@/lib/videos'
import { FC } from 'react'
import YouTube from 'react-youtube'

interface VideosProps {}

const Videos: FC<VideosProps> = ({}) => {
  return (
    <div className="flex flex-col gap-8">
      <h4 className="font-extrabold">Menciones honorables</h4>
      <p>Videos marcados con un <span className='text-rose-400'>*</span> son difíciles.</p>
      {videos.map((v, i) => (
        <div key={i} className="flex flex-col gap-2">
          {v.hard && <span className='text-rose-400'>*</span>}
          <YouTube videoId={v.query} />
        </div>
      ))}
    </div>
  )
}

export default Videos
