import News from '@/components/News'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel
        voluptates similique, cumque recusandae corporis illo dolorem,
        cupiditate repellendus eos iure ratione, dolor quae ullam adipisci
        labore explicabo minus nam.
      </p>
      <br />
      <News />
    </>
  )
}

export default page
