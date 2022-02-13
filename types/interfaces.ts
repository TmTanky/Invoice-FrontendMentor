import { Items, Status } from './types'

export interface InvoiceType {
  id: string
  fullName: string
  email: string
  city: string
  country: string
  zipCode: string
  status: Status
  dueDate?: string
  list: {
    createdAt: string
    items: Items[]
  }
}
