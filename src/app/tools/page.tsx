import Link from '@/components/Link'
import Subtitle from '@/components/Subtitle'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        molestias architecto autem labore tempora culpa laboriosam! Nemo dicta
        maiores harum! Repellendus maiores minus distinctio earum quia
        voluptatem dignissimos ipsa. Animi?
      </p>
      <br />
      <Subtitle title="Iconos">
        <Link
          href="https://react-icons.github.io/react-icons/"
          label="React-icons *️⃣"
          external
        />
        <Link
          href="https://tabler-icons.io/"
          label="Tabler Icons ✒️"
          external
        />
        <Link href="https://lucide.dev/" label="Lucide 🍥" external />
      </Subtitle>
      <Subtitle title="Potpourrit front">
        <Link
          href="https://www.tailwindcss-animated.com/configurator.html"
          label="Tailwind animations 🌊"
          external
        />
        <div className="flex items-center">
          <Link
            href="https://sweetalert2.github.io/"
            label="Sweet alert 🍩"
            external
          />
          <p className="text-gray-400 text-sm">modales</p>
        </div>
        <div className="flex items-center">
          <Link
            href="https://react-hot-toast.com/"
            label="React hot toast 🍞"
            external
          />
          <p className="text-gray-400 text-sm">alerts</p>
        </div>
        <div className="flex items-center">
          <Link
            href="https://www.mercadopago.com.ar/developers/es/docs/sdks-library/client-side/sdk-js-react-installation"
            label="Mercado Pago 👐"
            external
          />
          <p className="text-gray-400 text-sm">SDK de pago</p>
        </div>
        <div className="flex items-center">
          <Link
            href="https://stripe.com/"
            label="Stripe 🟣"
            external
          />
          <p className="text-gray-400 text-sm">SDK de pago</p>
        </div>
        <div className="flex items-center">
          <Link
            href="https://www.npmjs.com/package/@paypal/react-paypal-js"
            label="PayPal 💳"
            external
          />
          <p className="text-gray-400 text-sm">SDK de pago</p>
        </div>
      </Subtitle>
      <Subtitle title='Serverless DBs'>
        <Link href='https://planetscale.com/docs' label='Planetscale 🪐' external />
        <Link href='https://firebase.google.com/' label='Firebase 🔥' external />
        <Link href='https://account.mongodb.com/' label='MongoDB Atlas 🍃' external />
        <Link href='https://supabase.com/' label='Supabase ⚡' external />
        <div className="flex items-center">
          <Link
            href="https://vercel.com/docs/storage/vercel-postgres"
            label="Vercel Postgres 🔼"
            external
          />
          <p className="text-gray-400 text-sm">Beta</p>
        </div>
      </Subtitle>
    </>
  )
}

export default page
