import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/actions';

function RegisterForm() {
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel fontSize={20} p="10px" mb="10px">
            Username
          </FormLabel>
          <Input
            placeholder="enter your name"
            focusBorderColor="teal.400"
            type="text"
            name="name"
          />
          <FormLabel fontSize={20} p="10px" mb="10px">
            Email
          </FormLabel>
          <Input
            placeholder="enter your email"
            focusBorderColor="teal.400"
            type="text"
            name="email"
          />

          <FormLabel fontSize={20} p="10px" mb="10px">
            Password
          </FormLabel>
          <Input
            placeholder="enter your password"
            focusBorderColor="teal.400"
            type="text"
            name="password"
          />
        </FormControl>
        <Button
          mt="20px"
          bgColor={'teal.100'}
          _hover={{
            background: 'teal.300',
            color: 'white',
          }}
          type="submit"
        >
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterForm;
