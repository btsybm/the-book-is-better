import mongoose from 'mongoose'

export {
  Review,
}

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  betterThanBook: {
    type: Boolean,
    required: true,
  },
  comments: {
    type: String
  },
  reviewer: [{ type: Schema.Types.ObjectId, ref: 'Profile' }],
  adaptations: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)