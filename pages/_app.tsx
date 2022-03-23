import '../styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { Layout } from '@/components/Layout'
import { FormProvider } from 'contexts'
import { darkTheme, lightTheme } from '../styles/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (!localTheme) {
      localStorage.setItem('theme', 'light')
    }
    setTheme(localTheme || 'light')
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <FormProvider>
        <Layout setTheme={setTheme}>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </FormProvider>
    </ThemeProvider>
  )
}

export default MyApp
