import { useState } from 'react';
import { Flex, Text, Icon, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ path, icon, title, navSize, id, actifId, hundleFocus }) => {
    console.log("path = :"+path)
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            
            <Link
                
                backgroundColor={actifId === id ? "#869DAB" : 'none'}
                p={3}
                borderRadius={8}
                _hover={{ textDecor: 'none', backgroundColor: '#F0F4F8' }}
                w={navSize === "large" && "70%"}
                onClick={(event) => {
                    hundleFocus(event, id);
                    console.log("button clicked")
                }}
            >
                <NavLink to={path}>
                <Flex>
                    <Icon as={icon} fontSize="xl" color={actifId === id ? "#3D313F" : '#869DAB'} />
                    <Text ml={5} display={navSize === "small" ? "none" : "flex"} color={actifId === id ? "#3D313F" : '#869DAB'}>
                        {title}
                    </Text>
                </Flex>
                </NavLink>
            </Link>
           
        </Flex>
    );
};

export default NavItem;
