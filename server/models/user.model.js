const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        
    },
    password:{
        type:String,
        required:true,
    }
})
module.exports =mongoose.model('User', userSchema);