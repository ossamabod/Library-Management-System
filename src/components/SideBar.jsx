import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiCalendar,
    FiUser,
    FiDollarSign,
    FiBriefcase,
    FiSettings
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem.jsx'

const Sidebar = () => {
    const [navSize, setNavSize] = useState("large")
    const [actifId,setActifId] = useState("");
    const hundleFocus= (event,id)=> {
        event.preventDefault();
        setActifId(id)
    }
    
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="7vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"                   
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu color='#869DAB' />}
                    onClick={() => {
                        if (navSize == "small")
                            setNavSize("large")
                        else
                        setNavSize("small")
                   
                    }}
                />
                <NavItem   id ="1" navSize={navSize} icon={FiHome} title="Acceuil" hundleFocus={(event)=> hundleFocus(event,"1")} actifId={actifId}/> 
                <NavItem  id ="2" navSize={navSize} icon={FiBriefcase} title="Ouvrage" hundleFocus={(event)=> hundleFocus(event,"2")} actifId={actifId}  path="/ouvrage"/>
                <NavItem  id ="3" navSize={navSize} icon={FiBriefcase} title="Search" hundleFocus={(event)=> hundleFocus(event,"3")} actifId={actifId}  path="/Search"/>
            </Flex>

            <Flex             
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">                   
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading  color="#869DAB" as="h3" size="sm">@All copyrirght reserved</Heading>
                        <Text as='b' color="#869DAB">2024</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Sidebar;