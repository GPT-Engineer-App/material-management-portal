import React from "react";
import { ChakraProvider, Box, Container, VStack, HStack, Text, Button, Table, Thead, Tbody, Tr, Th, Td, FormControl, FormLabel, Input, Select, IconButton } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash, FaSave } from "react-icons/fa";

const Dashboard = () => (
  <Box>
    <Text fontSize="2xl" mb={4}>
      Dashboard
    </Text>
    <Text>Overview of material status, procurement status, and inventory levels.</Text>
  </Box>
);

const UserManagement = () => (
  <Box>
    <Text fontSize="2xl" mb={4}>
      User Management
    </Text>
    <Button leftIcon={<FaPlus />} colorScheme="teal" mb={4}>
      Add User
    </Button>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Username</Th>
          <Th>Role</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>john_doe</Td>
          <Td>Admin</Td>
          <Td>
            <HStack spacing={2}>
              <IconButton icon={<FaEdit />} aria-label="Edit" />
              <IconButton icon={<FaTrash />} aria-label="Delete" />
            </HStack>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
);

const MaterialManagement = () => (
  <Box>
    <Text fontSize="2xl" mb={4}>
      Material Management
    </Text>
    <Button leftIcon={<FaPlus />} colorScheme="teal" mb={4}>
      Add Material
    </Button>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Material Number</Th>
          <Th>Description</Th>
          <Th>Unit of Measure</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>MAT001</Td>
          <Td>Steel Rod</Td>
          <Td>KG</Td>
          <Td>
            <HStack spacing={2}>
              <IconButton icon={<FaEdit />} aria-label="Edit" />
              <IconButton icon={<FaTrash />} aria-label="Delete" />
            </HStack>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
);

const VendorManagement = () => (
  <Box>
    <Text fontSize="2xl" mb={4}>
      Vendor Management
    </Text>
    <Button leftIcon={<FaPlus />} colorScheme="teal" mb={4}>
      Add Vendor
    </Button>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Vendor Number</Th>
          <Th>Vendor Name</Th>
          <Th>Contact</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>VEND001</Td>
          <Td>ABC Supplies</Td>
          <Td>John Smith</Td>
          <Td>
            <HStack spacing={2}>
              <IconButton icon={<FaEdit />} aria-label="Edit" />
              <IconButton icon={<FaTrash />} aria-label="Delete" />
            </HStack>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
);

const ProcurementManagement = () => (
  <Box>
    <Text fontSize="2xl" mb={4}>
      Procurement Management
    </Text>
    <Button leftIcon={<FaPlus />} colorScheme="teal" mb={4}>
      Create Purchase Requisition
    </Button>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>PR Number</Th>
          <Th>Requested By</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>PR001</Td>
          <Td>John Doe</Td>
          <Td>Pending</Td>
          <Td>
            <HStack spacing={2}>
              <IconButton icon={<FaEdit />} aria-label="Edit" />
              <IconButton icon={<FaTrash />} aria-label="Delete" />
            </HStack>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
);

const ReceivingAndInspection = () => (
  <Box>
    <Text fontSize="2xl" mb={4}>
      Receiving and Inspection
    </Text>
    <Button leftIcon={<FaPlus />} colorScheme="teal" mb={4}>
      Create Goods Receipt
    </Button>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>GR Number</Th>
          <Th>PO Number</Th>
          <Th>Vendor</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>GR001</Td>
          <Td>PO001</Td>
          <Td>ABC Supplies</Td>
          <Td>
            <HStack spacing={2}>
              <IconButton icon={<FaEdit />} aria-label="Edit" />
              <IconButton icon={<FaTrash />} aria-label="Delete" />
            </HStack>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
);

const InvoiceVerification = () => (
  <Box>
    <Text fontSize="2xl" mb={4}>
      Invoice Verification
    </Text>
    <Button leftIcon={<FaPlus />} colorScheme="teal" mb={4}>
      Create Invoice
    </Button>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Invoice Number</Th>
          <Th>PO Number</Th>
          <Th>Vendor</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>INV001</Td>
          <Td>PO001</Td>
          <Td>ABC Supplies</Td>
          <Td>
            <HStack spacing={2}>
              <IconButton icon={<FaEdit />} aria-label="Edit" />
              <IconButton icon={<FaTrash />} aria-label="Delete" />
            </HStack>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
);

const Index = () => {
  const [page, setPage] = React.useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "userManagement":
        return <UserManagement />;
      case "materialManagement":
        return <MaterialManagement />;
      case "vendorManagement":
        return <VendorManagement />;
      case "procurementManagement":
        return <ProcurementManagement />;
      case "receivingAndInspection":
        return <ReceivingAndInspection />;
      case "invoiceVerification":
        return <InvoiceVerification />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.xl" p={4}>
        <HStack spacing={4} mb={4}>
          <Button onClick={() => setPage("dashboard")}>Dashboard</Button>
          <Button onClick={() => setPage("userManagement")}>User Management</Button>
          <Button onClick={() => setPage("materialManagement")}>Material Management</Button>
          <Button onClick={() => setPage("vendorManagement")}>Vendor Management</Button>
          <Button onClick={() => setPage("procurementManagement")}>Procurement Management</Button>
          <Button onClick={() => setPage("receivingAndInspection")}>Receiving and Inspection</Button>
          <Button onClick={() => setPage("invoiceVerification")}>Invoice Verification</Button>
        </HStack>
        {renderPage()}
      </Container>
    </ChakraProvider>
  );
};

export default Index;
