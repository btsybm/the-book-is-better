import mongoose from 'mongoose'
import { Profile } from './profile.js'


export {
  User
}

const Schema = mongoose.Schema

const userSchema = new mongoose.Schema(
  {
    email: String,
    googleId: String,
    profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)
