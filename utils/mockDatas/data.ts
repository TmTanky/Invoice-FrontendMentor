import { InvoiceType } from '@/types/interfaces'

export const mockData = [
  {
    _id: 'uid',
    city: 'New York',
    country: 'USA',
    email: 'sample@gmail.com',
    fullName: 'John Doe',
    id: 'id1',
    list: {
      createdAt: '2020-05-01T00:00:00.000Z',
      items: {
        _id: 'listID',
        list: [
          {
            id: 'item1',
            name: 'House',
            price: 100,
            qty: 1,
            total: 100
          }
        ]
      }
    },
    status: 'paid',
    streetAddress: '123 Main St',
    zipCode: '12345',
    dueDate: '2020-01-01'
  }
] as InvoiceType[]
