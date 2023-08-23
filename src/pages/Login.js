import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Text, Box } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Text
          display="flex"
          justifyContent="center"
          fontSize={{ base: '36px', md: '48px', lg: '56px' }}
          mt="20px"
        >
          Login to your Phonebook acount
        </Text>
        <LoginForm />
      </HelmetProvider>
    </Box>
  );
};
export default Login;
