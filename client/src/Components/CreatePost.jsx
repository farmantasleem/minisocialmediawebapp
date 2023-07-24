import { Modal,ModalOverlay,Button,useDisclosure, ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,
  } from '@chakra-ui/react'
import { CgAddR } from 'react-icons/cg'
import { UploadDrawer } from './UploadDrawer'
export const CreatePost=()=>{

        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <CgAddR onClick={onOpen} fontSize={"2rem"} style={{margin:"auto"}}/>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent maxWidth={{base:"80%",md:"400px"}} justifySelf={"center"} alignSelf={"center"}>
                <ModalCloseButton />
                <ModalBody maxWidth={{base:"80vw",md:"400px"}} gap="10px" marginBottom={"40px"} marginTop={"40px"}>
                   <UploadDrawer/>
                    <Button leftIcon={<CgAddR/>} minW={"full"}>  
                        Create a story
                         </Button>
                </ModalBody>
      
                
              </ModalContent>
            </Modal>
          </>
        )
      }
