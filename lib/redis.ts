// import { createClient } from 'redis'

// export const redisClient = () => {
//   const client = createClient({
//     url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_USER_PASSWORD}@${process.env.REDIS_HOST}`
//   })
//   client.on('error', (err) => err)
//   client.connect()
//   return client
// }

export const client = 'client'
