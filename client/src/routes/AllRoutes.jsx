import { Route, Routes, } from "react-router-dom"
import { PostPage } from "../Pages/PostPage"

import { VideoPage } from "../Pages/VideoPage"
import { HomePage } from "../Pages/HomePage"
import { EditImage } from "../Components/EditImage"
import { useState } from "react"
import { AddPost } from "../Pages/AddPost"

export const AllRoutes = () =>{
    const[image,setImage]=useState()
    return(
        <Routes>
            <Route path="/" element={<HomePage image={image} setImage={setImage}/>}/>
            <Route path="/video" element={<VideoPage image={image} setImage={setImage}/>}/>
            <Route path="/post" element={<PostPage image={image} setImage={setImage}/>}/>
            <Route path="/edit" element={<EditImage image={image} setImage={setImage}/>}/>
            <Route path="/addpost" element={<AddPost image={image}/>}/>
        </Routes>
    )
}