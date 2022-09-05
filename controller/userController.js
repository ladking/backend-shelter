const User = require('../models/userModel')

exports.registerUser =async (req, res) =>{
    const newuser = await User.create({
        name : req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    const temp ={
        name : newuser.name,
        email : newuser.email,
        id : newuser._id,
        isAdmin: newuser.isAdmin
    }
    if(newuser){
        /* when sending response like this don't forget to use status as the second argument as below if not you'll get
        an error */
        res.status(200).send({temp, status: 200})
    }else{
        res.status(400).send("could not create")
    }
}

exports.login =async(req, res) =>{
    // destructured because the data coming in is not exactly the same with the model schema
    const {email, password} = req.body
    try{
        const user = await User.findOne({email : email, password : password})
        const temp ={
            name : user.name,
            email : user.email,
            id : user._id,
            isAdmin: user.isAdmin
        }
        if(user){
            res.status(200).send({temp, status: 200})
        }else{
            res.status(400).json({message: 'Login failed'})
        }
    }catch(err){
        return res.status(400).json({err})
    }

}

exports.getUser= async(req, res) =>{
   try{
    const users = await User.find()
    res.send(users)
   }catch(err){
    console.log(err)
   }
}