import { InvoiceType } from '../types/interfaces'

export const filterInvoice = (data: InvoiceType[], status: string) => {
  if (status === 'all' || !status) {
    return data
  }
  return data.filter((invoice) => invoice.status === status)
}
