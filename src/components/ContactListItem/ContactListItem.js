import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from '../../redux/contacts/contacts-operations';

const ContactListItem = ({ id, name, number, deleteContact }) => (
  <li className="contact-list-item">
    <span className="contact-name">{name}:</span>
    <span className="contact-number"> {number}</span>
    <button className="contact-delete-btn" onClick={() => deleteContact(id)}>
      Delete
    </button>
  </li>
);

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
  };
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(ContactListItem);
