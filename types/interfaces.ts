import { User, Items, Status } from './types'

export interface InvoiceType {
  id: string
  user: User
  items: Items
  status: Status
  dueDate: string
  total: number
}
