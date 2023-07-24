import { Image, Stack } from "@chakra-ui/react"

import logo from "../assets/logo.png"
import {BiSearchAlt} from "react-icons/bi"
import {CgAddR} from "react-icons/cg"
import { CreatePost } from "./CreatePost"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <Stack bgColor={"white"} direction={"row"} minW={"100%"} justifyContent={"space-between"} padding={"20px"}>
           <NavLink to={"/"}> <Image src={logo} width={{base:"100px",md:"120px"}} height={"3rem"}/></NavLink>
            <Stack direction={"row"} alignContent={"center"}>
                    <CreatePost/>
                  <BiSearchAlt fontSize={"2rem"}  style={{margin:"auto"}}/> 
            </Stack>

        
        </Stack>
    )
}