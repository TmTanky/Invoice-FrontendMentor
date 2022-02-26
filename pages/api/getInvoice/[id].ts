import type { NextApiRequest, NextApiResponse } from 'next'
import { establishConnection } from '@/lib/mongo'
import { getInvoice } from 'utils'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { User, List } = await establishConnection()
  const { id } = req.query as { id: string }
  const invoice = JSON.parse(await getInvoice(id, User, List))
  return res.send({
    message: 'success',
    type: 'mongo',
    data: invoice
  })
}

export default handler
