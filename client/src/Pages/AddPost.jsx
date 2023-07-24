import { Button, Container, Heading, Image, Stack, Textarea } from "@chakra-ui/react"
import { AiFillCamera, AiOutlineArrowLeft } from "react-icons/ai"
import { BsFillTagFill } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import {MdLocationOn,MdFastfood} from "react-icons/md"
import { FaGamepad } from "react-icons/fa"
import { useEffect, useState } from "react"


export const AddPost = ({image}) => {
    const [file, setFile] = useState();
    function getFile(e) {

        setFile(URL.createObjectURL(image));
    }
    useEffect(()=>{
      if(image){
          getFile()
      }
     
    },[])
    return (
        <Container minW={"100vw"} gap={"10px"}>
            <Stack direction={"row"} gap={"10px"} width={"full"} padding={"15px"} justifyContent={"space-between"}>
                <NavLink to={"/edit"}>   <AiOutlineArrowLeft fontSize={"2rem"} color="black" /></NavLink>
                <Button bgColor={"rgb(0,178,232)"} color={"white"}>Publish</Button>
            </Stack>
            <Image src={file} width={"6rem"} borderRadius={"10px"} height={"5rem"}/>
           
            <Stack color={"rgb(0,178,232)"} direction={"column"}>
                <label htmlFor="description">Description</label>
                <Textarea color={"black"} border={"2px"} borderColor={"rgb(0,178,232)"} rows={12} overflow={"scroll"}/>
            </Stack>
            <Stack direction={"row"} margin={"10px"}>
                <Button leftIcon={<BsFillTagFill/>}>Tag People</Button>
               
            </Stack>
            <Stack direction={"row"} margin={"10px"}>
                <div>
                <Button leftIcon={<MdLocationOn/>}>Location</Button>
                <p>Bangalore, India</p>
                </div>
            </Stack>
            <Stack direction={"column"} margin={"10px"}>
                <Heading fontSize={"1.4rem"}>Add your vibetag</Heading>
                <Stack direction={"row"}>
                        <Button  leftIcon={<AiFillCamera/>} border={"2px"} borderColor={"rgb(0,178,232)"}>Photography</Button>
                        <Button leftIcon={<MdFastfood/>} border={"2px"} borderColor={"rgb(0,178,232)"}>Gaming</Button>
                        <Button leftIcon={<FaGamepad/>} border={"2px"} borderColor={"rgb(0,178,232)"}>Food Blogs</Button>

                </Stack>
            </Stack>
        </Container>
    )
}