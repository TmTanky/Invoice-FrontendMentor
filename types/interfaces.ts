import { Items, Status } from './types'

export interface InvoiceType {
  _id: string
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

export type BodyProps = {
  userID?: string
  listID?: string
  id: string
  fullName: string
  email: string
  streetAddress: string
  city: string
  zipCode: string
  country: string
  status: string
  list: {
    createdAt: string
    items: {
      id: string
      name: string
      qty: number
      price: number
    }[]
  }
}
