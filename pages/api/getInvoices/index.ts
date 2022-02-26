import type { NextApiRequest, NextApiResponse } from 'next'
import { getInvoices } from 'utils'
import { establishConnection } from '../../../lib/mongo'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { User, List } = await establishConnection()
  const invoices = JSON.parse(await getInvoices(User, List))

  return res.status(200).send({
    message: 'success',
    type: 'mongo',
    data: invoices
  })
}

export default handler
