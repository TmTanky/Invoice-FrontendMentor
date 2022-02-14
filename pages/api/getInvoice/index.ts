import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../models/User'
import { List } from '../../../models/List'
import { establishConnection } from '../../../lib/mongo'

establishConnection()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { id } = JSON.parse(req.body) as { id: string }
    const invoice = await User.findOne({ id }).populate({
      path: 'list',
      populate: {
        path: 'items',
        model: List
      }
    })
    res.send({
      message: 'success',
      data: invoice
    })
  }
}

export default handler
