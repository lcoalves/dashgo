import { Flex, IconButton, Icon, useBreakpointValue } from '@chakra-ui/react';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

import { Profile } from './Profile';
import { Notifications } from './Notifications';
import { Search } from './Search';
import { Logo } from './Logo';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxW="1400px"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideScreen && (
        <IconButton
          mr="2"
          fontSize="24"
          variant="unstyled"
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          onClick={onOpen}
        >

        </IconButton>
      )}

      <Logo />

      {isWideScreen && <Search />}

      <Flex align="center" ml="auto">
        <Notifications />

        <Profile showProfileData={isWideScreen} />
      </Flex>
    </Flex>
  )
}