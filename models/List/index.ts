import { Schema, model, models } from 'mongoose'

const listSchema = new Schema({
  list: [
    { id: String, name: String, qty: Number, price: Number, total: Number }
  ]
})

export const List = model('List', listSchema) || models.List
