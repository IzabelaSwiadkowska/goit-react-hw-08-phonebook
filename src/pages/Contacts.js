import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactForm from 'components/ContactForm/ContactForm';
import { getIsLoading } from 'redux/contacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import Filter from 'components/Filter/Filter';
import { Box } from '@chakra-ui/react';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        <Box>{isLoading && 'Request in progress...'}</Box>
        <Filter />
        <ContactList />
      </HelmetProvider>
    </Box>
  );
};
export default Contacts;
