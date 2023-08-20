import { Box } from '@chakra-ui/react';

import { SNavLink } from './AuthNav.staled';

export const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center">
      <SNavLink to="register">Register</SNavLink>
      <SNavLink to="login">Log In</SNavLink>
    </Box>
  );
};
