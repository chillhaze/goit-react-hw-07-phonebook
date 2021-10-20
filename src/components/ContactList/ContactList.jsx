import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFiltered } from 'redux/contacts/contacts-selectors';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contacts-slice';
import { Container, List } from './ContactList.styled';

const ContactList = () => {
  const { data, isFetching } = useGetAllContactsQuery('');
  const [deleteContact] = useDeleteContactMutation();

  const filtered = useSelector(getFiltered);

  const filteredContacts = data.filter(item =>
    item.name.toLowerCase().includes(filtered.toLowerCase()),
  );

  return (
    <Container>
      <List>
        {isFetching && (
          <Loader type="BallTriangle" color="teal" height={80} width={80} />
        )}
        {data &&
          filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteBtnPush={deleteContact}
              />
            );
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
