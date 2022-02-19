import type { NextApiRequest, NextApiResponse } from 'next'
import { redisClient } from '../../lib/redis'
import { establishConnection } from '../../lib/mongo'
import { User } from '../../models/User'
import { List } from '../../models/List'

type BodyProps = {
  id: string
  fullName: string
  email: string
  streetAddress: string
  city: string
  zipCode: string
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
  const newList = new List({
    list: totaledData.list.items
  })
  const newUser = new User({
    id: totaledData.id,
    fullName: totaledData.fullName,
    email: totaledData.email,
    streetAddress: totaledData.streetAddress,
    city: totaledData.city,
    zipCode: totaledData.zipCode,
    status: totaledData.status,
    list: {
      createdAt: totaledData.list.createdAt,
      items: newList._id
    }
  })
  await newList.save()
  await newUser.save()
  const allInvoices = await User.find().populate({
    path: 'list',
    populate: {
      path: 'items',
      model: List
    }
  })
  await redisClient().set('allInvoices', JSON.stringify(allInvoices), {
    EX: 10800
  })
  res.send({
    message: 'success'
  })
}

export default handler
