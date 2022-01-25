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
  total: string
}

export type User = {
  name: string
  email: string
  address: Address
}
