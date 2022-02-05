import { InvoiceType } from '../types/interfaces'

export const fakeData = [
  {
    id: 'MVH17C',
    user: {
      name: 'Jonn Cena',
      email: 'johncena@gmail.com',
      address: {
        street: '123 Fake Street',
        city: 'New York',
        postCode: '12345',
        country: 'USA'
      }
    },
    items: {
      id: 'COIQO1',
      name: 'Coca Cola',
      qty: 2,
      price: 366
    },
    status: 'paid',
    dueDate: '2010-2-22',
    total: 732
  },
  {
    id: 'VHF17X',
    user: {
      name: 'The Rock',
      email: 'therock@gmail.com',
      address: {
        street: '123 Fake Street',
        city: 'New York',
        postCode: '12345',
        country: 'USA'
      }
    },
    items: {
      id: 'COIQO1',
      name: 'Coca Cola',
      qty: 2,
      price: 366,
      total: 732
    },
    status: 'pending',
    dueDate: '2019-12-31'
  }
] as InvoiceType[]
