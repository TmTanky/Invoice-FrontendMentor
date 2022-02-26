import mongoose from 'mongoose'
import User from '@/models/User'
import List from '@/models/List'

const db = mongoose.connect(`${process.env.MONGO_URI}`)

export const establishConnection = async () => {
  return { db, User, List }
}
