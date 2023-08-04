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
      <div className="indent-4">
        <Link href="/" label="Noticias" commentary="en construcción" />
        <div className="my-2 mx-auto w-11/12 border-b-2 border-gray-400"></div>
        <Link href="/apis" label="APIs" />
        <Link href="/courses" label="Cursos" />
        <Link href="/videos" label="Videos" />
        <Link href="/design" label="Inspiración en diseño" />
        <Link href="/ui" label="Librerías de UI" />
        <Link href="/tools" label="Herramientas" />
        <Link href="/other" label="Otros" commentary="último pero 🔥" />
        <div className="my-2 mx-auto w-11/12 border-b-2 border-gray-400"></div>
        <Link href="/jobs" label="Trabajo remoto" commentary="a pescar 🎣" />
      </div>
    </>
  )
}
