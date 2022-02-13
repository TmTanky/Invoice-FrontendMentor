// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from 'redis'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = createClient({
    url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_USER_PASSWORD}@${process.env.REDIS_HOST}`
  })

  client.on('error', (err) => err)

  await client.connect()

  res.status(200).json({ name: 'John Doe' })
}
