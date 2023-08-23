import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      pl="20px"
    >
      <Box
        as="h1"
        fontSize={{ base: '38px', md: '78px', lg: '108px' }}
        mt="56px"
      >
        Welcome to the <Box color="teal">Phonebook </Box>
      </Box>
      <Box as="p" mt="36px" fontSize={{ base: '20px', md: '36px', lg: '38px' }}>
        Here you can store your contacts
      </Box>
      <Box as="p" mt="36px" fontSize={{ base: '20px', md: '36px', lg: '38px' }}>
        Please{' '}
        <Link
          as={NavLink}
          textDecoration="underline"
          color="pink.700"
          to="/register"
        >
          Register
        </Link>{' '}
        yourself <br />
        or
        <br />
        <Link
          as={NavLink}
          textDecoration="underline"
          color="pink.700"
          to="/login"
        >
          Login
        </Link>
      </Box>
    </Box>
  );
};
export default Home;
