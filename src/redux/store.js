import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducer';

// const myMiddleware = (store) => (next) => (action) => {
//   console.log(action, 'action My middleware');

//   next(action);
// };

// const middleware = [...getDefaultMiddleware(), myMiddleware];

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
