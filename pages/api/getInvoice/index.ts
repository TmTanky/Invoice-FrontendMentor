import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../models/User'
import { List } from '../../../models/List'
import { redisClient } from '../../../lib/redis'
import { establishConnection } from '../../../lib/mongo'

establishConnection()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cache = await redisClient().get('invoice')

  if (cache) {
    return res.status(200).send({
      message: 'success',
      type: 'redis',
      data: JSON.parse(cache)
    })
  }

  const { id } = JSON.parse(req.body) as { id: string }
  const invoice = await User.findOne({ id }).populate({
    path: 'list',
    populate: {
      path: 'items',
      model: List
    }
  })
  await redisClient().set(`invoice-${id}`, JSON.stringify(invoice), {
    EX: 10800
  })
  return res.send({
    message: 'success',
    type: 'mongo',
    data: invoice
  })
}

export default handler
