import React from 'react'
import logo from './ressource/logo.png'
import logo_app from './ressource/logo_app.png'
import {
    Text,
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Image,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";


const NavBar = () => {
    return (
        <>
            <Box position="fixed" top="0" width="100%" height="70px" bg="#DCC1B0">
                <Flex alignItems={"center"} justifyContent={"space-between"} direction="row" marginBottom="30">
                    <Image  src={logo} alt="logo"  boxSize='60px'   borderRadius='full' />                  
                    <Image boxSize='70px'   src={logo_app}  />                                     
                </Flex>
            </Box>
        </>
    )
}

export default NavBar