const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Products = require("./models/productModels");
dotenv.config();
const Flight = require("./models/flightModels");
const cart = require("./models/cartModels");
const User = require("./models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookeParser = require("cookie-parser");
const Seller = require("./models/sellerModels");
const { jwtDecode } = require("jwt-decode");

let url = process.env.MONGO_URL;
mongoose
  .connect(url)
  .then(() => console.log("Connect to mongoDB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(cookeParser());
app.listen(8080, () => {
  console.log("Port Is Listening : 8080");
});

app.get("/product", async (req, res) => {
  const product = await Products.find({});
  res.json(product);
});

app.get("/flights", async (req, res) => {
  const flights = await Flight.find({});
  res.json(flights);
});

app.post("/cart", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("No token provided or invalid format");
  }
  const token = req.headers.authorization.split(" ")[1];

  if (!token) return res.status(401).send("No Token Provided");

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decode.userId;
    const { title, img, price, discount, details, catyegorys } = req.body;
    await cart.create({
      userId,
      title,
      img,
      price,
      discount,
      details,
      catyegorys,
    });
    res.status(201).send("Item Added To Cart");
  } catch (err) {
    console.log(err.data);
    res.status(501).send("Faild To add Items");
  }
});

app.get("/cart", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("No token provided or invalid format");
  }
  const token = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(token, process.env.JWT_SECRET);

  const CartData = await cart.find({ userId: decode.userId });
  res.json(CartData);
});

app.post("/cart/remove", async (req, res) => {
  const { id } = req.body;
  await cart.findByIdAndDelete(id);
});

const jwtSecret = process.env.JWT_SECRET;

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const existingEmail = await User.findOne({ email });
  if (existingEmail) return res.status(400).send("User Already Exists");
  const HasedPassword = await bcrypt.hash(password, 10);
  const user = await User.insertMany({name, email, password: HasedPassword });
  const token = jwt.sign({ userId: user[0]._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(201).send({massage:"User Registerd Succsessfully"  , token, userId:user[0]._id});
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) return res.status(400).send("User Does not Exist");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(401).send("Invaild Credeainsiol");

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(200).send({ token });
});

app.get("/users", async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { id } = req.body;
  await User.findByIdAndDelete(id);
  res.status(200).send("User Deleted");
});

app.post("/userdelete", async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decode.userId;
  const data = req.body;
  await User.findByIdAndUpdate(userId, data);
  res.send("User Updeted Sucsesfully");
});

app.post("/seller-register", async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = req.headers.authorization.split(" ")[1];
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decode.userId;
  const {name, email, password } = req.body;
  const existingEmail = await Seller.findOne({ email });
  try {
    if (existingEmail) {
      return res.status(400).send("Seller Already Exists");
    }
    const HasedPassword = await bcrypt.hash(password, 10);
    await Seller.insertMany({userId, name, email, password: HasedPassword });
    res.status(200).send("User Registered Succsessfully");
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.post("/seller-login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Seller.findOne({ email });
  try {
    if (!user) return res.status(400).send("Seller Does Not Exist");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid Deatails");
    res.status(200).send("Login Sucsessfull");
  } catch (errr) {
    res.status(500).send("Server Error");
  }
});
