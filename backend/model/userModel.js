const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Name is required"],
        trim:true,
        maxlength:[25,"Name must be 25 ch Long"]
    },
    email:{
        type:String,
        unique:true,
        require:[true, "Email is required"]
    },
    password:{
        type:String
    },
    token:{
        type:String
    }

})

module.exports = mongoose.model('User' , userSchema)