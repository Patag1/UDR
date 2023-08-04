import { create } from 'zustand'
import toast from 'react-hot-toast'
import { ApiReq } from '@/types/zod'

interface newsSliceProps {
  lang: string
  news: ApiReq[] | []
  res: number
  getNews: () => Promise<void>
}

export const newsSlice = create<newsSliceProps>((set) => ({
  lang: 'en',
  news: [],
  res: 0,
  getNews: async () => {
    const endpoint = process.env.NEWSAPIKEY
    if (endpoint) {
      await fetch(endpoint)
        .then(response => response.json())
        .then((data) =>
          set({ news: data.articles, res: data.totalResults })
        )
        .catch(() => toast.error('Error!'))
    }
  },
}))
