import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,useDisclosure, FormLabel
  } from '@chakra-ui/react'

  import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { CgAddR } from 'react-icons/cg'
import { FaCamera, FaImages } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
 export  function UploadDrawer({image,setImage}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate=useNavigate()
    const handlefileSubmit=(e)=>{
       setImage(e.target.files[0])
       navigate("/edit")
    }
  
    return (
      <>
      
        <Button leftIcon={<CgAddR/>} ref={btnRef} onClick={onOpen} minW={"100%"} maxW={"100%"}>
                            Create a post
                    </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"full"}
          padding="0px"
          margin="0px"
        >
     
          <DrawerContent  minH={"100vh"} margin={"0px"} padding={"0px"}>
       
            <NavLink onClick={onClose} style={{padding:"20px",backgroundColor:"rgb(248,248,248)"}}> <AiOutlineArrowLeft fontSize={"1.3rem"} color="black"/></NavLink>


            <DrawerBody padding={"40px"} paddingTop={"0px"} margin={"0px"} backgroundColor={"rgb(248,248,248)"} >
                <FormLabel fontSize={"1.3rem"} paddingBottom={"10px"} paddingLeft={"20px"} for="img" display={"flex"} alignItems={"center"} gap={"10px"}   w={"full"} borderBottom={"2px"} borderBottomColor={"rgb(236,236,236)"} backgroundColor={"transparent"}>
                <input type="file"  onChange={handlefileSubmit}  name="file" id="img" style={{display:"none"}}/>
                <FaImages/>
                <label for="img" >Pick from gallery</label>

                </FormLabel>
                <Button w="full" fontSize={"1.3rem"} justifyItems={"left"} justifyContent={"left"} leftIcon={<FaCamera/>} backgroundColor={"transparent"}>Capture with Camera</Button>
            </DrawerBody>
  
        
          </DrawerContent>
        </Drawer>
      </>
    )
  }