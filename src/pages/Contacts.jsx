import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { getIsLoading, getError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import styles from './ContactForm/ContactForm.module.css';

export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <div className={styles.wrapper}>
      {error ? (
        <div> Something went wrong .... </div>
      ) : (
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          {isLoading && <div> Please wait a second...</div>}
          <ContactList />
        </div>
      )}
    </div>
  );
};
