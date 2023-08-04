import { FC } from 'react'

interface CommentProps {
  name: string
  email: string
  message: string
}

const Comment: FC<CommentProps> = ({ name, email, message }) => {
  return (
    <div className='w-full px-4 py-2 flex flex-col justify-center items-center gap-2 bg-gray-50 dark:bg-gray-800 border-2 border-gray-800 dark:border-gray-100 drop-shadow-btn dark:drop-shadow-drk rounded-md'>
      <div className='w-full flex justify-start items-start gap-2 text-xs'>
        <div className='w-12 aspect-square flex justify-center items-center bg-gray-400 bg-opacity-20 rounded-full border-2 border-gray-800 dark:border-gray-100 text-2xl font-extrabold uppercase'>{name[0]}</div>
        <div>
          <p>{name}</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <div className='w-full mx-1 border-b-2 border-gray-800 dark:border-gray-100'></div>
      <p className='w-full'>{message}</p>
    </div>
  )
}

export default Comment