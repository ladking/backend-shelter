const mongoose = require('mongoose')

exports.connectDB = async() =>{
    try{
       await mongoose.connect(process.env.MONGOURL, {useUnifiedTopology: true, useNewUrlParser: true})
    }catch(err){
        console.log(err)
    }
}