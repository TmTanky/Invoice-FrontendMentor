import type { NextApiRequest, NextApiResponse } from 'next'
import { createInvoice, editInvoice } from 'utils'
import { establishConnection } from '@/lib/mongo'

type BodyProps = {
  userID?: string
  listID: string
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

establishConnection()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === ('GET' || 'PATCH')) return res.status(405).end()
  const { List, User } = await establishConnection()
  const data = req.body as BodyProps
  const totaledData = {
    ...data,
    list: {
      ...data.list,
      items: data.list.items.map((item) => ({
        ...item,
        total: item.qty * item.price
      }))
    }
  }
  if (req.method === 'POST') {
    const message = await createInvoice(totaledData, User, List)
    console.log(totaledData)
    return res.send({
      message
    })
  }
  const message = await editInvoice(totaledData, User, List)
  return res.send({
    message
  })
}

export default handler
