import { Container } from "@chakra-ui/react"
import { Header } from "../Components/Header"
import { PostCard } from "../Components/PostCard"
import "../style/PostPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const PostPage =() => {
    const[postData,setPostData]=useState([])
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

        <Container id="postPage" width={{base:"100%",md:"auto"}} gap={"10px"}>
            <Header/>

            { 
                postData?.filter(e=>e.contentType=="image").map((e)=>{
                    return  <PostCard key={e._id} size={e.size} image={e.content.url} description={e.description}/>
                })
            }     
        </Container>
    )
}