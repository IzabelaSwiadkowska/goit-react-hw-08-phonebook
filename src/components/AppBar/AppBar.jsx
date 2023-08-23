import { Navigation } from '../Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import useAuth from 'components/hooks/useAuth';
import { Flex, Box, Spacer } from '@chakra-ui/react';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex alignItems="center">
      <Box>
        <Navigation />
      </Box>
      <Spacer />
      <Box> {isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};
export default AppBar;
