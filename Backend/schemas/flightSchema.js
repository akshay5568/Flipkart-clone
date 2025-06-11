const mongoose = require("mongoose");


const flightSchema = new mongoose.Schema({
     flightNumber:String,
     airline:String,
     img:String,
     departure:{
        airport:String,
        city_name:String,
        iata:String,
        time:String
     },
     arrival:{
      airport:String,
      city_name:String,
      iata:String,
      time:String,
     },
     duration:String,
     price:Number,
     status:String,
})

module.exports = flightSchema;
