import Link from '@/components/Link'
import Subtitle from '@/components/Subtitle'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Todas mis fuentes de aprendizaje/inspiración para tener un mejor diseño
        todos los días. Siempre cuento a mis compañeros que mucha gente que está
        hoy en día trabajando en Vercel fue por un buen diseño y presentación de
        proyectos, aunque es verdad que estar atareado por la funcionalidad
        implica sacrificio de diseño, tal vez por eso hace la diferencia... 🧐
      </p>
      <br />
      <Subtitle title="Recursos para aprender UX/UI">
        <Link href="http://uxcel.com" label="Uxcel 🧑‍🎨" external />
        <Link href="http://lawsofux.com" label="Laws Of Ux 🖼️" external />
        <Link
          href="https://qadigitalads.com/consejos-uso-de-colores-en-ui/"
          label="Qadigitalads 🧑‍🏫"
          external
        />
        <Link
          href="https://www.adhamdannaway.com/blog/ui-design/16-ui-design-rules"
          label="UI Design Rules 📏"
          external
        />
      </Subtitle>
      <Subtitle title="Buscando inspiración?">
        <Link
          href="https://www.awwwards.com/"
          label="Awwwards 🏆"
          external
          commentary="recurso 🔥"
        />
      </Subtitle>
      <Subtitle title="Potpourrit">
        <Link href="https://uigoodies.com/" label="UI Goodies 🍲" external />
      </Subtitle>
    </>
  )
}

export default page
