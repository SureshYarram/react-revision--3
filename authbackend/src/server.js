const express = require("express");

const cors = require("cors");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

const connect = require("./config/db")

const {register , login} = require("./controller/authcontroller")
app.post("/register",register)
app.post("/login",login)
app.listen(8080,async()=>{
    try {
        await connect();
        console.log("listening port 8080")
    } catch (error) {
        console.log(error)
    }
})