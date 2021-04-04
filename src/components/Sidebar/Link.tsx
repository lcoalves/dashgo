import { ElementType } from 'react';

import { Link as ChakraLink, LinkProps as ChakraLinkProps, Icon, Text } from '@chakra-ui/react';

import { ActiveLink } from '../ActiveLink';

interface LinkProps extends ChakraLinkProps {
  href: string;
  icon: ElementType;
  children: string;
}

export function Link({ href, icon, children, ...rest }: LinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}