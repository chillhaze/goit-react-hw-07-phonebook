import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

export const changeFilter = createAction('contacts/filtered');

// Code without RTK-----------------------------------
//---------------------------
//async actions
//  Pending
// export const fetchContactsRequest = createAction(
//   'contacts/fetchContactsRequest',
// );
//  Fulfilled
// export const fetchContactsSuccess = createAction(
//   'contacts/fetchContactsSuccess',
// );
//  Rejected
// export const fetchContactsError = createAction('contacts/fetchContactsError');
//если использовать createAsyncThunk из React-Toolkit
//то async actions будут создаваться автоматически, объявлять их не нужно
//---------------------------

// export const addContact = createAction(
//   'contacts/addContact',
//   (name, number) => {
//     return {
//       payload: {
//         id: uuidv4(),
//         name: name,
//         number: number,
//       },
//     };
//   },
// );

// export const deleteContact = createAction('contacts/delete');
// export const changeFilter = createAction('contacts/filtered');

//-----------no react-toolkit actions version
// export const addContact = (name, number) => ({
//   type: actions.ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   },
// });

// export const deleteContact = id => ({
//   type: actions.DELETE_CONTACT,
//   payload: id,
// });

// export const changeFilter = value => ({
//   type: actions.FILTERED,
//   payload: value,
// });
