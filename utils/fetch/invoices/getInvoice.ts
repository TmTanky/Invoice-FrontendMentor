// Uncomment the other comments to work with redis
import { User } from '@/models/User'
import { List } from '@/models/List'
// import { redisClient } from '@/lib/redis'
import { establishConnection } from '@/lib/mongo'

establishConnection()

export const getInvoice = async (id: string) => {
  // const cache = await redisClient().get('invoice')

  // if (cache) {
  //   return res.status(200).send({
  //     message: 'success',
  //     type: 'redis',
  //     data: JSON.parse(cache)
  //   })
  // }
  const invoice = await User.findOne({ id }).populate({
    path: 'list',
    populate: {
      path: 'items',
      model: List
    }
  })
  // await redisClient().set(`invoice-${id}`, JSON.stringify(invoice), {
  //   EX: 10800
  // })
  return JSON.stringify(invoice)
}
