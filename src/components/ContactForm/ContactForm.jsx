import React, { Component } from 'react';
import Forma from './Forma';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state, id: nanoid() });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Forma
          name={this.state.name}
          number={this.state.number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;
