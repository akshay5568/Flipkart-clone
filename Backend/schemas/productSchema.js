const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sellerId: {
    type:mongoose.Schema.Types.ObjectId , ref:'Seller'
  },
  img: {
    type: String,
    required: true,
  },
  BrandName: {
    type: String,
    // required: true,
  },
  price: {
    type: Number, // Better to use Number, not String
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
});

module.exports = ProductSchema;
