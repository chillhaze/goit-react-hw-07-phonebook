import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFiltered } from 'redux/contacts/contacts-selectors';
import { useGetAllContactsQuery } from 'redux/contacts/contacts-slice';
import { Container, List } from './ContactList.styled';

const ContactList = () => {
  const { data } = useGetAllContactsQuery('');

  const filtered = useSelector(getFiltered);

  const filteredContacts = data.filter(item =>
    item.name.toLowerCase().includes(filtered.toLowerCase()),
  );

  return (
    <Container>
      <List>
        {data &&
          filteredContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
      </List>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnPush: PropTypes.func,
};

export default ContactList;
