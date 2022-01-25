import { User, Items } from './types'

export interface InvoiceType {
  id: string
  user: User
  items: Items
  status: string
  dueDate: string
}
