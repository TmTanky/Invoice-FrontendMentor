import { connect } from 'mongoose'
import User from '../models/User'
import List from '../models/List'

const db = connect(`${process.env.MONGO_URI}`)

export const establishConnection = async () => {
  return { db, User, List }
}
