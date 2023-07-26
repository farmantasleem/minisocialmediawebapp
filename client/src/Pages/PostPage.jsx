import { Container } from "@chakra-ui/react"
import { Header } from "../Components/Header"
import { PostCard } from "../Components/PostCard"
import "../style/PostPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const PostPage =() => {
    const[postData,setPostData]=useState([])
    const {id}=useParams()
    const[found,setFound]=useState(false)
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

        <Container id="postPage" width={{base:"100%",md:"auto"}} gap={"10px"}>
            <Header/>

            { 
                postData?.filter(e=>e.contentType=="image" && e._id==id).map((e)=>{
                    return  <PostCard key={e._id} _id={e._id} size={e.size} image={e.content.url} description={e.description}/>
                })
            } 
            { 
                postData?.filter(e=>e.contentType=="image" && e._id!==id).map((e)=>{
                    return  <PostCard key={e._id} _id={e._id} size={e.size} image={e.content.url} description={e.description}/>
                })
            }     
        </Container>
    )
}