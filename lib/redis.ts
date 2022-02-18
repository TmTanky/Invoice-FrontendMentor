import { createClient } from 'redis'

export const redisClient = createClient({
  url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_USER_PASSWORD}@${process.env.REDIS_HOST}`
})
