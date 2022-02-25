import { List } from '../../../models/List'
import { User } from '../../../models/User'
import { establishConnection } from '../../../lib/mongo'

establishConnection()

export const getInvoices = async () => {
  const allInvoices = await User.find().populate({
    path: 'list',
    populate: {
      path: 'items',
      model: List
    }
  })
  return JSON.stringify(allInvoices)
}
