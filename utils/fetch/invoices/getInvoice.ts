import { User } from '@/models/User'
import { List } from '@/models/List'
import { establishConnection } from '@/lib/mongo'

establishConnection()

export const getInvoice = async (id: string) => {
  const invoice = await User.findOne({ id }).populate({
    path: 'list',
    populate: {
      path: 'items',
      model: List
    }
  })
  return JSON.stringify(invoice)
}
