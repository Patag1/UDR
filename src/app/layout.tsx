import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import SideBar from '@/components/SideBar'
import Title from '@/components/Title'
import Provider from '@/components/Provider'
import Comments from '@/components/Comments'
import Link from 'next/link'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UDR',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`${inter.className} bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-50 transition-all`}
        >
          <main className="w-fit mx-auto my-32 grid grid-rows-[min-content_1fr] grid-cols-1">
            <Title />
            <br />
            <div className="grid grid-cols-[1fr_min-content] grid-rows-1 gap-2">
              <div className="max-w-prose">
                {children}
                <br />
                <p>
                  Si este proyecto te ayudó, considerá{' '}
                  <a
                    href="https://github.com/Patag1"
                    target="_blank"
                    className="text-cyan-500 hover:underline underline-offset-2"
                  >
                    compartirlo
                  </a>
                  , dejar una estrella en el{' '}
                  <a
                    href="https://github.com/Patag1/UDR"
                    target="_blank"
                    className="text-cyan-500 hover:underline underline-offset-2"
                  >
                    repositorio
                  </a>{' '}
                  o{' '}
                  <a
                    href="/"
                    className="text-cyan-500 hover:underline underline-offset-2"
                  >
                    dejar un comentario
                  </a>{' '}
                  con tu feedback. Además sentite libre de utilizar esta página
                  como centro de recursos personales.
                </p>
                <Comments />
              </div>
              <SideBar />
            </div>
          </main>
        </body>
      </Provider>
    </html>
  )
}
