import mongoose from 'mongoose'
import { Profile } from './profile.js'


export {
	Book,
}

const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    // prevents duplicates if capitalized differently
    index: {
      unique: true,
      collation: { locale: 'en', strength: 2 }
    }
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  adaptations: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
  },
  imageUrl: {
    type: String,
    required: false,
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: Profile
  }
}, {
  timestamps: true
})

const Book = mongoose.model('Book', bookSchema)