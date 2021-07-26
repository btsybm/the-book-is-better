import mongoose from 'mongoose'

export {
  Review,
}

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  betterThanBook: {
    type: Boolean,
  },
  comments: {
    type: String
  },
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)