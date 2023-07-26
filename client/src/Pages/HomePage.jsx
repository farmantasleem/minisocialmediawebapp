import { Container, Image, SimpleGrid, Stack } from "@chakra-ui/react"
import { Header } from "../Components/Header"

import "../style/HomePage.css"
import { VideoPost } from "../Components/VideoPost"
import { ImagePost } from "../Components/ImagePost"
import { useEffect, useState } from "react"
import { getData } from "../helper/helper"
import axios from "axios"

export const HomePage =({image,setImage}) => {
    const[postData,setPostData]=useState([])
    const getData = async ()=>{
        const resp=await axios.get("https://rose-jittery-turtle.cyclic.app/post")
        setPostData(resp.data.data)
    }
  
    useEffect(()=>{
        if(postData.length<1){
            getData()
        }
            
    },[])
    return(
        <Container minHeight={"200px"} minW={"100vw"} padding="0px">
                <Header image={image} setImage={setImage}/>
                <div id="container">

                    {
                        postData?.map((e)=>{
                            return e.contentType=="image"?<ImagePost _id={e._id} key={e._id} size={e.size} image={e.content?.url}/>:<VideoPost _id={e._id} key={e._id}  video={e.content.url}/>
                        })
                    }
                 

                </div>
       </Container>
    )
}