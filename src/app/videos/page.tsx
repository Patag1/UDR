import Videos from '@/components/Videos'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <p>
        Les dejo algunos videos que son de lo mejor que se puede encontrar online para aprender a desarrollar, no me acuerdo de todos esos videos que vi que merecen la pena, pero estos valen oro. Los últimos dos videos son bien difíciles así que les recomiendo los dos primeros antes de hacer algo muy grande. Que los disfruten!
      </p>
      <br />
      <Videos />
    </>
  )
}

export default page