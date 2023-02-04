import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      return parsedContacts;
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  const formSubmitHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const isSet = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (!isSet) {
      setContacts(prevState => [contact, ...prevState]);
    } else {
      alert(`${name} is already is contact`);
    }
  };

  const filerContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  const visibleContact = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div style={{ padding: '10px' }}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={filerContacts} />
      <ContactList options={visibleContact} onDelete={deleteContact} />
    </div>
  );
};
