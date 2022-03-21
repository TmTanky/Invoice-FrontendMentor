import useSWR from 'swr'
import { InvoiceType } from '@/types/interfaces'
import { fetcher } from '../utils'

export const useInvoices = () => {
  const { data, mutate } = useSWR<{ data: InvoiceType[] }>(
    `/api/getInvoices`,
    fetcher
  )

  return { data, mutate }
}
