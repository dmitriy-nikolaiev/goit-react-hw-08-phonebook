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
  // requestError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchContacts = () => async (dispatch) => {
  // dispatch(requestError(''));
  dispatch(fetchContactsError(''));
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.toString()));
    // dispatch(requestError(error.toString()));
  }
};

export const addContact = (newContact) => async (dispatch) => {
  dispatch(addContactError(''));
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', newContact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.toString()));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactError(''));
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.toString()));
  }
};

// export default  { fetchContacts, addContact, deleteContact }
