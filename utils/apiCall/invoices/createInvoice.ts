import { BodyProps } from '@/types/interfaces'
import { MongooseModel } from '@/types/types'

export const createInvoice = async (
  totaledData: BodyProps,
  User: MongooseModel,
  List: MongooseModel
) => {
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
  return 'success'
}
