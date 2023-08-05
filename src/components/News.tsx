'use client'

import { newsSlice } from '@/store/newsSlice'
import { FC, useEffect } from 'react'

interface NewsProps {}

const News: FC<NewsProps> = ({}) => {
  const { news, getNews } = newsSlice()

  useEffect(() => {
    getNews()
  }, [getNews])

  return (
    <div>
      {news.map((art, i) => (
        <div className="w-96 aspect-video" key={i}>
          <h1>{art?.title}</h1>
          {/* <img
            src={art.urlToImage}
            alt="pic"
            width={384}
            height={300}
            className="object-cover aspect-video"
          /> */}
        </div>
      ))}
    </div>
  )
}

export default News
