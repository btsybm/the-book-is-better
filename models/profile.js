import mongoose from 'mongoose'

export {
  Profile,
}

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  votes: [{type: Schema.Types.ObjectId, ref: 'Review'}],
  friends: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Review'}],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)