'use client'

import { FC, useEffect } from 'react'
import { useStore } from '@/store/store'
import Comment from '@/components/Comment'
import PostComment from './PostComment'
import { usePathname } from 'next/navigation'
import { BsArrowReturnRight } from 'react-icons/bs'

interface CommentsProps {}

const Comments: FC<CommentsProps> = ({}) => {
  const { comments, getComments } = useStore()

  const path = usePathname()

  useEffect(() => {
    getComments()
  }, [getComments])

  return (
    <div className={`mt-6 w-full ${path !== '/' && 'hidden'}`} id="comm">
      <h4 className="mb-4 font-extrabold text-xl">
        Comentarios{'  '}
        <span className="text-xs text-gray-400">
          ({comments.length ?? '0'})
        </span>
      </h4>
      <div className="w-full flex flex-col justify-start items-center gap-4">
        {comments.length ? (
          comments?.map((c, i) => (
            <div
              className="w-full flex justify-center items-start gap-2"
              key={i}
            >
              <BsArrowReturnRight className="ml-2 text-4xl" />
              <Comment name={c.name} email={c.email} message={c.message} />
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center items-center gap-2">
            <BsArrowReturnRight className="ml-2 text-xl" />
            <div className="w-full px-4 py-2 border-2 border-gray-400 rounded-md">
              Sin comentarios 😶
            </div>
          </div>
        )}
      </div>
      <PostComment />
    </div>
  )
}

export default Comments
