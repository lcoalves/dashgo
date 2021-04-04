import { Button } from '@chakra-ui/react';

interface ItemProps {
  page: number | string;
  isCurrent?: boolean;
}

export function Item({ page, isCurrent = false }: ItemProps) {
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
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
    >
      {page}
    </Button>
  )
}