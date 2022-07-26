const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();

const foodItem = require("./routes/foodItem");
const meal = require("./routes/meal");
const users = require("./routes/users");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/foodItem", foodItem)
app.use("/api/meal", meal)
app.use("/api/users", users)

app.listen(5000, ()=>{
    console.log("Server listening on 5000...")
})