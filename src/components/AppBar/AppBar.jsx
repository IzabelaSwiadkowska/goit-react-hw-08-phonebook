import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import { Flex, Box, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex alignItems="center">
      <Box>
        <Navigation />
      </Box>
      <Spacer />
      <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};
