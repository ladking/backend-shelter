const bookingmodel = require('../models/bookingModel')
const Room = require('../models/roomModels')


exports.bookRoom = async (req, res) =>{
    try{
        const result = new bookingmodel({
        roomname :req.body.roomname,
        userid :req.body.userid,
        fromdate : req.body.fromDate,
        todate :req.body.toDate,
        totalamount :req.body.totalAmount,
        totaldays:req.body.totalDays,
        transactionId: '1234',
        status: 'booked',
        roomid: req.body.roomid
        })
        const booking = await result.save() //This is working fine
        //req.body is coming in fine
             const roomtemp = await Room.findOne({_id: req.body.roomid}) // the problem starts here ///problem resolved but i'll be on the lookout        
          roomtemp.currentbookings.push({
            bookingid: booking._id,
             fromdate: req.body.fromDate, 
             todate: req.body.toDate, 
             userid: req.body.userid,
            status: booking.status})
         await roomtemp.save()
        res.send('Room Booked Sucessfully')
    }catch(err){
        console.log('error message:',err)
    }
   
}

exports.getbooking = async(req, res) =>{
    const userid = req.body.userid
    try{
        const bookings = await bookingmodel.find({userid: userid})
        res.send(bookings)
    } catch(err){
        return res.status(400).json({err})
    }
}
exports.admingetbooking = async(req, res) =>{
    try{
        const bookings = await bookingmodel.find()
        res.send(bookings)
    } catch(err){
        return res.status(400).json({err})
    }
}

exports.cancelBooking= async(req, res) =>{
    const id = req.body.id
    try{
        const bookingItem = await bookingmodel.findOne({_id: id})
         bookingItem.status = "cancelled"
            await bookingItem.save()

        const room = await Room.findOne({_id: '6312122b6dfbec20a4a3a2e3'})
        const bookings = room.currentbookings
        const temp =bookings.filter(booking => booking.bookingid !== id )
        room.currentbookings = temp
        await room.save()
        res.status(200).send({status: 200})
    }catch(err){
        return res.status(400).json({err})
    }
}

