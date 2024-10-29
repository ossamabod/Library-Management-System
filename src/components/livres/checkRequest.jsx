import React, { useState } from 'react';
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Flex,
    Text,
    IconButton,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export default function CheckRequest() {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [actionType, setActionType] = useState(""); // "accept" or "refuse"
    
    const [requests, setRequests] = useState([
        { id: 1, matricule: '12345', bookId: 'B001', bookName: 'JavaScript Essentials', requestDate: '2024-10-01' },
        { id: 2, matricule: '67890', bookId: 'B002', bookName: 'React in Action', requestDate: '2024-10-02' },
        { id: 3, matricule: '11223', bookId: 'B003', bookName: 'Understanding Chakra UI', requestDate: '2024-10-03' },
        // Add more data as needed for pagination testing
    ]);
    
    const rowsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const paginatedData = requests.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    const totalPages = Math.ceil(requests.length / rowsPerPage);

    const openConfirmationModal = (request, action) => {
        setSelectedRequest(request);
        setActionType(action);
        onOpen();
    };

    const handleConfirmAction = () => {
        if (selectedRequest && actionType) {
            setRequests(requests.filter(request => request.id !== selectedRequest.id));
            toast({
                title: actionType === "accept" ? "Request accepted" : "Request refused",
                status: actionType === "accept" ? "success" : "warning",
                duration: 3000,
                isClosable: true,
            });
            setSelectedRequest(null);
            setActionType("");
            onClose();
        }
    };

    return (
        <Box maxW="70%" mx="auto" mt="80px" p={8}>
            <Heading mb={6}>Loan Requests</Heading>
            {requests.length > 0 ? (
                <Table variant="simple" bg="#f4f4f9">
                    <Thead bg="#3D313F">
                        <Tr>
                            <Th color="white">Matricule</Th>
                            <Th color="white">Book Name</Th>
                            <Th color="white">Book ID</Th>
                            <Th color="white">Requested Date</Th>
                            <Th color="white">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {paginatedData.map((request, index) => (
                            <Tr key={request.id} bg={index % 2 === 0 ? "#DCC1B0" : "#ADD8E6"}>
                                <Td>{request.matricule}</Td>
                                <Td>{request.bookName}</Td>
                                <Td>{request.bookId}</Td>
                                <Td>{request.requestDate}</Td>
                                <Td>
                                    <Flex gap={4}>
                                        <Button colorScheme="green" onClick={() => openConfirmationModal(request, "accept")}>Accept</Button>
                                        <Button colorScheme="red" onClick={() => openConfirmationModal(request, "refuse")}>Refuse</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Text>No loan requests found.</Text>
            )}

            <Flex justify="center" align="center" mt={6} gap={4} color="#265999">
                <IconButton
                    icon={<ArrowLeftIcon />}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    isDisabled={currentPage === 1}
                    colorScheme="blue"
                    variant="ghost"
                    size="lg"
                />
                <Text fontSize="lg" fontWeight="bold">Page {currentPage} of {totalPages}</Text>
                <IconButton
                    icon={<ArrowRightIcon />}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    isDisabled={currentPage === totalPages}
                    colorScheme="blue"
                    variant="ghost"
                    size="lg"
                />
            </Flex>

            {/* Confirmation Modal */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm Action</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Are you sure you want to {actionType === "accept" ? "accept" : "refuse"} the request for{" "}
                            <strong>{selectedRequest?.bookName}</strong>?
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme={actionType === "accept" ? "green" : "red"}
                            onClick={handleConfirmAction}
                        >
                            Confirm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
