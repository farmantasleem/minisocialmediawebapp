const express = require("express");
const cors = require("cors");
const postRoute = require("./routes/post.route");
const connectDatabase = require("./config/db");
require("dotenv").config();
const cloudinary = require("cloudinary")
const app = express();
const bodyParser=require("body-parser");


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use("/post",postRoute) 
cloudinary.v2.config({
    cloud_name: process.env.CLD_CLIENT_NAME, 
    api_key:process.env.CLD_CLIENT_API, 
    api_secret:process.env.CLD_CLIENT_SECRET
})

connectDatabase()
app.listen(8081,()=>{
    console.log("server started on port no 8081")
})