const mongoose = require("mongoose");
const sellerSchema = require("../schemas/sellerSchema");


module.exports = mongoose.model('Seller' , sellerSchema);