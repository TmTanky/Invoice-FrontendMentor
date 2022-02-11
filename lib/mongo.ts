import mongoose from 'mongoose'

const db = mongoose.connect(`${process.env.MONGO_URI}`)

export const establishConnection = async () => {
  return db
}
