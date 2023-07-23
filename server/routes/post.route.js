const express = require("express");
const { createPost } = require("../controllers/Post.controller");
const singleUpload = require("../middleware/multer");

const postRoute = express.Router();

// to create post
postRoute.post("/",singleUpload,createPost)


module.exports= postRoute