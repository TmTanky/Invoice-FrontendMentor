import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../models/User'
import { redisClient } from '../../../lib/redis'
import { establishConnection } from '../../../lib/mongo'

establishConnection()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const cache = await redisClient().get('allInvoices')

  if (cache) {
    return res.status(200).send({
      message: 'success',
      type: 'redis',
      data: JSON.parse(cache)
    })
  }

  const allInvoices = await User.find()
  await redisClient().set('allInvoices', JSON.stringify(allInvoices), {
    EX: 10800
  })
  return res.status(200).send({
    message: 'success',
    type: 'mongo',
    data: allInvoices
  })
}

export default handler
