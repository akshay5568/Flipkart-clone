const { default: mongoose } = require("mongoose");
const cartSchema  = require("../schemas/cartSchema");


module.exports = mongoose.model("Cart" , cartSchema);
