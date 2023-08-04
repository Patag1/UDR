import { FC } from 'react'
import NextLink from 'next/link'

interface LinkProps {
  href: string
  label: string
  external?: boolean
  commentary?: string
}

const Link: FC<LinkProps> = ({ href, label, external, commentary }) => {
  const contClasses = 'w-full flex justify-between items-center hover:bg-gray-300 hover:bg-opacity-20 rounded-md '
  const classes = 'text-cyan-400 hover:underline underline-offset-2'
  const commClasses = 'text-xs whitespace-nowrap text-gray-400 mr-4 select-none'

  return external ? (
    <div className={contClasses}>
      <a href={href} target='_blank' className={classes}>{label}</a>
      {commentary && <p className={commClasses}>{commentary}</p>}
    </div>
    ) : (
    <div className={contClasses}>
      <NextLink href={href} className={classes}>{label}</NextLink>
      {commentary && <p className={commClasses}>{commentary}</p>}
    </div>
  )
}

export default Link