import Link from '@/components/Link'

export default function Home() {
  return (
    <>
      <p>
        Este proyecto personal es un dump de todos los recursos/fuentes que
        personalmente encontré muy útil y me ayudaron a entender un poquito más
        del mundo de la programación. Se puede encontrar de todo, algunas de las
        cosas que podés encontrar:
      </p>
      <br />
      <ul className="indent-4">
        <li>
          <Link href="/apis" label="APIs" />
        </li>
        <li>
          <Link href="/courses" label="Cursos" />
        </li>
        <li>
          <Link href="/videos" label="Videos" />
        </li>
        <li>
          <Link href="/design" label="Inspiración en diseño" />
        </li>
        <li>
          <Link href="/ui" label="Librerías de UI" />
        </li>
        <li>
          <Link href="/tools" label="Herramientas" />
        </li>
        <li className="flex items-center">
          <Link href="/other" label="Otros" />
          <p className='text-gray-400 text-sm'>último pero 🔥</p>
        </li>
      </ul>
    </>
  )
}
