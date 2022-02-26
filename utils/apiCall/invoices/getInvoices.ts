import { MongooseModel } from '@/types/types'

export const getInvoices = async (User: MongooseModel, List: MongooseModel) => {
  const allInvoices = await User.find().populate({
    path: 'list',
    populate: {
      path: 'items',
      model: List
    }
  })
  return JSON.stringify(allInvoices)
}
