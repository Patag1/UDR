import Link from '@/components/Link'
import Subtitle from '@/components/Subtitle'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis
        neque aperiam sed rerum fugiat, nesciunt asperiores quo enim eaque
        laborum nulla distinctio, esse reiciendis delectus rem tenetur ad?
        Voluptatum!
      </p>
      <br />
      <div className="indent-4">
        <Link
          href="https://www.futuretools.io/"
          label="🔷 Future Tools"
          external
          commentary="google de IAs"
        />
        <Link
          href="https://ai-code-reviewer.com/"
          label="🧑‍💻 AI Code Reviewer"
          external
          commentary="IA debugger"
        />
        <Link
          href="https://letsenhance.io/"
          label="🖼️ Letsenhance"
          external
          commentary="img + calidad/tamaño"
        />
        <Link
          href="https://podcast.adobe.com/"
          label="🔺 Adobe Podcast"
          external
          commentary="audio + calidad"
        />
        <Link
          href="https://www.remove.bg/"
          label="✂️ Remove bg"
          external
          commentary="remueve fondos"
        />
        <Link
          href="https://snapedit.app/"
          label="🎨 SnapEdit"
          external
          commentary="remueve objetos de img"
        />
      </div>
    </>
  )
}

export default page
