import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const ContactsView = () => (
  <section>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </section>
);

export default ContactsView;