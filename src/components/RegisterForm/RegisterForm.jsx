import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { Form } from 'react-router-dom';

function RegisterForm() {
  return (
    <Container backgroundImage="url('./components/images/phonebook.jpg')">
      <Form>
        <Text fontSize={30}> Create a new Phonebook account</Text>
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
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterForm;
