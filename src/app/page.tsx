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
          renderizado, esperen ver unos pocos bugs.
        </p>
        <br />
        <p>
          Se puede encontrar de todo, algunas de las cosas que podés encontrar:
        </p>
      </div>
      <br />
      <div className="indent-4">
        {/* <Link href="/" label="Noticias" commentary="en construcción" />
            <div className="my-2 mx-auto w-11/12 border-b-2 border-gray-400"></div> */}
        <Link href="/ais" label="IAs" commentary='🤖' />
        <Link href="/apis" label="APIs" commentary='🪪' />
        <Link href="/courses" label="Cursos" commentary='👩‍🏫' />
        <Link href="/videos" label="Videos" commentary='🎥' />
        <Link href="/design" label="Inspiración en diseño" commentary='🎨' />
        <Link href="/ui" label="Librerías de UI" commentary='📚' />
        <Link href="/tools" label="Herramientas" commentary='🛠️' />
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
        src="https://open.spotify.com/embed/playlist/1pTSoqm75Q9bd759BTOy7r?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </>
  )
}
