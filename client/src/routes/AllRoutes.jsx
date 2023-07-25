import { Route, Routes, } from "react-router-dom"
import { PostPage } from "../Pages/PostPage"

import { VideoPage } from "../Pages/VideoPage"
import { HomePage } from "../Pages/HomePage"
import { EditImage } from "../Components/EditImage"
import { useEffect, useState } from "react"
import { AddPost } from "../Pages/AddPost"
import axios from "axios"

import {getData} from "../helper/helper"

export const AllRoutes = () =>{
    const[image,setImage]=useState()
   
  
  
    return(
        <Routes>
            <Route path="/" element={<HomePage image={image} setImage={setImage}/>}/>
            <Route path="/video/:id" element={<VideoPage image={image} setImage={setImage}/>}/>
            <Route path="/post/:id" element={<PostPage image={image} setImage={setImage}/>}/>
            <Route path="/edit" element={<EditImage  image={image} setImage={setImage}/>}/>
            <Route path="/addpost/:size" element={<AddPost image={image}/>}/>
        </Routes>
    )
}