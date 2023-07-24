import { Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import {BsThreeDots} from "react-icons/bs"
import user from "../assets/users.png"
export const PostCard =({image,size}) =>{
    return(
        <Container marginTop={"40px"} padding={"30px"} boxShadow={"lg"} borderRadius={"20px"}>
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
            <img src={image}  className={`${size} postImage`}/>
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