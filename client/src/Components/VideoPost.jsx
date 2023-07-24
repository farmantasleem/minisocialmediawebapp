import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"

export const VideoPost =({video}) => {
 
    return(
        <div className="box">
           <NavLink to={"/video"}> <video src={video} className="postVideoLg" autoPlay={true} controls="" muted loop></video></NavLink>
        </div>
      
    )
}