import { create } from 'zustand'

type Comment = {
  name: string
  email: string
  message: string
}

type CommentDb = Comment & {
  id: number
}

interface useStoreProps {
  comments: CommentDb[] | []
  getComments: () => Promise<void>
  postComment: (data: Comment) => Promise<void>
  putComment: (id: number, data: Comment) => Promise<void>
  delComment: (id: number) => Promise<void>
}

export const useStore = create<useStoreProps>((set) => ({
  comments: [],
  getComments: async () => {
    await fetch('/api/comments')
      .then((res) => res.json())
      .then((data) => set({ comments: data }))
      .catch(() => {})
  },
  postComment: async (data) => {
    await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => set((state) => ({ comments: [...state.comments, data] })))
      .catch(() => {})
  },
  putComment: async (id, data) => {
    await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) =>
        set((state) => ({
          comments: state.comments.map((c) => {
            if (c.id === id) {
              return data
            }
            return c
          }),
        }))
      )
      .catch(() => {})
  },
  delComment: async (id) => {
    await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() =>
        set((state) => ({
          comments: state.comments.filter((c) => c.id !== id),
        }))
      )
      .catch(() => {})
  },
}))
