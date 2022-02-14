import { Items, Status } from './types'

export interface InvoiceType {
  id: string
  fullName: string
  email: string
  streetAddress: string
  city: string
  country: string
  zipCode: string
  status: Status
  dueDate?: string
  list: {
    createdAt: string
    items: {
      _id: string
      list: Items[]
    }
  }
}
