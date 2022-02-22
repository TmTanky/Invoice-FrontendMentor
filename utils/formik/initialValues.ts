import { nanoid } from 'nanoid'

const dateNow = new Date().toLocaleString('en', {
  dateStyle: 'medium'
})

export const initialValues = {
  id: nanoid(6).toUpperCase(),
  fullName: '',
  email: '',
  streetAddress: '',
  city: '',
  country: '',
  zipCode: '',
  status: 'pending',
  list: {
    createdAt: dateNow,
    items: [
      {
        id: nanoid(6).toUpperCase(),
        name: '',
        qty: '',
        price: ''
      }
    ]
  }
}
