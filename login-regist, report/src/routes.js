const express = require('express')
const router = express.Router()
const controller = require('./controller')

// Register a new user
router.post('/signup', controller.signup)

// Login an existing user
router.post('/login', controller.login)

// Report link
router.post('/reportLink', controller.reportLink)

module.exports = router
