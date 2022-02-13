export type Address = {
  street: string
  city: string
  postCode: string
  country: string
}

export type Items = {
  id: string
  name: string
  qty: number | string
  price: number | string
  total: number | string
}

export type Status = 'paid' | 'pending' | 'draft'

export type User = {
  name: string
  email: string
  address: Address
}
