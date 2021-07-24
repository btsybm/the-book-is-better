import mongoose from 'mongoose'

export {
	Book,
}

const Schema = mongoose.Schema

  const bookSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
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
  }, {
    timestamps: true
  })

const Book = mongoose.model('Book', bookSchema)