const mongoose = require("mongoose");


const sellerSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId , ref:'User'
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = sellerSchema;
