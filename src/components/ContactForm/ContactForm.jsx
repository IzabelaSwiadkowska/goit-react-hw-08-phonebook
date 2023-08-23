import React from 'react';
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };

    const enterContacts = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === name.toLowerCase().trim() ||
        contact.number.trim() === number.trim()
    );
    enterContacts
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));

    setName('');
    setNumber('');
  };

  return (
    <Box display="flex" justifyContent="center">
      <FormControl
        as="form"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w={{ base: '300px', md: '700px', lg: '768px' }}
        m={4}
        onSubmit={handleSubmit}
      >
        <FormLabel fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Name
          <Input
            mb="4"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={handleChangeName}
            focusBorderColor="teal.600"
            fontSize={{ base: '15px', md: '20px', lg: '25px' }}
            w={{ base: '300px', md: '700px', lg: '768px' }}
          />
        </FormLabel>
        <FormLabel fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
          Number
          <Input
            mb="4"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={handleChangeNumber}
            focusBorderColor="teal.600"
            fontSize={{ base: '15px', md: '20px', lg: '25px' }}
            w={{ base: '300px', md: '700px', lg: '768px' }}
          />
        </FormLabel>
        <Button
          type="submit"
          size={{ base: 'md', lg: 'lg' }}
          bg="teal.400"
          color="white"
          borderRadius="10px"
          _hover={{
            bgColor: 'teal.500',
            color: 'white',
            transform: 'scale(1.1)',
            border: '1px solid white',
          }}
        >
          Add contact
        </Button>
      </FormControl>
    </Box>
  );
};
export default ContactForm;
