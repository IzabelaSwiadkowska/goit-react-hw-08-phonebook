import { NavLink } from 'react-router-dom';
import { Box, Link } from '@chakra-ui/react';

const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center">
      <Link
        as={NavLink}
        color="white"
        fontSize={{ base: '12px', md: '15px', lg: '30px' }}
        border="1px solid white"
        borderRadius=" 2rem"
        p={{ base: '10px', md: '16px', lg: '20px' }}
        m="4"
        _hover={{ transform: 'scale(1.1)' }}
        _activeLink={{
          color: 'white',

          backgroundColor: 'teal.500',
          borderRadius: '2rem',
          display: 'inline-block',
        }}
        to="/register"
      >
        Register
      </Link>
      <Link
        as={NavLink}
        color="white"
        fontSize={{ base: '12px', md: '15px', lg: '30px' }}
        border="1px solid white"
        borderRadius=" 2rem"
        p={{ base: '10px', md: '16px', lg: '20px' }}
        m="4"
        _hover={{ transform: 'scale(1.1)' }}
        _activeLink={{
          color: 'white',

          backgroundColor: 'teal.500',
          borderRadius: '2rem',
          display: 'inline-block',
        }}
        to="/login"
      >
        Log In
      </Link>
    </Box>
  );
};
export default AuthNav;
