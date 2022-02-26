import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  id: String,
  fullName: String,
  email: String,
  streetAddress: String,
  city: String,
  country: String,
  zipCode: String,
  status: String,
  list: {
    createdAt: Date,
    items: { type: Schema.Types.ObjectId, ref: 'List' }
  }
})

// export const User = models.User || model('User', userSchema)
export default models.User || model('User', userSchema)
