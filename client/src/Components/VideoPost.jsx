import { useEffect, useRef } from "react"

export const VideoPost =({video}) => {
   const ref=useRef()
    const handleChange=(e)=>{
        console.log(e)
    }
    return(
        <div className="box">
            <video src={video} className="postVideoLg" autoPlay={true} controls="" muted loop></video>
        </div>
      
    )
}