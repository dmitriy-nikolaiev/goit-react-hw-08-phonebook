import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

import ContactListItem from '../ContactListItem';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    // const { items, filter } = this.props;
    const { items } = this.props;

    return this.props.loading ? (
      <div>Loading...</div>
    ) : (
      <ul className="contact-list">
        {items
          // .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))
          .map((contact) => {
            return <ContactListItem key={contact.id} {...contact} />;
          })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: contactsSelectors.getFilteredContacts(state),
    loading: contactsSelectors.getLoading(state),
    // filter: contactsSelectors.getFilter(state),
  };
};

// const mapStateToProps = (state) => {
//   const { items, filter } = state.contacts;
//   return { items, filter };
// };

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

ContactList.defaultProps = {
  filter: '',
};

ContactList.propTypes = {
  filter: PropTypes.string,
  items: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
