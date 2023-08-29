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
        <Link href="http://uxcel.com" label="🧑‍🎨 Uxcel" external />
        <Link href="http://lawsofux.com" label="🎨 Laws Of Ux" external />
        <Link
          href="https://qadigitalads.com/consejos-uso-de-colores-en-ui/"
          label="🧑‍🏫 Qadigitalads"
          external
        />
        <Link
          href="https://www.adhamdannaway.com/blog/ui-design/16-ui-design-rules"
          label="📏 UI Design Rules"
          external
        />
      </Subtitle>
      <Subtitle title="Buscando inspiración?">
        <Link
          href="https://www.awwwards.com/"
          label="🏆 Awwwards"
          external
          commentary="recurso 🔥"
        />
        <Link
          href="https://dribbble.com/"
          label="🏀 Dribbble"
          external
          commentary="recurso 🔥"
        />
        <Link
          href="https://www.behance.net/"
          label="🟦 Behance"
          external
          commentary="recurso 🔥"
        />
        <Link
          href="https://godly.website/"
          label="☑️ Godly"
          external
          commentary="recurso 🔥"
        />
        <Link
          href="https://deck.gallery/"
          label="◼️ deck.gallery"
          external
          commentary="recurso 🔥"
        />
        <Link
          href="https://bestwebsite.gallery/"
          label="🔵 Best Website Gallery"
          external
        />
        <Link
          href="https://www.lapa.ninja/"
          label="🥷 Lapa Ninja"
          external
        />
      </Subtitle>
      <Subtitle title="Potpourrit">
        <Link href="https://uigoodies.com/" label="🍲 UI Goodies" external />
        <Link
          href="https://discover.gumroad.com/"
          label="🍭 Gumroad"
          external
        />
        <Link
          href="https://unsplash.com/"
          label="🖼️ Unsplash"
          external
          commentary='imágenes'
        />
        <Link
          href="https://sketchvalley.com/"
          label="⚫ Sketch Valley"
          external
          commentary='imágenes'
        />
        <Link
          href="https://pixcap.com/"
          label="🖋️ Pixcap"
          external
          commentary='imágenes 3D'
        />
      </Subtitle>
      <Subtitle title="Fuentes">
        <Link
          href="https://fonts.google.com/"
          label="🔍 Google Fonts"
          external
        />
        <Link
          href="https://fonts.adobe.com/"
          label="🔺 Adobe Fonts"
          external
        />
        <Link
          href="https://www.myfonts.com/"
          label="Ⓜ️ MyFonts"
          external
        />
        <Link
          href="https://dirtylinestudio.com/"
          label="✒️ Dirtyline Studio"
          external
        />
      </Subtitle>
    </>
  )
}

export default page
