import { Container } from "@chakra-ui/react"
import { Header } from "../Components/Header"

export const HomePage =() => {
    return(
        <Container bgColor={"red"} minHeight={"200px"} minW={"100vw"} padding="0px">
                <Header/>
        </Container>
    )
}