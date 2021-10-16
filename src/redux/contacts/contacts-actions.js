import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: uuidv4(),
        name: name,
        number: number,
      },
    };
  },
);
// console.log(addContact('test', '000000'));
export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/filtered');

//-----------no react-toolkit actions versin
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
