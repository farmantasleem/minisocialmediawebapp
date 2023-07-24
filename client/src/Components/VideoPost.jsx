import { useEffect, useRef } from "react"

export const VideoPost =({video}) => {
 
    return(
        <div className="box">
            <video src={video} className="postVideoLg" autoPlay={true} controls="" muted loop></video>
        </div>
      
    )
}