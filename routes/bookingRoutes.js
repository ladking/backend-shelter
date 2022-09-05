const express = require('express');
const {bookRoom, admingetbooking} = require('../controller/bookingController')
const {getbooking} = require('../controller/bookingController')
const {cancelBooking} = require('../controller/bookingController')

const Router = express.Router();

Router.post("/bookroom", bookRoom)
Router.post("/getbookingsbyuserid", getbooking)
Router.post("/cancelbookings", cancelBooking)
Router.get("/admingetbooking", admingetbooking)

module.exports = Router