import { RiSearchLine } from 'react-icons/ri';

import { Flex, Input, Icon } from '@chakra-ui/react';
import { useRef } from 'react';

export function Search() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW="400px"
      alignSelf="center"
      position="relative"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
        px="4"
        mr="4"
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20" alignSelf="center" />
    </Flex>
  )
}