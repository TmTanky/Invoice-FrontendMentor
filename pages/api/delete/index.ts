import type { NextApiRequest, NextApiResponse } from 'next'
import { establishConnection } from '@/lib/mongo'
import { User } from '@/models/User'
import { List } from '@/models/List'

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
