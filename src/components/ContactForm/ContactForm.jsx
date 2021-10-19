import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // console.log('ContactForm contacts: ', contacts);
  // console.log('ContactForm onSubmit: ', addContact);

  const dispatch = useDispatch();

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleFormChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(addContact(name, number));
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleOnSubmit}>
        <label className={css.label} htmlFor={nameInputId}>
          Name
          <input
            type="text"
            placeholder="Mark Zuckerberg"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleFormChange}
            className={css.input}
            id={nameInputId}
          />
        </label>

        <label className={css.label} htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            placeholder="xxx-xx-xx"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleFormChange}
            className={css.input}
            id={numberInputId}
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array,
  onSubmit: PropTypes.func,
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addContact: (name, number) => dispatch(addContact(name, number)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactForm);
export default ContactForm;
