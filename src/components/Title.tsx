'use client'

import { FC } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BsArrowLeftShort } from 'react-icons/bs'

interface TitleProps {}

const Title: FC<TitleProps> = ({}) => {
  const path = usePathname()
  let text

  switch (path) {
    case '/':
      text = 'Ultimate Dev Roadmap - UDR'
      break
    case '/news':
      text = 'Noticias'
      break
    case '/apis':
      text = 'APIs'
      break
    case '/courses':
      text = 'Cursos'
      break
    case '/videos':
      text = 'Videos'
      break
    case '/design':
      text = 'Inspiración en diseño'
      break
    case '/ui':
      text = 'Librerías de UI'
      break
    case '/tools':
      text = 'Herramientas'
      break
    case '/other':
      text = 'Otros recursos'
      break
    case '/jobs':
      text = 'Trabajo remoto'
      break
    default:
      break
  }

  return (
    <div className="relative flex justify-between items-center">
      {
        path !== '/' && (
          <Link href={'/'} className='h-fit w-fit absolute top-1/2 bottom-1/2 -translate-y-1/2 -left-14 p-1 text-4xl'>
            <BsArrowLeftShort />
          </Link>
        )
      }
      <h1 className="text-4xl font-extrabold">{text}</h1>
      <div className="relative [&>span]:hover:opacity-100 [&>span]:hover:-translate-y-4">
        <Image
          src={'/profile-pic.png'}
          alt="pic"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="absolute w-fit -top-4 left-1/2 right-1/2 -translate-x-1/2 opacity-0 transition-all bg-black bg-opacity-75 text-gray-200 drop-shadow-none border-none px-2 py-1 rounded-md pointer-events-none text-xs whitespace-nowrap">
          Augusto Sasso
        </span>
      </div>
    </div>
  )
}

export default Title
