'use client'

import { videos } from '@/lib/videos'
import { FC } from 'react'
import YouTube from 'react-youtube'

interface VideosProps {}

const Videos: FC<VideosProps> = ({}) => {
  return (
    <div className="flex flex-col gap-8">
      {videos.map((v, i) => (
        <div key={i} className="flex flex-col gap-2">
          <h4 className="font-extrabold">{v.name}</h4>
          <YouTube videoId={v.query} />
        </div>
      ))}
    </div>
  )
}

export default Videos
