 const room = require('../models/roomModels')
 
exports.getRooms =async(req, res) =>{
    try{
        const rooms = await room.find({})
        return res.json(rooms)
    }
    catch(err){
        return res.status(400).json({message: err})
    }
    
 }
 exports.getRoomById = async(req, res) =>{
    const roomid = req.body.roomid
    try{
        const rooms = await room.findOne({_id : roomid})
        if(rooms){
             return res.send(rooms)
        }else{
            return res.status(404).send("not found")
        }
       
    }
    catch(err){
        return res.status(400).json({message: err})
    }
 }
 
 exports.addRoom = async(req, res) =>{
    const newRoom = await room.create({
        name: req.body.name,
        description: req.body.description,
        maxcount: req.body.maxcount,
        phonenumber: req.body.phonenumber,
        type: req.body.type,
        rentperday: req.body.rentperday,
        imageurls: req.body.imageurls
    }) 
    await newRoom.save()
    if(newRoom){
        /* when sending response like this don't forget to use status as the second argument as below if not you'll get
        an error */
        res.status(200).send({status: 200})
    }else{
        res.send("could not create")
    }
 }


 