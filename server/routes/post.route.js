const express = require("express");
const { createPost, getAllPost } = require("../controllers/post.controller");
const singleUpload = require("../middleware/multer");

const postRoute = express.Router();

// to create post
postRoute.post("/",singleUpload,createPost)

// to get all the post 

postRoute.get("/",getAllPost)


module.exports= postRoute