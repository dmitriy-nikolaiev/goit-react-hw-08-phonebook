import axios from 'axios';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch((error) => dispatch(fetchContactsError(error)));
};

export const addContact = (newContact) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', newContact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }

  // axios
  //   .post('/contacts', newContact)
  //   .then(({ data }) => dispatch(addContactSuccess(data)))
  //   .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }

  // axios
  //   .delete(`/contacts/${Id}`)
  //   .then(() => dispatch(deleteContactSuccess(Id)))
  //   .catch((error) => dispatch(deleteContactError(error)));
};

// export default  { fetchContacts, addContact, deleteContact }
