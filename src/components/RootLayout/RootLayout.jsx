import { Flex, HStack, Spacer } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Flex as="nav" p="10px">
        <NavLink to="/">HOME</NavLink>

        <Spacer />
        <HStack spacing="20px">
          <NavLink>Sign Up</NavLink>
          <NavLink>Login</NavLink>
        </HStack>
      </Flex>
      <Outlet />
    </>
  );
}
