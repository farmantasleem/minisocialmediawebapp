import { Container } from "@chakra-ui/react"
import { Header } from "../Components/Header"
import { useEffect, useState } from "react"
import { VideoPlayer } from "../Components/VideoPlayer"
import "../style/HomePage.css"
import axios from "axios"
import { useParams } from "react-router-dom"
export const VideoPage =() => {
    const[postData,setPostData]=useState([])
    const {id} = useParams()
    const getData = async ()=>{
        
        const resp=await axios.get("https://minisocialmedia.onrender.com/post")
        setPostData(resp.data.data)
    }
  
    useEffect(()=>{
        if(postData.length<1){
            getData()
        }
            
    },[])
    return(
       
         <Container id="videoContainer" height={"100vh"} mt={"0px"} width={{base:"100vw",md:"400px"}}>
            {
                postData?.filter((e)=>e.contentType=="video" && e._id==id )?.map((e)=>{
                    return <VideoPlayer key={e} video={e.content.url}/>
                })
            }
              {
                postData?.filter((e)=>e.contentType=="video" && e._id!==id )?.map((e)=>{
                    return <VideoPlayer key={e} video={e.content.url}/>
                })
            }
        </Container>
     
    )
}