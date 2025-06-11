const mongoose = require("mongoose");
const flightSchema = require("../schemas/flightSchema");

module.exports = mongoose.model("Flight" , flightSchema);

