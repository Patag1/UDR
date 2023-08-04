'use client'

import { ThemeProvider } from 'next-themes'
import { FC } from 'react'

interface ProviderProps {
    children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider attribute='class'>
        {children}
    </ThemeProvider>
  )
}

export default Provider