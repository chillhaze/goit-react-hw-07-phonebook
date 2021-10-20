// Code without RTK-----------------------------------
// import * as actions from './contacts-actions';
// import * as contactsAPI from 'services/contacts-api';
// // import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsRequest());

//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

// вариант с createAsyncThunk (actions создаются под капотом, автоматически)
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContactsStatus',
//   async () => {
//     const contacts = await contactsAPI.fetchContacts();
//     return contacts;
//   },
// );
