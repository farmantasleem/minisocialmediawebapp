import { Container, Image, SimpleGrid, Stack } from "@chakra-ui/react"
import { Header } from "../Components/Header"

import "../style/HomePage.css"
import { VideoPost } from "../Components/VideoPost"
import { ImagePost } from "../Components/ImagePost"

export const HomePage =() => {
    return(
        <Container bgColor={"red"} minHeight={"200px"} minW={"100vw"} padding="0px">
                <Header/>
                <div id="container">
                    <VideoPost video={"https://res.cloudinary.com/do7al7kak/video/upload/v1690117665/shkiofyh0upww5ev3de8.mp4"}/>
                    <ImagePost size={"postLarge"} image={"https://picsum.photos/536/354"}/>
                    <ImagePost size={"postMedium"} image={"https://picsum.photos/536/354"}/>
                    <ImagePost size={"postSmall"} image={"https://picsum.photos/536/354"}/>
                    <ImagePost image={"https://picsum.photos/536/354"}/>
                    <ImagePost image={"https://picsum.photos/536/354"}/>
                    <ImagePost size={"postSmall"} image={"https://picsum.photos/536/354"}/>

                </div>
       </Container>
    )
}