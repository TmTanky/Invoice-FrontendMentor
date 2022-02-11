import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body)
  res.send({
    message: 'success'
  })
}

export default handler
