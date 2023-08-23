import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contacts/operations';
import { getContacts, getFilter, getIsLoading } from 'redux/contacts/selectors';
import { Box, Button, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(delContact(id));

  return (
    <Box display="flex" justifyContent="center">
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Box w={{ base: '280px', md: '600px' }}>
          {visibleContacts.length > 0 ? (
            visibleContacts.map((contact, id) => (
              <Box
                key={id}
                p="10px"
                fontSize={{ base: '18px', md: '25px', lg: '32px' }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                color="white"
              >
                {contact.name}: {contact.number}
                <Button
                  size={{ base: 'sm', sm: 'sm', lg: 'lg' }}
                  bgColor="teal.400"
                  type="button"
                  ml="20px"
                  onClick={() => handleDelete(contact.id)}
                  _hover={{
                    bgColor: 'teal.500',
                    color: 'white',
                    transform: 'scale(1.1)',
                    border: '1px solid white',
                  }}
                >
                  {<DeleteIcon color="white" />}
                </Button>
              </Box>
            ))
          ) : (
            <Text
              color="white"
              display="flex"
              justifyContent="center"
              fontSize={{ base: '18px', md: '25px', lg: '32px' }}
            >
              No contacts found
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};
export default ContactList;
