import Link from '@/components/Link'
import { libraries } from '@/lib/libraries'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Las mejores librerías de UI a mi gusto para no estar reinventando la
        rueda para implementar una UI más que aceptable, con responsiveness,
        fáciles de instalar y aplicar.
      </p>
      <br />
      <div className="flex flex-col indent-4">
        {libraries.map((l, i) =>
          l.name === '🔳 Shadcn/ui' ? (
            <Link href={l.url} label={l.name} key={i} commentary="recurso 🔥" />
          ) : (
            <Link href={l.url} label={l.name} key={i} />
          )
        )}
      </div>
    </>
  )
}

export default page
