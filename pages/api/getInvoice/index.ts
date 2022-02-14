import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../models/User'
import { establishConnection } from '../../../lib/mongo'

establishConnection()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { id } = req.body as { id: string }

    // Popualte the list.items
    const invoice = await User.findOne({ id })
    // Populate the list.items.list
    // const invoice = await User.findOne({ id }).populate('list.items.list')
    res.send({
      message: 'success',
      data: invoice
    })
  }
}

export default handler
