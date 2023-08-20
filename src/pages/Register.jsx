import { Box, Text } from '@chakra-ui/react';
import RegisterForm from 'components/RegisterForm/RegisterForm';

export const Register = () => {
  return (
    <Box>
      <Text fontSize="3xl">Create a new Phonebook account</Text>
      <RegisterForm />
    </Box>
  );
};
