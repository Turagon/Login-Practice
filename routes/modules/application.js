const express = require('express')
const router = express.Router()
const loginSchema = require('../../models/loginSchema')
const verifyAccount = require('../../public/javascripts/verifyAccount')

router.post('/', (req, res) => {
  const loginData = req.body
  loginSchema.find()
    .lean()
    .then(accounts => verifyAccount(loginData, ...accounts))
    .then(accounts => {
      if (accounts) {
        res.render('welcome', {accounts})
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

module.exports = router