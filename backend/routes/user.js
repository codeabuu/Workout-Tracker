const express = require('express')
const {SignupUser, LoginUser} = require('../controllers/userCon')

const router = express.Router()

//login route
router.post('/login', LoginUser)


//signup route
router.post('/signup', SignupUser)

module.exports = router
