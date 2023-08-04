import Link from '@/components/Link'
import { FC } from 'react'
import { apis } from '@/lib/apis'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        <span className="text-rose-400 font-extrabold">Importante</span>:
        Algunas de las APIs mencionadas tal vez tengan algún mal funcionamiento
        o también pasa que los links están rotos. Es así, el mundo de las APIs
        gratis. Si hay alguna API que funcione mal, por favor notificarme!
      </p>
      <br />
      <ul className="indent-4">
        {apis.map((api, i) => (
          <li key={i}>
            <Link href={api.url} label={api.name} external />
          </li>
        ))}
      </ul>
    </>
  )
}

export default page
