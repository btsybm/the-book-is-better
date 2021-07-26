import mongoose from 'mongoose'
import { Profile } from './profile.js'
import { Book } from './book.js'



export {
  Author,
}

const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true,
      collation: { locale: 'en', strength: 2 }
    }
  },
  works: {
    type: [Schema.Types.ObjectId],
    ref: Book
  },

  imageUrl: {
    type: String,
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: Profile
  }
}, {
  timestamps: true
})

const Author = mongoose.model('Author', authorSchema)