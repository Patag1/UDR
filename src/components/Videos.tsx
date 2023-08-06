'use client'

import { videos } from '@/lib/videos'
import { FC } from 'react'
import YouTube from 'react-youtube'

interface VideosProps {}

const Videos: FC<VideosProps> = ({}) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="text-xl my-2 font-extrabold">Menciones honorables</h4>
        <p>Quise poner unos videos acá que destaco. Videos marcados con un <span className='text-rose-400'>*</span> son difíciles.</p>
      </div>
      {videos.map((v, i) => (
        <div key={i} className="relative flex flex-col gap-2">
          {v.hard && <span className='absolute text-xl top-2 -left-6 text-rose-400'>*</span>}
          <YouTube videoId={v.query} />
        </div>
      ))}
    </div>
  )
}

export default Videos
