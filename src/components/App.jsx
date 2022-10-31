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

  componentDidMount() {
    const contact = localStorage.getItem('contacts')
    const contactParse = JSON.parse(contact);
    if (contactParse) {
      this.setState({contacts: contactParse})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

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
    const filterName = filter.trim().toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(filterName));
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
