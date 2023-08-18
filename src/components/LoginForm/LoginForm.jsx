import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';

function LoginForm() {
  return (
    <Container>
      <Form>
        <Text fontSize={30}> Login to your Phonebook acount</Text>
        <FormControl>
          <FormLabel fontSize={20} p="10px" mb="10px">
            Email
          </FormLabel>
          <Input
            placeholder="enter your email"
            focusBorderColor="teal.400"
            type="text"
            name="name"
          />

          <FormLabel fontSize={20} p="10px" mb="10px">
            Password
          </FormLabel>
          <Input
            placeholder="enter your password"
            focusBorderColor="teal.400"
            type="text"
            name="name"
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
          Log In
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
