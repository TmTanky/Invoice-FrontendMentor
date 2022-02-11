import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  fullName: String,
  email: String,
  city: String,
  country: String,
  zipCode: String,
  list: { type: Schema.Types.ObjectId, ref: 'List' }
})

export const User = model('User', userSchema) || models.User
