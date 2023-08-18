import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>
      <Box as="h1">Welcome to the Phonebook</Box>
      <Box as="p">
        Here you can store your contacts
        <br />
        Please <NavLink to="register">Register</NavLink> yourself or
        <NavLink to="login">Login</NavLink>
      </Box>
    </Container>
  );
};
