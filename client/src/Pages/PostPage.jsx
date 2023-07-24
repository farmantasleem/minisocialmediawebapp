import { Container } from "@chakra-ui/react"
import { Header } from "../Components/Header"
import { PostCard } from "../Components/PostCard"
import "../style/PostPage.css";

export const PostPage =() => {
    return(

        <Container id="postPage" width={{base:"100%",md:"auto"}} gap={"10px"}>
            <Header/>
                 <PostCard size={"postLarge"} image={"https://picsum.photos/536/354"}/>  
                 <PostCard size={"postMedium"} image={"https://picsum.photos/536/354"}/>  
                 <PostCard size={"postLarge"} image={"https://picsum.photos/536/354"}/>  
                 <PostCard size={"postMedium"} image={"https://picsum.photos/536/354"}/>  
                 <PostCard size={"postSmall"} image={"https://picsum.photos/536/354"}/>       
        </Container>
    )
}