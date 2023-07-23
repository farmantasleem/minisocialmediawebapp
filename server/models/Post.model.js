const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    content:{
       type:Map,
       of:String
    },
    contentType:{
        type:String
    },
    description:{
        type:String,
        default:""
    },
    location:{
        type:String,
    },
    tags:[ {
        type:Map,
        of:String
    }]

   
})

const Postmodel=mongoose.model("post",PostSchema)

module.exports={Postmodel}