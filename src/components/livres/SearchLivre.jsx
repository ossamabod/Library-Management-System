import React, { useState } from 'react';
import { Box, Input, Button, Select, Table, Thead, Tbody, Tr, Th, Td, Text, Flex, SimpleGrid, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';


const SearchLivre = ({ data }) => {
  const toast = useToast(); 
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [editionDate, setEditionDate] = useState('');
    const [type, setType] = useState('');
    const [loanStatusFilter, setLoanStatusFilter] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [loanStatus, setLoanStatus] = useState(
        data.reduce((acc, book) => ({ ...acc, [book.id]: book.loanStatus }), {})
    );
    const [matricule, setMatricule] = useState(''); // State for matricule input
    const [selectedBookId, setSelectedBookId] = useState(null); // State to store selected book ID

    const rowsPerPage = 5;

    const handleSearch = () => {
        const filtered = data.filter((item) => {
            const matchesBookName = item.bookName.toLowerCase().includes(bookName.toLowerCase());
            const matchesAuthorName = item.authorName.toLowerCase().includes(authorName.toLowerCase());
            const matchesEditionDate = editionDate ? item.editionDate === editionDate : true;
            const matchesType = type ? item.type === type : true;
            const matchesLoanStatus = loanStatusFilter === ''
                ? true
                : loanStatusFilter === 'loué'
                ? item.loanStatus === true
                : item.loanStatus === false;

            return matchesBookName && matchesAuthorName && matchesEditionDate && matchesType && matchesLoanStatus;
        });
        setFilteredData(filtered);
        setShowTable(true);
        setCurrentPage(1);
    };

    const handleLoanAction = (id) => {
      setSelectedBookId(id); // Store the selected book ID
      onOpen(); // Open the modal
  };

  
  const confirmLoan = async () => { // Add toast as a parameter
    if (matricule) {
        try {
            const response = await axios.post('/api/loan', {
                matricule,
                bookId: selectedBookId,
            });
  
            if (response.status === 200) {
                setLoanStatus((prevStatus) => ({
                    ...prevStatus,
                    [selectedBookId]: true,
                }));
                
                toast({
                    title: "Loan confirmed successfully.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                
                onClose(); 
                setMatricule(''); 
            } else {
                toast({
                    title: "Failed to loan the book. Please try again.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error("Error loaning the book:", error);
            toast({
                title: "An error occurred. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    } else {
        toast({
            title: "Please enter a valid matricule.",
            status: "warning",
            duration: 3000,
            isClosable: true,
        });
    }
  };
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    return (
        <Box maxW="70%" mx="auto" mt="80px" p={8}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
                <Flex align="center">
                    <Text fontWeight="medium" width="30%">Book Name:</Text>
                    <Input
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        placeholder="Search by Book Name"
                        variant="outline"
                        focusBorderColor="#D5Ad36"
                        ml={2}
                    />
                </Flex>

                <Flex align="center">
                    <Text fontWeight="medium" width="30%">Author Name:</Text>
                    <Input
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Search by Author Name"
                        variant="outline"
                        focusBorderColor="#D5Ad36"
                        ml={2}
                    />
                </Flex>

                <Flex align="center">
                    <Text fontWeight="medium" width="30%">Edition Date:</Text>
                    <Input
                        type="date"
                        value={editionDate}
                        onChange={(e) => setEditionDate(e.target.value)}
                        variant="outline"
                        focusBorderColor="#D5Ad36"
                        ml={2}
                    />
                </Flex>

                <Flex align="center">
                    <Text fontWeight="medium" width="30%">Type:</Text>
                    <Select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Select Type"
                        focusBorderColor="#D5Ad36"
                        ml={2}
                    >
                        <option value="ouvrage">Ouvrage</option>
                        <option value="mf">MF</option>
                    </Select>
                </Flex>

                <Flex align="center">
                    <Text fontWeight="medium" width="30%">Loan Status:</Text>
                    <Select
                        value={loanStatusFilter}
                        onChange={(e) => setLoanStatusFilter(e.target.value)}
                        placeholder="All"
                        focusBorderColor="#D5Ad36"
                        ml={2}
                    >
                        <option value="loué">Loué</option>
                        <option value="non loué">Non Loué</option>
                    </Select>
                </Flex>
            </SimpleGrid>

            <Flex justify="center" mb={6}>
                <Button
                    onClick={handleSearch}
                    colorScheme="yellow"
                    bg="#D5Ad36"
                    _hover={{ bg: "#CA9703" }}
                    width="30%"
                >
                    Search
                </Button>
            </Flex>

            {showTable && (
                <Box overflowX="auto" mt={6} w="full">
                    <Table size="md" bg="#f4f4f9">
                        <Thead bg="#3D313F">
                            <Tr>
                                <Th color="white">Book Name</Th>
                                <Th color="white">Author Name</Th>
                                <Th color="white">Edition Date</Th>
                                <Th color="white">Type</Th>
                                <Th color="white">Status</Th>
                                <Th color="white">Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((item, index) => (
                                    <Tr key={item.id} bg={index % 2 === 0 ? "#DCC1B0" : "#ADD8E6"}>
                                        <Td>{item.bookName}</Td>
                                        <Td>{item.authorName}</Td>
                                        <Td>{item.editionDate}</Td>
                                        <Td>{item.type}</Td>
                                        <Td>{loanStatus[item.id] ? 'Loué' : 'Non Loué'}</Td>
                                        <Td>
                                            <Button
                                                colorScheme={loanStatus[item.id] ? "red" : "green"}
                                                onClick={loanStatus[item.id] ? undefined : () => handleLoanAction(item.id)}
                                                isDisabled={loanStatus[item.id]}
                                            >
                                                {loanStatus[item.id] ? 'Loué' : 'Loan'}
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan="6" textAlign="center" color="gray.500">
                                        No results found
                                    </Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>

                    <Flex justify="center" align="center" mt={6} gap={4} color="#265999">
                        <IconButton
                            icon={<ArrowLeftIcon />}
                            onClick={handlePreviousPage}
                            isDisabled={currentPage === 1}
                            colorScheme="blue"
                            variant="ghost"
                            size="lg"
                        />
                        <Text fontSize="lg" fontWeight="bold">Page {currentPage} of {totalPages}</Text>
                        <IconButton
                            icon={<ArrowRightIcon />}
                            onClick={handleNextPage}
                            isDisabled={currentPage === totalPages}
                            colorScheme="blue"
                            variant="ghost"
                            size="lg"
                        />
                    </Flex>
                </Box>
            )}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter Matricule</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            placeholder="Enter your matricule"
                            value={matricule}
                            onChange={(e) => setMatricule(e.target.value)}
                            focusBorderColor="#D5Ad36"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="yellow" bg="#D5Ad36" mr={3} onClick={confirmLoan}>
                            Confirm
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default SearchLivre;
