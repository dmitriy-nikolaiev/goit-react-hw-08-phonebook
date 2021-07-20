import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

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
  changeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});
// const items = createReducer(initialState, {
//   [actions.addContact]: (state, { payload }) => [...state, payload],
//   [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
// });

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

//
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
