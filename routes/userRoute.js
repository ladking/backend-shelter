const express = require('express')
const {registerUser} = require('../controller/userController')
const {login, getUser} = require('../controller/userController')
const Router = express.Router()

Router.post('/register', registerUser)
Router.post('/login', login)
Router.get('/getallusers', getUser)

module.exports = Router