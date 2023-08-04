import Link from '@/components/Link'
import Subtitle from '@/components/Subtitle'
import { jobs } from '@/lib/jobs'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Ahora sí señores, a pescar trabajo. Dejo los mejores y no tan mejores lugares para encontrar trabajo. Si bien también incluyo los que no son tan fiables, cada CV enviado cuenta, además me dí cuenta que cada trabajo encontrado en otras páginas están de alguna forma conectados con una oferta de trabajo en LinkedIn, así que como dije, cada CV cuenta. Éxitos!
      </p>
      <br />
      <Subtitle title="Más fiables">
        {jobs.map(
          (j, i) =>
            j.type &&
            !j.arg && <Link href={j.url} label={j.name} external key={i} />
        )}
      </Subtitle>
      <Subtitle title="Poco fiables">
        {jobs.map(
          (j, i) =>
            !j.type && <Link href={j.url} label={j.name} external key={i} />
        )}
      </Subtitle>
      <Subtitle title="Si sos de Argentina">
        {jobs.map(
          (j, i) =>
            j.arg && <Link href={j.url} label={j.name} external key={i} />
        )}
      </Subtitle>
    </>
  )
}

export default page
