import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} py="4" mx="auto">
      <FormControl
        w={{ base: '300px', md: '700px', lg: '768px' }}
        display="flex"
        m="10px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        id="email"
        isRequired
      >
        <FormLabel fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Email
        </FormLabel>
        <Input
          focusBorderColor="teal.600"
          fontSize={{ base: '15px', md: '20px', lg: '25px' }}
          type="email"
          name="email"
          placeholder="Enter email"
          autoComplete="off"
        />
      </FormControl>
      <FormControl
        w={{ base: '300px', md: '700px', lg: '768px' }}
        display="flex"
        m="10px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt="10px"
        id="password"
        isRequired
      >
        <FormLabel fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Password
        </FormLabel>
        <Input
          focusBorderColor="teal.600"
          fontSize={{ base: '15px', md: '20px', lg: '25px' }}
          type="password"
          name="password"
          placeholder="Enter password"
          autoComplete="off"
        />
      </FormControl>
      <Button
        mt="20px"
        bg="teal.400"
        color="white"
        borderRadius="10px"
        _hover={{
          bgColor: 'teal.500',
          color: 'white',
          transform: 'scale(1.1)',
          border: '1px solid white',
        }}
        ml={{ base: '110px', md: '300px', lg: '330px' }}
        type="submit"
      >
        Log In
      </Button>
    </Box>
  );
};
