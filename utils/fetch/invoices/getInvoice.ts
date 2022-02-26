import { MongooseModel } from '@/types/types'

export const getInvoice = async (
  id: string,
  User: MongooseModel,
  List: MongooseModel
) => {
  const invoice = await User.findOne({ id }).populate({
    path: 'list',
    populate: {
      path: 'items',
      model: List
    }
  })
  return JSON.stringify(invoice)
}
