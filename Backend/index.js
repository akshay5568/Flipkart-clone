const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const Products = require("./models/productModels");
dotenv.config();
const Flight = require("./models/flightModels");
const cart = require("./models/cartModels");
const User = require("./models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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



app.post('/cart' , async (req,res) => {
    const {title , img , price , discount , details , catyegorys} = req.body;
    try {
        cart.insertMany({title,img,price,discount,details,catyegorys});        
    }
    catch (err){
        console.log(err);
    }
} ) 


app.get('/cart' , async (req,res) => {
    const CartData = await cart.find({});
    res.json(CartData);
})

app.post('/cart/remove' , async (req,res) => {
    const {id} = req.body;
    await cart.findByIdAndDelete(id);
});


const jwtSecret = process.env.JWT_SECRET;


app.post('/signup' , async (req,res) => {
    const {name , email , password} = req.body;
    const existingEmail = await User.findOne({email});
    if(existingEmail) return res.status(400).send("User Already Exists");
    const HasedPassword = await bcrypt.hash(password , 10);
    await User.insertMany({name , email , password:HasedPassword});
    res.status(201).send("User Registerd Succsessfully");
})

app.post('/login' , async (req,res) => {
    const {email , password} = req.body;
    const user = await User.findOne({email});
    console.log(user);
    if(!user) return res.status(400).send("User Does not Exist");

    const isMatch = await bcrypt.compare(password, user.password);
   
    
    if(!isMatch) return res.status(401).send("Invaild Credeainsiol");
    res.status(200).send("Login Successfull");
})