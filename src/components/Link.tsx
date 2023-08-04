import { FC } from 'react'
import NextLink from 'next/link'

interface LinkProps {
  href: string
  label: string
  external?: boolean
}

const Link: FC<LinkProps> = ({ href, label, external }) => {
  const classes = 'text-cyan-500 hover:underline underline-offset-2 w-fit'

  return external ? (
    <a href={href} target='_blank' className={classes}>{label}</a>
    ) : (
    <NextLink href={href} className={classes}>{label}</NextLink>
  )
}

export default Link