import mongoose from 'mongoose'

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
  works: [{ type: Schema.Types.ObjectId, ref: 'Books' }],
  imageUrl: {
    type: String,
  },
}, {
  timestamps: true
})

const Author = mongoose.model('Author', authorSchema)