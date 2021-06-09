import { Button } from '@chakra-ui/react';

import { useColorMode } from "@chakra-ui/color-mode";

interface ItemProps {
  page: number | string;
  isCurrent?: boolean;
}

export function Item({ page, isCurrent = false }: ItemProps) {
  const { colorMode } = useColorMode();

  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {page}
      </Button>
    )
  }
  
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
      _hover={{
        bg: colorMode === 'light' ? 'gray.300' : 'gray.500'
      }}
    >
      {page}
    </Button>
  )
}