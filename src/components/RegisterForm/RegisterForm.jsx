import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Button, FormControl, FormLabel, Box } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        id="name"
        isRequired
      >
        <FormLabel fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Username
        </FormLabel>
        <Input
          fontSize={{ base: '15px', md: '20px', lg: '25px' }}
          type="text"
          name="name"
          focusBorderColor="teal.600"
          placeholder="Enter user name"
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
        id="email"
        isRequired
      >
        <FormLabel fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Email
        </FormLabel>
        <Input
          type="email"
          name="email"
          focusBorderColor="teal.600"
          fontSize={{ base: '15px', md: '20px', lg: '25px' }}
          placeholder="Enter email"
          autoComplete="off"
        />
      </FormControl>
      <FormControl
        w={{ base: '300px', md: '700px', lg: '768px' }}
        m="10px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="10px"
        id="password"
        isRequired
      >
        <FormLabel fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Password
        </FormLabel>
        <Input
          fontSize={{ base: '15px', md: '20px', lg: '25px' }}
          type="password"
          name="password"
          focusBorderColor="teal.600"
          placeholder="Enter password"
          autoComplete="off"
        />
      </FormControl>

      <Button
        size={{ base: 'md', lg: 'lg' }}
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
        ml={{ base: '110px', md: '300px', lg: '360px' }}
        type="submit"
      >
        Register
      </Button>
    </Box>
  );
};
