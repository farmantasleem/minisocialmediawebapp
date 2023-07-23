const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());


app.listen(8081,()=>{
    console.log("server started on port no 8081")
})