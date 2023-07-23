import { Heading, Image, Progress, Stack, Text, VStack } from "@chakra-ui/react"

import {AiOutlineHeart,AiFillHeart as LikedIcon,AiOutlineArrowLeft} from "react-icons/ai"
import {FaShare} from "react-icons/fa"
import "../style/VideoPlayer.css"

import { useEffect, useRef, useState } from "react"
export const VideoPlayer =({video}) => {
    const[liked,setlike]=useState(false)
    const[timer,setTimer]=useState(0)
    
  
    return(
        <div className="videoPlayer">
            <Progress border={"0px"} value={0} />
            <video  src={video} autoPlay={true} controls="" muted loop></video>

            <AiOutlineArrowLeft color="white" id="prevArrow"/>
            <Stack id="likeShare" direction={"column"}>
             
               {
                !liked?<AiOutlineHeart color="white" onClick={()=>{setlike(!liked)}} fontSize={"2.5rem"}/>:<LikedIcon onClick={()=>{setlike(!liked)}} color="red" fontSize={"2.5rem"}/>
               }
               <FaShare color="white" fontSize={"2rem"} />
            </Stack>
          <Stack direction={"column"} id="videoContent">
                <Stack id="userInfo">
                    <Image width={"50px"} borderRadius={"50px"} height={"50px"} src="https://avatars.githubusercontent.com/u/107990962?v=4"/>
                    <VStack gap={"0px"} textAlign={"left"} justifyContent={"left"}>
                        <Heading fontSize={"15px"} w={"full"}>User Name</Heading>
                        <Text>Lucknow,Uttar Pardesh</Text>
                    </VStack>
                </Stack>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos!</Text>
          </Stack>
        </div>
      
    )
}