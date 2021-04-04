import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text color="gray.300" fontSize="small">Lucas Alves</Text>
          <Text>lucas.alves@teste.com</Text>
        </Box>
      )}
      
      <Avatar
        size="md"
        name="Lucas Alves"
        src="https://github.com/lcoalves.png"
      />
    </Flex>
  )
}