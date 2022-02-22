// Uncomment the other comments to work with redis

import type { NextApiRequest, NextApiResponse } from 'next'
// import { redisClient } from '@/lib/redis'
import { establishConnection } from '@/lib/mongo'
import { User } from '@/models/User'
import { List } from '@/models/List'

type BodyProps = {
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
    const newList = new List({
    list: totaledData.list.items
  })
  const newUser = new User({
    id: totaledData.id,
    fullName: totaledData.fullName,
    email: totaledData.email,
    streetAddress: totaledData.streetAddress,
    country: totaledData.country,
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
  // const allInvoices = await User.find().populate({
  //   path: 'list',
  //   populate: {
  //     path: 'items',
  //     model: List
  //   }
  // })
  // await redisClient().set('allInvoices', JSON.stringify(allInvoices), {
  //   EX: 10800
  // })
  return res.send({
    message: 'success'
  })
  }
  console.log(totaledData)
  return res.send({
    message: 'edit success'
  })
}

export default handler
