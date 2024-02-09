const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt =require('bcrypt')
const validator = require('validator')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})
//static sign up
userSchema.statics.signup = async function(email, password) {
  //validation
  if (!email || !password) {
    throw Error("Please fill all fields")
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }
  const exists = await this.findOne({email})
  if (exists) {
    throw Error('Email already in Use')
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({email, password: hash})

  return user
}


module.exports = mongoose.model('User', userSchema)
