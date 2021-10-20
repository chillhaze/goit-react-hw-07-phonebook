import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const initinalFilterState = '';
export const filteredReducer = createReducer(initinalFilterState, {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// Code without RTK-----------------------------------
// const contactsReducer = createReducer(initialContactsState, {
//   [actions.fetchContactsSuccess]: (_, { payload }) => payload,
//   //вариант с createAsyncThunk
//   // [fetchContacts.fulfilled]: (_, { payload }) => payload,

//   [actions.addContact]: (state, { payload }) => {
//     if (state.find(item => item.name === payload.name)) {
//       alert(`${payload.name + ' is already in contacts'}`);
//       return state;
//     }
//     return [...state, payload];
//   },

//   [actions.deleteContact]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const loadingReducer = createReducer(false, {
//   [actions.fetchContactsRequest]: () => true,
//   [actions.fetchContactsSuccess]: () => false,
//   [actions.fetchContactsError]: () => false,
//   //вариант с createAsyncThunk
//   // [fetchContacts.pending]: () => true,
//   // [fetchContacts.fulfilled]: () => false,
//   // [fetchContacts.rejected]: () => false,
// });

// const errorReducer = createReducer(null, {
//   [actions.fetchContactsError]: (_, { payload }) => payload,
//   //сброс ошибки в дефолтное состояние
//   [actions.fetchContactsRequest]: () => null,
//   //вариант с createAsyncThunk
//   // [fetchContacts.rejected]: (_, { payload }) => payload,
//   // //сброс ошибки в дефолтное состояние
//   // [fetchContacts.pending]: () => null,
// });

// const initinalFilterState = '';
// const filteredReducer = createReducer(initinalFilterState, {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// export const phoneBookReducer = combineReducers({
//   contacts: contactsReducer,
//   isLoading: loadingReducer,
//   error: errorReducer,
//   filtered: filteredReducer,
// });
