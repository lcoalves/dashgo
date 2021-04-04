import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';

import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}