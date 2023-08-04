'use client'

import { useStore } from '@/store/store'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

interface PostCommentProps {}

const PostComment: FC<PostCommentProps> = ({}) => {
  const [chars, setChars] = useState(0)
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm()
  const { postComment } = useStore()

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setChars(e.currentTarget.value.length)
  }

  const onSubmit = (data: Comment) => {
    postComment(data)
  }

  return (
    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-100 drop-shadow-btn dark:drop-shadow-drk rounded-md">
      <h4 className="font-extrabold pb-2">Compartí algo!</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input
          type="text"
          {...register('name', {
            required: true,
          })}
          placeholder="Nombre"
          className="px-2 py-1 rounded-sm bg-transparent focus:bg-gray-300 focus:bg-opacity-20 border-2 border-gray-800 dark:border-gray-100 focus:outline-none focus:rounded-md placeholder:text-gray-400 focus:placeholder:opacity-0 transition-all"
        />
        {errors.name?.type === 'required' && (
          <span className="text-xs text-rose-400">requerido</span>
        )}
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })}
          placeholder="Email"
          className="px-2 py-1 rounded-sm bg-transparent focus:bg-gray-300 focus:bg-opacity-20 border-2 border-gray-800 dark:border-gray-100 focus:outline-none focus:rounded-md placeholder:text-gray-400 focus:placeholder:opacity-0 transition-all"
        />
        {errors.email?.type === 'pattern' && (
          <span className="text-xs text-rose-400">email invalido</span>
        )}
        {errors.email?.type === 'required' && (
          <span className="text-xs text-rose-400">requerido</span>
        )}
        <div className="relative w-full">
          <textarea
            {...register('message', {
              required: true,
            })}
            rows={4}
            onChange={handleChange}
            className="w-full px-2 py-1 rounded-sm bg-transparent focus:bg-gray-300 focus:bg-opacity-20 border-2 border-gray-800 dark:border-gray-100 focus:outline-none focus:rounded-md placeholder:text-gray-400 focus:placeholder:opacity-0 transition-all resize-none"
            placeholder="Mensaje"
          />
          {errors.message?.type === 'required' && (
            <span className="text-xs text-rose-400">requerido</span>
          )}
          <span
            className={`absolute bottom-3 right-2 z-10 ${
              chars > 250 ? 'text-rose-400' : 'text-gray-400'
            } text-xs tabular-nums`}
          >
            {chars}/250
          </span>
        </div>
        <button
          type="submit"
          className="my-2 py-2 border-2 border-gray-800 dark:border-gray-100 rounded-md bg-green-400 drop-shadow-btn dark:drop-shadow-drk dark:text-gray-800 font-extrabold hover:brightness-105 active:translate-x-1 active:translate-y-1 active:drop-shadow-none disabled:opacity-75 disabled:hover:brightness-100 disabled:active:translate-x-0 disabled:active:translate-y-0 disabled:active:drop-shadow-btn dark:disabled:active:drop-shadow-drk transition-all"
          disabled={chars > 250}
        >
          {watch('name') ? `${watch('name')} dice...` : 'Comentar'}
        </button>
      </form>
    </div>
  )
}

export default PostComment
