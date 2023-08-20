import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/hooks/useAuth';
import { Box } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="nav">
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </Box>
  );
};
