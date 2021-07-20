import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';

import { addContact } from '..//..//redux/contacts/contacts-operations';
import { getContacts as getContactsSelector } from '../../redux/contacts/contacts-selectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = (newContact) => {
    if (this.props.contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    // newContact.id = uuidv4();
    this.props.onAddContact(newContact);

    this.setState({ name: '', number: '' });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          this.addContact({ ...this.state });
        }}
      >
        <div className="form-container">
          <label className="form-label">
            Name
            <input
              onChange={this.changeHandler}
              value={this.state.name}
              className="form-input"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className="form-label">
            Number
            <input
              onChange={this.changeHandler}
              value={this.state.number}
              className="form-input"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className="form-submit" type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContactsSelector(state),
});

// const mapStateToProps = ({ contacts: { items } }) => ({
//   contacts: items,
// });

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(addContact(contact)),
});

ContactForm.propTypes = { onAddContact: PropTypes.func };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
