import { darkTheme } from '../styles/theme/theme'
import { InvoiceType } from '../types/interfaces'

export const checkUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://invoice-frontend-mentor.vercel.app'
    : 'http://localhost:3000'

export const themeSwitcher = (type?: string) => {
  if (type === 'bg') {
    return darkTheme.buttonOuterBG
  }
  return darkTheme.buttonInnerBG
}

export const filterInvoice = (data: InvoiceType[], status: string) => {
  if (status === 'all' || !status) {
    return data
  }
  return data.filter((invoice) => invoice.status === status)
}

export const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const firstLetterUppercase = (text: string) => {
  if (!text) throw new Error('No text provided')
  return text.charAt(0).toUpperCase() + text.slice(1)
}
