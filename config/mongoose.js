const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/logindatas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('connect failed')
})

db.once('open', () => {
  console.log('connection built')
})

module.exports = db
