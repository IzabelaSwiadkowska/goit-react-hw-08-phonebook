import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Box, Text } from '@chakra-ui/react';

const Register = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <Text
          display="flex"
          justifyContent="center"
          fontSize={{ base: '36px', md: '48px', lg: '56px' }}
          mt="20px"
        >
          Create a new Phonebook account
        </Text>
        <RegisterForm />
      </HelmetProvider>
    </Box>
  );
};
export default Register;
