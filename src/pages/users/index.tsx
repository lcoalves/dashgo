import { RiAddLine, RiPencilLine } from "react-icons/ri";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";

export default function UserList() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW="1480px" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8px" bg="gray.800" p="8">
          <Flex flexDir={['column', 'row']} mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal" mb={['4', '0']}>
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4','6']} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideScreen && <Th>Data de cadastro</Th>}
                {isWideScreen && <Th w={['4', '4','8']} />}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4','6']} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Alves</Text>
                    <Text fontSize="sm" color="gray.300">
                      lucas.alves@teste.com
                    </Text>
                  </Box>
                </Td>
                {isWideScreen && <Td>01 de Abril, 2021</Td>}
                {isWideScreen && (
                  <Td>
                    <Tooltip hasArrow label="Editar" fontSize="md">
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="whiteAlpha"
                      >
                        <Icon as={RiPencilLine} fontSize={['13', '16']} />
                      </Button>
                    </Tooltip>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['4', '4','6']} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Alves</Text>
                    <Text fontSize="sm" color="gray.300">
                      lucas.alves@teste.com
                    </Text>
                  </Box>
                </Td>
                {isWideScreen && <Td>01 de Abril, 2021</Td>}
                {isWideScreen && (
                  <Td>
                    <Tooltip hasArrow label="Editar" fontSize="md">
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="whiteAlpha"
                      >
                        <Icon as={RiPencilLine} fontSize={['13', '16']} />
                      </Button>
                    </Tooltip>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={['4', '4','6']} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Alves</Text>
                    <Text fontSize="sm" color="gray.300">
                      lucas.alves@teste.com
                    </Text>
                  </Box>
                </Td>
                {isWideScreen && <Td>01 de Abril, 2021</Td>}
                {isWideScreen && (
                  <Td>
                    <Tooltip hasArrow label="Editar" fontSize="md">
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="whiteAlpha"
                      >
                        <Icon as={RiPencilLine} fontSize={['13', '16']} />
                      </Button>
                    </Tooltip>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
