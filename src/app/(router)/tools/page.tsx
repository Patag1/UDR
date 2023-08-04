import Link from '@/components/Link'
import Subtitle from '@/components/Subtitle'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Recursos variados que son clave y de mi uso personal. Mi fuente de
        íconos, recursos random de front y servicios de bases de datos
        serverless muy prácticas para producir tu back en segundos.
      </p>
      <br />
      <Subtitle title="Iconos">
        <Link
          href="https://react-icons.github.io/react-icons/"
          label="*️⃣ React-icons"
          external
        />
        <Link
          href="https://tabler-icons.io/"
          label="✒️ Tabler Icons"
          external
        />
        <Link href="https://lucide.dev/" label="🍥 Lucide" external />
      </Subtitle>
      <Subtitle title="Potpourrit front">
        <Link
          href="https://www.tailwindcss-animated.com/configurator.html"
          label="🌊 Tailwind animations"
          external
        />
        <Link
          href="https://sweetalert2.github.io/"
          label="🍩 Sweet alert"
          external
          commentary="modales"
        />
        <Link
          href="https://react-hot-toast.com/"
          label="🍞 React hot toast"
          external
          commentary="alerts"
        />
        <Link
          href="https://www.mercadopago.com.ar/developers/es/docs/sdks-library/client-side/sdk-js-react-installation"
          label="👐 Mercado Pago"
          external
          commentary="SDK de pago"
        />
        <Link
          href="https://stripe.com/"
          label="🟣 Stripe"
          external
          commentary="SDK de pago"
        />
        <Link
          href="https://www.npmjs.com/package/@paypal/react-paypal-js"
          label="💳 PayPal"
          external
          commentary="SDK de pago"
        />
      </Subtitle>
      <Subtitle title="Serverless DBs">
        <Link
          href="https://planetscale.com/docs"
          label="🪐 Planetscale"
          external
        />
        <Link
          href="https://firebase.google.com/"
          label="🔥 Firebase"
          external
        />
        <Link
          href="https://account.mongodb.com/"
          label="🍃 MongoDB Atlas"
          external
        />
        <Link href="https://supabase.com/" label="⚡ Supabase" external />
        <Link
          href="https://vercel.com/docs/storage/vercel-postgres"
          label="🔼 Vercel Postgres"
          external
          commentary="Beta"
        />
      </Subtitle>
    </>
  )
}

export default page
