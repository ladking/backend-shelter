const express = require('express')
const database = require('./config/db')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const roomsRoutes = require('./routes/roomsRoutes')
const userRoutes = require('./routes/userRoute')
const bookingRoute = require('./routes/bookingRoutes')

app.use(express.json())
app.use(cors())
dotenv.config()
database.connectDB()

app.use('/api/apartment', roomsRoutes)
app.use('/api/user', userRoutes)
app.use('/api/bookings',bookingRoute)

const port = process.env.PORT || 8000;

app.get('/', (req, res) =>{
    res.send('hello there')
})

app.listen(port, () =>{
    console.log('running server')
})
