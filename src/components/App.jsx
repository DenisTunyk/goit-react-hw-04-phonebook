 import { nanoid } from 'nanoid'
import { Component } from "react";
import "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import {Filter} from "./Filter/Filter"


export class App extends Component { 

  state = {
    contacts: [],
    filter: ''
  }

  formSubmitHandler = (data) => {
    
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }
    
    const isSet = this.state.contacts.find(item => item.name.toLowerCase() === data.name.toLowerCase());

    if (!isSet) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts]
      }))
    } else {
      alert(`${ data.name } is already is contact`)
    }
  }

  filerContacts = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }))
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts:  parsedContacts})
    }
  }


  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  render() {
    const { contacts, filter } = this.state;
    const visibleContact = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div style={{ padding: '10px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={ this.formSubmitHandler } />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={ this.filerContacts } />
        <ContactList options={visibleContact} onDelete={ this.deleteContact } />
      </div>
    )
  }
}

