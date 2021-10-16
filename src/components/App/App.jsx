// import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import css from './App.module.css';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook <RiContactsBook2Fill className={css.icon} />
      </h1>
      <ContactForm />

      <Filter />
      <h2 className={css.title}>
        Contacts
        <IoMdContacts className={css.icon} />
      </h2>
      <ContactList />
    </div>
  );
};

export default App;
