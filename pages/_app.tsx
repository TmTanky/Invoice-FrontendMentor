import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { Layout } from '../components/Layout'
import { darkTheme } from '../styles/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
