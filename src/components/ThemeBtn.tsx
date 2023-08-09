'use client'

import { FC, useEffect, useState } from 'react'
import SideBtn from './SideBtn'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useTheme } from 'next-themes'

interface ThemeBtnProps {}

const ThemeBtn: FC<ThemeBtnProps> = ({}) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggle = theme === 'dark' ? 'light' : 'dark'
  const bool = theme === 'light'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <SideBtn
      icon1={BiMoon}
      icon2={BiSun}
      iconBool={bool}
      label="Theme"
      clickable
      onClick={() => setTheme(toggle)}
    />
  )
}

export default ThemeBtn
