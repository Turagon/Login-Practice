const express = require('express')
const router = express.Router()
const cookieParser = require('cookie-parser')
const loginSchema = require('../../models/loginSchema')
const verifyAccount = require('../../public/javascripts/verifyAccount')

router.use(cookieParser('abcdefg'))

router.post('/', (req, res) => {
  const loginData = req.body
  loginSchema.find()
    .lean()
    .then(accounts => verifyAccount(loginData, ...accounts))
    .then(accounts => {
      if (accounts) {
        res.cookie('firstName', accounts, {path: '/', signed: true, maxAge: 600000})
        res.redirect('/login')
      } else {
        res.render('deny')
      }
    })
    .catch(error => console.error(error))
})

router.post('/add', (req, res) => {
  const newData = req.body
  return loginSchema.create(newData)
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

router.get('/addnew', (req, res) => {
  res.render('addAccount')
})

router.get('/', (req, res) => {
  const value = req.signedCookies.firstName
  res.render('welcome', {value})
})

module.exports = router