const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type:mongoose.Schema.Types.ObjectId , ref: 'User',
    required:true
  },
  title: {
    type: String,
    required: true,
  },
  BrandName: {
    type: String,
    // required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number, 
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  details: {
    type: String,
  },
  catyegorys: {
    type: String,
  },
  qty:{
    type:Number,
    default:1,
  }
});

module.exports = cartSchema;
