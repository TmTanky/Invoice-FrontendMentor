export type Address = {
  street: string
  city: string
  postCode: string
  country: string
}

export type Items = {
  id: string
  name: string
  qty: number
  price: number
  total: number
}

export type Status = 'paid' | 'pending' | 'draft'

export type User = {
  name: string
  email: string
  address: Address
}
