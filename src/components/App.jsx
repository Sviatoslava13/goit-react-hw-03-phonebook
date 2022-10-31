import s from './App.module.css';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleChange = e => {
    this.setState({ filter: e.currentTarget.value});
  };

  addContact = newContact => {
    this.state.contacts.some(contact => contact.name.trim().toLowerCase() === newContact.name.trim().toLowerCase())
      ? alert(`${newContact.name} is already in contacts `)
      : this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    const filtere = filter.trim().toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(filtere));
  };

  render() {
    const filterContact = this.filterContact();
    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={s.title}>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        {filterContact.length > 0 && (
          <ContactList
            contacts={filterContact}
            removeContact={this.removeContact}
          />
        )}
      </div>
    );
  }
}
