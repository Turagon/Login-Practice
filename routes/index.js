const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const application = require('./modules/application')

router.use('/', home)
router.use('/login', application)

module.exports = router