import React from 'react';
import { Box } from "@chakra-ui/react";
import Sidebar from './SideBar';
import NavBar from './NavBar';

function Content() {


  return (
    <>
      <Box display="flex">
        {/* Sidebar */}
        <Box position="fixed" width="150px" height="100%" bg="#3D313F">
          <Sidebar />
        </Box>

        {/* Main Content */}
        <Box flex="1" ml="150px">
          {/* Navbar */}
          <Box position="fixed" top="0" width="calc(100% - 150px)" height="50px" zIndex="10">
            <NavBar />
          </Box>

          {/* Search Livre */}
          
        </Box>
      </Box>
    </>
  );
}

export default Content;
