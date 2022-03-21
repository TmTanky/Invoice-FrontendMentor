import useSWR from 'swr'
import { InvoiceType } from '@/types/interfaces'
import { fetcher } from '../utils'

export const useInvoice = (id: string) => {
  const { data, mutate } = useSWR<{ data: InvoiceType }>(
    `/api/getInvoice/${id}`,
    fetcher
  )

  return { data, mutate }
}
