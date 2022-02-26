import type { NextApiRequest, NextApiResponse } from 'next'
import List from '@/models/List'
import User from '@/models/User'
import { establishConnection } from '@/lib/mongo'

establishConnection()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, listID } = JSON.parse(req.body) as { id: string; listID: string }
  await User.findByIdAndDelete(id)
  await List.findByIdAndDelete(listID)

  return res.status(202).send({
    message: 'deleted success'
  })
}

export default handler
