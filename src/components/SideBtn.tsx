'use client'

import { FC } from 'react'
import { IconType } from 'react-icons'

interface SideBtnProps {
  icon1: IconType
  icon2: IconType
  iconBool?: boolean
  clickable?: boolean
  link?: string
  onClick?: () => void
  label: string
}

const SideBtn: FC<SideBtnProps> = ({
  icon1: Icon1,
  icon2: Icon2,
  iconBool,
  clickable,
  link,
  onClick,
  label,
}) => {
  if (link) {
    return (
      <div className="relative flex w-fit [&>span]:hover:-translate-y-4 [&>span]:hover:opacity-100">
        <a
          href={link}
          target="_blank"
          className="w-fit p-1 bg-gray-100 border-2 border-gray-800 drop-shadow-btn rounded-md active:translate-x-1 active:translate-y-1 active:drop-shadow-none transition-all"
        >
          {iconBool ? <Icon2 /> : <Icon1 />}
        </a>
        <span className="absolute w-fit -top-4 left-1/2 right-1/2 -translate-x-1/2 opacity-0 transition-all bg-black bg-opacity-75 text-gray-200 drop-shadow-none border-none px-2 py-1 rounded-md pointer-events-none text-xs">
          {label}
        </span>
      </div>
    )
  }

  return (
    <div className='relative flex w-fit [&>span]:hover:-translate-y-4 [&>span]:hover:opacity-100'>
        <button
        className={`w-fit p-1 bg-gray-100 border-2 border-gray-800 drop-shadow-btn rounded-md ${
            clickable
            ? 'active:translate-x-1 active:translate-y-1 active:drop-shadow-none'
            : 'cursor-default'
        } transition-all`}
        onClick={onClick}
        >
        {iconBool ? <Icon2 /> : <Icon1 />}
        </button>
        <span className="absolute w-fit -top-4 left-1/2 right-1/2 -translate-x-1/2 opacity-0 transition-all bg-black bg-opacity-75 text-gray-200 drop-shadow-none border-none px-2 py-1 rounded-md pointer-events-none text-xs">
            {label}
        </span>
    </div>
  )
}

export default SideBtn
