import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteInvoice } from 'utils'
import { establishConnection } from '@/lib/mongo'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { User, List } = await establishConnection()

  const { id, listID } = JSON.parse(req.body) as { id: string; listID: string }
  const message = await deleteInvoice({ User, List, ids: { id, listID } })

  return res.status(202).send({
    message
  })
}

export default handler
