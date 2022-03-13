import { useState, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'

export const TestThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}
