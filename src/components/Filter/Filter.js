import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '..//..//redux/contacts/contacts-selectors';

const Filter = ({ filter, onChange }) => (
  <label className="filter-label">
    Find contacts by name:
    <input className="filter-input" name="name" value={filter} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});
// const mapStateToProps = ({ contacts: { filter } }) => ({ filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
