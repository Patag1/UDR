import Link from '@/components/Link'
import Subtitle from '@/components/Subtitle'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        consequuntur ducimus iusto porro, id, atque nam facere velit nihil
        debitis dolor laboriosam iure ipsum numquam quos sint sed voluptates
        similique.
      </p>
      <br />
      <Subtitle title="Practicar lógica">
        <div className="flex items-center">
          <Link href="https://www.codewars.com/" label="CodeWars 🪓" external />
          <p className="text-gray-400 text-sm">recurso 🔥</p>
        </div>
        <Link href="https://www.hackerrank.com/" label="Hackerrank 🧑‍💻" external />
        <Link href="https://leetcode.com/" label="LeetCode 🏫" external />
      </Subtitle>
      <Subtitle title="Qué más aprender?">
        <Link href="http://learngitbranching.js.org" label="Git 🐈" external />
        <Link href="http://visualgo.net" label="Logaritmos 🪵" external />
        <Link href="http://linuxsurvival.com" label="Linux 🐧" external />
        <Link href="http://sqlbolt.com" label="SQL 🗃️" external />
        <div className="flex items-center">
          <Link href="http://hemingwayapp.com" label="Redacción ✒️" external />
          <p className="text-gray-400 text-sm">para texto de páginas</p>
        </div>
      </Subtitle>
      <Subtitle title='Páginas guía'>
        <Link href='https://stackoverflow.com/' label='Stack Overflow 📚' external />
        <Link href='https://roadmap.sh/' label='Roadmap 🛣️' external />
        <Link href='https://medium.com/@moyojohn188/become-a-react-developer-in-2023-dbe01bbc4285' label='Recursos React *️⃣' external />
      </Subtitle>
    </>
  )
}

export default page
