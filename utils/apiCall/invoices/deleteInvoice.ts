import { MongooseModel } from '@/types/types'

type DeleteInvoiceProps = {
  User: MongooseModel
  List: MongooseModel
  ids: { id: string; listID: string }
}

export const deleteInvoice = async ({
  User,
  List,
  ids: { id, listID }
}: DeleteInvoiceProps) => {
  await User.findByIdAndDelete(id)
  await List.findByIdAndDelete(listID)

  return 'deleted success'
}
