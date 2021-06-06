const mongoose = require('mongoose')
const schema = mongoose.Schema

const loginSchema = new schema({
  firstName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true }
})

module.exports = mongoose.model('loginData', loginSchema)