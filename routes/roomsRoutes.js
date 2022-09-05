const express = require('express')
const {getRooms} = require('../controller/roomsController')
const {getRoomById, addRoom} = require('../controller/roomsController')

const Router = express.Router()

Router.get("/getrooms", getRooms )
Router.post("/getroombyid", getRoomById)
Router.post("/addroom", addRoom)

module.exports= Router