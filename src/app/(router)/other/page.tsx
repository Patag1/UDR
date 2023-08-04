import Link from '@/components/Link'
import Subtitle from '@/components/Subtitle'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Puse estos recursos acá porque no podía categorizarlos, y justamente por
        eso no por estar en la categoría &quot;otros&quot; son recursos menores.<br />Codewars es muy recomendable, además ayuda para ponerlo en el portfolio! Otros recursos para aprender habilidades muy requeridas, y por último, páginas web que sirven de guía para que no se pierdan. Roadmap es 🔥
      </p>
      <br />
      <Subtitle title="Practicar lógica">
        <Link
          href="https://www.codewars.com/"
          label="🪓 Codewars"
          external
          commentary="recurso 🔥"
        />
        <Link
          href="https://www.hackerrank.com/"
          label="🧑‍💻 Hackerrank"
          external
        />
        <Link href="https://leetcode.com/" label="🏫 LeetCode" external />
      </Subtitle>
      <Subtitle title="Qué más aprender?">
        <Link href="http://learngitbranching.js.org" label="🐈 Git" external />
        <Link href="http://visualgo.net" label="🪵 Logaritmos" external />
        <Link href="http://linuxsurvival.com" label="🐧 Linux" external />
        <Link href="http://sqlbolt.com" label="🗃️ SQL" external />
        <Link
          href="http://hemingwayapp.com"
          label="✒️ Redacción"
          external
          commentary="para texto de páginas"
        />
      </Subtitle>
      <Subtitle title="Páginas guía">
        <Link
          href="https://roadmap.sh/"
          label="🛣️ Roadmap"
          external
          commentary="recurso 🔥"
        />
        <Link
          href="https://stackoverflow.com/"
          label="📚 Stack Overflow"
          external
        />
        <Link
          href="https://medium.com/@moyojohn188/become-a-react-developer-in-2023-dbe01bbc4285"
          label="*️⃣ Recursos React"
          external
        />
      </Subtitle>
    </>
  )
}

export default page
