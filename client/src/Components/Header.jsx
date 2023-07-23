import { Image, Stack } from "@chakra-ui/react"

import logo from "../assets/logo.png"
import {BiSearchAlt} from "react-icons/bi"
import {CgAddR} from "react-icons/cg"
export const Header = () => {
    return(
        <Stack bgColor={"white"} direction={"row"} minW={"100%"} justifyContent={"space-between"} padding={"20px"}>
            <Image src={logo} width={"120px"} height={"40px"}/>
            <Stack direction={"row"} alignContent={"center"}>
                  <CgAddR fontSize={"2rem"} style={{margin:"auto"}}/>
                  <BiSearchAlt fontSize={"2rem"}  style={{margin:"auto"}}/> 
            </Stack>
        </Stack>
    )
}