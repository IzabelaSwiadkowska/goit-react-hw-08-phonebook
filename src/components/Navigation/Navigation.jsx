import useAuth from 'components/hooks/useAuth';
import { Flex } from '@chakra-ui/react';
import { Link, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="nav"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
    >
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
        to="/"
      >
        Home Page
      </Link>
      <HStack spacing="20px"></HStack>
      {isLoggedIn && (
        <Link
          as={NavLink}
          color="white"
          fontSize={{ base: '12px', md: '15px', lg: '30px' }}
          border="1px solid white"
          borderRadius=" 2rem"
          p={{ base: '8px', md: '16px', lg: '20px' }}
          m="4"
          _hover={{ transform: 'scale(1.1)' }}
          _activeLink={{
            color: 'white',

            backgroundColor: 'teal.500',
            borderRadius: '2rem',
            display: 'inline-block',
          }}
          to="/contacts"
          ml="16px"
        >
          Contacts
        </Link>
      )}
    </Flex>
  );
};
