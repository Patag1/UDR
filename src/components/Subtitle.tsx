import { FC } from 'react'

interface SubtitleProps {
  title: string
  children: React.ReactNode
}

const Subtitle: FC<SubtitleProps> = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h4 className="mb-2 font-extrabold text-xl">
        {title}
      </h4>
      <div className="indent-4 flex flex-col">{children}</div>
    </div>
  )
}

export default Subtitle
