import mongoose from 'mongoose'

export {
  Review,
}

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  preferred: {
    type: String,
    enum: ['book', 'movie']
  },
  comments: {
    type: String
  },
  movie: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
  reviewer: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)
