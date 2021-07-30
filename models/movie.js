import mongoose from 'mongoose'
import { Profile } from './profile.js'
import { Review } from './review.js'

export {
  Movie,
}

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  sourceMaterial: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
  },
  imageUrl: {
    type: String,
    required: false,

  }, 
  review: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }],
  year: {
    type: Number,
    required: true,
  },
  format: {
    type: String,
    enum: ['Movie', 'TV Series', 'Miniseries'],
    required: true,
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: Profile
  },
  cast: {
    type: [String],
  }, 
}, {
  timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)