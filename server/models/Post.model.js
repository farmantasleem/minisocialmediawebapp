const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    content:{
       type:Map,
       of:String
    },
    contentType:{
        type:String
    },
    size:{
        type:String,
        default:"m"
    }
    ,
    description:{
        type:String,
        default:""
    },
    location:{
        type:String,
    },
    tags:{
        type:Array,
        default:[]
    }

   
})

const Postmodel=mongoose.model("post",PostSchema)

module.exports={Postmodel}