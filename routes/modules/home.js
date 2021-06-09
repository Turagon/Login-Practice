const express = require('express')
const cookieParser = require('cookie-parser')
const router = express.Router()

router.use(cookieParser('abcdefg'))

router.get('/', (req, res) => {
  const value = req.signedCookies.firstName
  if (value) {
    return res.redirect('/login')
  }
  res.render('index')
})

module.exports = router