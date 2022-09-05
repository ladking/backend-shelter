const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    roomname:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    roomid:{
        type: String,
        required: true
    },
    fromdate:{
        type: String,
        required: true
    },
    todate:{
        type: String,
        required: true
    },
    totalamount:{
        type: Number,
        required: true
    },
    totaldays:{
        type: Number,
        required: true
    },
    transactionId:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: 'booked'

    }
}, {timestamps: true})


const bookingmodel = mongoose.model('bookingmodel', bookingSchema)

module.exports = bookingmodel