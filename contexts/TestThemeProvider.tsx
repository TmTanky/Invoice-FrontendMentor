import { useState, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { FormProvider } from './formContext'
import { darkTheme, lightTheme } from '../styles/theme/theme'

export const TestThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <FormProvider>{children}</FormProvider>
    </ThemeProvider>
  )
}
