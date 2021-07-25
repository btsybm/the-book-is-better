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
  // so that later I can add a section on movie show page with all the comments from reviews
  adaptations: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)