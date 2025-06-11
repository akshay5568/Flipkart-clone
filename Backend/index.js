const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const Products = require("./models/productModels");
dotenv.config();
const Flight = require("./models/flightModels");

let url = process.env.MONGO_URL;
mongoose.connect(url)
.then(() => console.log("Connect to mongoDB"))
.catch((err) => console.log(err))


app.use(cors());
app.use(express.json());
app.listen(8080, () => {
    console.log("Port Is Listening : 8080");
})

app.get("/product" , async (req,res) => {
    const product = await Products.find({});
    res.json(product);
});


app.get('/flights' , async (req,res) => {
    const flights = await Flight.find({});
    res.json(flights);
})




