import Link from '@/components/Link'
import { courses } from '@/lib/courses'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Esta es una recopilación de lo que yo creo son los mejores cursos que se
        pueden encontrar con certificaciones. Nota: No todos son gratis, los
        cursos que son gratis están primero, después están los cursos de Udemy,
        pero aclaración que son pagos.
      </p>
      <br />
      <ul className="indent-4">
        {courses.map((c, i) => (
          <li key={i} className='flex items-center'>
            {c.name === '🦆 Harvard CS50' ? (
              <Link href={c.url} label={c.name} external commentary='recurso 🔥' />
            ) : (
              <Link href={c.url} label={c.name} external />
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default page
