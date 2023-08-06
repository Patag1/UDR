import Link from '@/components/Link'

export default function Home() {
  return (
    <>
      <div>
        <p>
          Este proyecto personal es un dump de todos los recursos/fuentes que
          personalmente encontré muy útil y me ayudaron a entender un poquito
          más del mundo de la programación.
        </p>
        <p>
          <span className="text-rose-400">Nota</span>: todavía hay problemas de
          renderizado, esperen ver unos pocos bugs
        </p>
        <p>
          Se puede encontrar de todo, algunas de las cosas que podés encontrar:
        </p>
      </div>
      <br />
      <div className="indent-4">
        {/* <Link href="/" label="Noticias" commentary="en construcción" />
            <div className="my-2 mx-auto w-11/12 border-b-2 border-gray-400"></div> */}
        <Link href="/ais" label="IAs" />
        <Link href="/apis" label="APIs" />
        <Link href="/courses" label="Cursos" />
        <Link href="/videos" label="Videos" />
        <Link href="/design" label="Inspiración en diseño" />
        <Link href="/ui" label="Librerías de UI" />
        <Link href="/tools" label="Herramientas" />
        <Link href="/other" label="Otros" commentary="último pero 🔥" />
        <div className="my-2 mx-1 border-b-2 border-gray-400"></div>
        <Link href="/jobs" label="Trabajo remoto" commentary="a pescar 🎣" />
      </div>
      <br />
      <h4 className="my-4 font-extrabold text-xl">
        Playlist exclusiva para devs
      </h4>
      <iframe
        className="rounded-xl"
        src="https://open.spotify.com/embed/playlist/66cYkZTFtuwp17Q53KR8qn?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  )
}
