const ProductSchema = require('../schemas/productSchema');
const mongoose = require("mongoose")

module.exports = mongoose.model('Product' , ProductSchema);

