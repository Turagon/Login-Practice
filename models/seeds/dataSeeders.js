const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

const loginData = require('../loginSchema')
const db = require('../../config/mongoose')

db.once('open', () => {
  for (let i of users) {
    loginData.create({
      firstName: i.firstName,
      email: i.email,
      password: i.password
    })
  }
  console.log('data create done')
})