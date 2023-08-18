import { Heading, HStack, Spacer } from '@chakra-ui/react';
import { NavLink, Outlet } from 'react-router-dom';
import { SNavLink } from './RootLayout.staled';

export default function RootLayout() {
  return (
    <>
      <Heading>
        <NavLink to="/">HOME</NavLink>

        <Spacer />
        <HStack spacing="20px">
          <SNavLink to="register">Register</SNavLink>
          <SNavLink to="login">Log In</SNavLink>
        </HStack>
      </Heading>
      <Outlet />
    </>
  );
}
