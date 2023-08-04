import { FC } from 'react'

interface CommentProps {
  name: string
  email: string
  message: string
}

const Comment: FC<CommentProps> = ({ name, email, message }) => {
  return (
    <div className=''>
      <div>
        <div className='w-24 aspect-square rounded-full border-2'></div>
        <p>{name}</p>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default Comment