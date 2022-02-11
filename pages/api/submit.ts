import type { NextApiRequest, NextApiResponse } from 'next'
import { establishConnection } from '../../lib/mongo'
import { User } from '../../models/User'
import { List } from '../../models/List'

type BodyProps = {
  fullName: string
  email: string
  streetAddress: string
  city: string
  zipCode: string
  list: [
    {
      id: string
      name: string
      qty: number
      price: number
    }
  ]
}

establishConnection()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const dateNow = new Date().toLocaleString('en', {
  //   dateStyle: 'medium'
  // })
  const data = req.body as BodyProps
  const totaledData = {
    ...data,
    list: data.list.map((item) => ({
      ...item,
      total: item.qty * item.price
    }))
  }
  const newList = new List({
    list: totaledData.list
  })
  const newUser = new User({
    fullName: totaledData.fullName,
    email: totaledData.email,
    streetAddress: totaledData.streetAddress,
    city: totaledData.city,
    zipCode: totaledData.zipCode,
    list: newList._id
  })
  await newList.save()
  await newUser.save()
  res.send({
    message: 'success'
  })
}

export default handler
