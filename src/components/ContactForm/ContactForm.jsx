import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
   
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number.');
      return;
    }

    this.props.onSubmit({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.contact_form} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input  className={css.form_name} type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
        </label>
        <label>
          Number:
          <input type="tel" name="number" value={this.state.number} onChange={this.handleChange} required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
