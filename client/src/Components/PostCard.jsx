import { Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import {BsThreeDots} from "react-icons/bs"
import user from "../assets/users.png"
import {AiOutlineHeart,AiFillHeart as LikedIcon} from "react-icons/ai"
import { useState } from "react"
export const PostCard =({image,size}) =>{
    const[liked,setlike]=useState(false)

    return(
        <Container id="postCard" marginTop={"40px"} padding={"30px"} boxShadow={"lg"} borderRadius={"20px"}>
            <Stack justifyContent={"space-between"} flexDirection={"row"}>
            <Stack flexDirection={"row"} id="postUser">
                    <Image width={"50px"} borderRadius={"50px"} height={"50px"} src="https://avatars.githubusercontent.com/u/107990962?v=4"/>
                    <VStack gap={"0px"} textAlign={"left"} justifyContent={"left"}>
                        <Heading fontSize={"15px"} w={"full"}>User Name</Heading>
                        <Text>Lucknow,Uttar Pardesh</Text>
                        
                    </VStack>
                </Stack>
                <BsThreeDots/>
            </Stack>
           
            <div className="imagePostCard">
            <img src={image}  className={`${size} postImage`}/>
            {
                !liked?<AiOutlineHeart color="white" className="postLike" onClick={()=>{setlike(!liked)}} fontSize={"2.5rem"}/>:<LikedIcon className="postLike" onClick={()=>{setlike(!liked)}} color="red" fontSize={"2.5rem"}/>
               }
            </div>
            <Stack id="postCardContent">
               <Stack direction={"row"} alignItems={"center"}>
               <Image src={user} height={"2.5rem"} width={"4.5rem"}/>
               <Text>
                   Farman Tasleem & 55 Others emoted
               </Text>
               </Stack>
               <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At sit cum est, nulla vel minus excepturi nihil ratione voluptas veniam.
               </Text>
            </Stack>
        </Container>
    )
}