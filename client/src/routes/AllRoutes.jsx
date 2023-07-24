import { Route, Routes, } from "react-router-dom"
import { PostPage } from "../Pages/PostPage"

import { VideoPage } from "../Pages/VideoPage"
import { HomePage } from "../Pages/HomePage"

export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/video" element={<VideoPage/>}/>
            <Route path="/post" element={<PostPage/>}/>
        
        </Routes>
    )
}