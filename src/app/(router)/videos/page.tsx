import Link from '@/components/Link'
import Subtitle from '@/components/Subtitle'
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
      <Subtitle title='Fundamentals'>
        <Link
          href='https://www.youtube.com/watch?v=QXc_ozsH_cg&pp=ygUuY3M1MCBpbnRyb2R1Y3Rpb24gdG8gY29tcHV0ZXIgc2NpZW5jZSBlc3Bhw7FvbA%3D%3D'
          label='📖 Introducción a la ciencia informática'
          external
          commentary='Harvard'
        />
        <Link
          href='https://www.youtube.com/watch?v=XqFR2lqBYPs&pp=ygUNaHRtbCB0dXRvcmlhbA%3D%3D'
          label='👶 HTML y CSS'
          external
        />
      </Subtitle>
      <Subtitle title='Front-End - freecodecamp 🔥'>
        <Link
          href='https://www.youtube.com/watch?v=ivdTnPl1ND0&pp=ygUKamF2YXNjcmlwdA%3D%3D'
          label='🟨 Javascript'
          external
        />
        <Link
          href='https://www.youtube.com/watch?v=30LWjhZzg50'
          label='🟦 Typescript (EN)'
          external
        />
        <Link
          href='https://www.youtube.com/watch?v=6Jfk8ic3KVk&t=5450s'
          label='*️⃣ React'
          external
        />
      </Subtitle>
      <Subtitle title='Back-End - freecodecamp 🔥'>
        <Link
          href='https://www.youtube.com/watch?v=1hpc70_OoAg'
          label='🟢 Node + Express'
          external
        />
        <Link
          href='https://www.youtube.com/watch?v=ESShhQmBjjY'
          label='◀️ Prisma'
          external
          commentary='Fazt Code'
        />
      </Subtitle>
      <Subtitle title='Base de datos'>
        <Link
          href='https://www.youtube.com/watch?v=HXV3zeQKqGY&pp=ygUecG9zdGdyZXMgZnJlZWNvZGVjYW1wIGVzcGHDsW9s'
          label='🗃️ Fundamentals'
          external
        />
        <Link
          href='https://www.youtube.com/watch?v=qw--VYLpxG4&pp=ugMICgJlcxABGAHKBR5wb3N0Z3JlcyBmcmVlY29kZWNhbXAgZXNwYcOxb2w%3D'
          label='🐘 PostgreSQL'
          external
        />
      </Subtitle>
      <Subtitle title='Full-Stack - difícil 🔥 (EN)'>
        <Link
          href='https://www.youtube.com/watch?v=5miHyP6lExg&pp=ygUWbmV4dCBqcyBmdWxsIHN0YWNrIGFwcA%3D%3D'
          label='👕 E-commerce'
          external
        />
        <Link
          href='https://www.youtube.com/watch?v=c_-b_isI4vg&t=9820s&pp=ygUabmV4dCBqcyB0dXRvcmlhbCBlc3Bhw7FvbCA%3D'
          label='🔺 Clon Airbnb'
          external
        />
        <Link
          href='https://www.youtube.com/watch?v=mSUKMfmLAt0&pp=ygUabmV4dCBqcyB0dXRvcmlhbCBlc3Bhw7FvbCA%3D'
          label='🤖 Clon Reddit'
          external
        />
      </Subtitle>
      <br />
      <Videos />
    </>
  )
}

export default page