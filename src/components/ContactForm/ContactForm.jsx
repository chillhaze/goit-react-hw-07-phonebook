import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Form, Label, Input, Btn } from './ContactForm.styled';
import {
  useCreateContactMutation,
  useGetAllContactsQuery,
} from 'redux/contacts/contacts-slice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [createContact] = useCreateContactMutation();
  const { data } = useGetAllContactsQuery('');

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

    const newContact = {
      name: name,
      number: number,
    };

    if (data.find(item => item.name === name)) {
      alert(`${name + ' is already in contacts'}`);
      return;
    }
    createContact(newContact);
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            placeholder="Mark Zuckerberg"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleFormChange}
            id={nameInputId}
          />
        </Label>

        <Label htmlFor={numberInputId}>
          Number
          <Input
            type="tel"
            placeholder="xxx-xx-xx"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleFormChange}
            id={numberInputId}
          />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </Form>
    </Container>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array,
  onSubmit: PropTypes.func,
};

export default ContactForm;
