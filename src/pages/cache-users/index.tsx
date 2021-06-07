import { useQuery } from 'react-query'
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
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
import { User } from '../../services/mirage'
import { api } from "../../services/api";

type UserResponse = {
  users: User[]
}

export default function UserList() {
  const { data, isLoading, isFetching, error } = useQuery('users', async () => {
    const response = await api.get<UserResponse>('/users')

    const users = response.data.users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }));


    return users
  }, {
    staleTime: 1000 * 10 // 10 seconds
  })

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
              { !isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" /> }
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

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao carregar os usuários</Text>
            </Flex>
          ) : (
            <>
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
                  {data.map(user => (
                    <Tr key={user.id}>
                      <Td px={['4', '4','6']} color="gray.300" w="8">
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideScreen && <Td>{user.created_at}</Td>}
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
                  ))}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
