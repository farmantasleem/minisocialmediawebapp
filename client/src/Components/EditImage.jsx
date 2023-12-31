import { Button, Container, Heading, Image, Stack, Text } from "@chakra-ui/react"
import "../style/EditImage.css"
import { useEffect, useState } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"
import none from "../assets/none.png"
import { NavLink } from "react-router-dom"
export const EditImage = ({image,setImage}) => {
    const[size,setSize]=useState("postMedium")
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
        <Container minW={"full"} id="editImageContainer">
            <Stack direction={"row"} width={"full"} padding={"15px"} justifyContent={"space-between"}>
         <NavLink to={"/"}><AiOutlineArrowLeft fontSize={"2rem"} color="black"/></NavLink>
            <NavLink to={`/addpost/${size}`}><Button bgColor={"rgb(0,178,232)"} color={"white"}>Next</Button>
         </NavLink>
            </Stack>
            <Container minW={"100%"} borderRadius={"10px"} alignContent={"center"}display={"grid"} justifyItems={"center"} alignItems={"center"} padding={"10px"} minH={"400px"} maxH={"400px"} backgroundColor={"rgb(239,239,239)"}>
            {
                image?.type!=="video/mp4"?<Image src={file} className={size} width={"90vw"}/>:<video src={file} loop controls autoPlay className={size} width={"90vw"}/>
            }
            </Container>
            <Text justifyContent={"center"} pt="10px" textAlign={"center"} width={"full"}>Aspect Ratio</Text>
            <Stack direction={"row"} id="sizeContainer">
                <Stack direction={"column"} className="sizeCard" _active={{border:"2px",borderColor:"blue"}}>
                    
                    <Stack id="mediumSize"  bgColor={"yellow"} onClick={()=>setSize("postMedium")}></Stack>
                    <Text>1:1</Text>
                </Stack>
                <Stack className="sizeCard" direction={"column"} _active={{border:"2px",borderColor:"blue"}} onClick={()=>setSize("postLarge")}>
                    <Stack id="largeSize" bgColor={"yellow"}></Stack>
                    <Text >4:5</Text>
                </Stack>
                <Stack className="sizeCard" direction={"column"} _active={{border:"2px",borderColor:"blue"}} onClick={()=>setSize("postSmall")}>
                    <Stack id="smallSize" bgColor={"yellow"}></Stack>
                    <Text>16:6</Text>
                </Stack>
            </Stack>

            <Stack minW={"full"} maxW={"full"} id="filterContainer">
                <Heading>Filters</Heading>
            
                <div direction={"row"} id="filterCard" width={"100vw"} overflow={"scroll"}> 
                            <div className="cardFilter">
                                <img src={none}/>
                                <p>None</p>
                            </div>
                            <div className="cardFilter">
                                <img src="https://picsum.photos/536/354"/>
                                <p>None</p>
                            </div>
                            <div className="cardFilter">
                                <img src="https://picsum.photos/536/354"/>
                                <p>None</p>
                            </div>
                         
                            <div className="cardFilter">
                                <img src="https://picsum.photos/536/354"/>
                                <p>None</p>
                            </div>
                            <div className="cardFilter">
                                <img src="https://picsum.photos/536/354"/>
                                <p>None</p>    
                            </div>
                          
                           
                </div>

            </Stack>
        </Container>
    )
}