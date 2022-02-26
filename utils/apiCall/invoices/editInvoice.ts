import { BodyProps } from '@/types/interfaces'
import { MongooseModel } from '@/types/types'

export const editInvoice = async (
  totaledData: BodyProps,
  User: MongooseModel,
  List: MongooseModel
) => {
  await List.findByIdAndUpdate(totaledData.listID, {
    list: totaledData.list.items
  })
  await User.findByIdAndUpdate(totaledData.userID, {
    fullName: totaledData.fullName,
    email: totaledData.email,
    streetAddress: totaledData.streetAddress,
    country: totaledData.country,
    city: totaledData.city,
    zipCode: totaledData.zipCode,
    status: totaledData.status
  })

  return 'edit success'
}
