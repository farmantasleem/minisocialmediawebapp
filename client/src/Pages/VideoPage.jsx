import { Container } from "@chakra-ui/react"
import { Header } from "../Components/Header"
import { useState } from "react"
import { VideoPlayer } from "../Components/VideoPlayer"
import "../style/HomePage.css"
export const VideoPage =() => {
    const[data,setdata]=useState([1,2,3,4,5,6,7,8])
    return(
       
         <Container id="videoContainer" bgColor={"green"} height={"100vh"} mt={"0px"} width={{base:"100vw",md:"400px"}}>
            {
                data.map((e)=>{
                    return <VideoPlayer key={e}  video={"https://res.cloudinary.com/do7al7kak/video/upload/v1690117665/shkiofyh0upww5ev3de8.mp4"}/>
                })
            }
        </Container>
     
    )
}