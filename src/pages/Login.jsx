import { LoginForm } from 'components/LoginForm/LoginForm';
import { Text, Box } from '@chakra-ui/react';

export const Login = () => {
  return (
    <Box>
      <Text fontSize={30}> Login to your Phonebook acount</Text>;
      <LoginForm />
    </Box>
  );
};
