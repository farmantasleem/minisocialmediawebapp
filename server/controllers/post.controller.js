
// create post 

const { Postmodel } = require("../models/Post.model.js");
const getDataURI = require("../utils/dataUri");
const cloudinary = require("cloudinary")

// to create post
exports.createPost = async(req,res)=>{
    const file = req.file
   const fileURI = getDataURI(file)
   console.log(fileURI.extName)
   
    try {
        const mycloud=await cloudinary.v2.uploader.upload(fileURI.data.content,{
            resource_type:"raw"
        })
        const newData= Postmodel({
            contentType:fileURI.extName==".PNG" || fileURI.extName==".JPG" ?"image":"video",
            tag:[{
                tag:"travel"
            }],
            content:{
                public_id:mycloud.public_id,
                url:mycloud.url,
            }
        })
        await newData.save()
        res.send({msg:"Post create Successfully"})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
    
}

// to get all the posts

exports.getAllPost = async(req,res) => {
    try {
        const allPost = await Postmodel.find();
        res.status(200).send({data:allPost})
        
    } catch (error) {
        res.status(5001).send({msg:error.message})
    }
}