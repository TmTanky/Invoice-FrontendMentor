import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../models/User'
import { establishConnection } from '../../../lib/mongo'

establishConnection()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const allInvoice = await User.find()
  res.send({
    message: 'success',
    data: allInvoice
  })
}

export default handler
