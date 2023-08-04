import { FC } from 'react'

interface PostCommentProps {}

const PostComment: FC<PostCommentProps> = ({}) => {
  return (
    <div className="mt-4 px-4 py-2 bg-gray-50 dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-100 drop-shadow-btn dark:drop-shadow-drk rounded-md">
      <h4 className="font-extrabold pb-2">PostComment</h4>
      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Nombre"
          className="px-2 py-1 rounded-sm bg-transparent focus:bg-gray-300 focus:bg-opacity-20 border-2 border-gray-800 dark:border-gray-100 focus:outline-none focus:rounded-md transition-all"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-2 py-1 rounded-sm bg-transparent focus:bg-gray-300 focus:bg-opacity-20 border-2 border-gray-800 dark:border-gray-100 focus:outline-none focus:rounded-md transition-all"
        />
        <textarea
          name=""
          id=""
          rows={3}
          className="px-2 py-1 rounded-sm bg-transparent focus:bg-gray-300 focus:bg-opacity-20 border-2 border-gray-800 dark:border-gray-100 focus:outline-none focus:rounded-md transition-all resize-none"
          placeholder="Mensaje"
        />
        <button
          type="submit"
          className="my-2 py-2 border-2 border-gray-800 dark:border-gray-100 rounded-md bg-green-400 drop-shadow-btn dark:drop-shadow-drk dark:text-gray-800 font-extrabold active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all"
          disabled={false}
        >
          Comentar
        </button>
      </form>
    </div>
  )
}

export default PostComment
