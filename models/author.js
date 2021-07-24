import mongoose from 'mongoose'

export {
  Author,
}

const Schema = mongoose.Schema

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  works: [{ type: Schema.Types.ObjectId, ref: 'Books' }],
  imageUrl: {
    type: String,
  },
}, {
  timestamps: true
})

const Author = mongoose.model('Author', authorSchema)