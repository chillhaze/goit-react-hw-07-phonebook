import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { useGetAllContactsQuery } from 'redux/contacts/contacts-slice';
import { Container, Title } from './App.styled';

const App = () => {
  const { data, error, isFetching } = useGetAllContactsQuery('');
  return (
    <>
      {error && <Title>{error.status} Not Found</Title>}
      {data && !isFetching && (
        <Container>
          <Title>
            Phonebook <RiContactsBook2Fill style={{ marginLeft: '3' }} />
          </Title>
          <ContactForm />
          <Filter />
          <Title>
            Contacts
            <IoMdContacts style={{ marginLeft: '3' }} />
          </Title>
          <ContactList />
        </Container>
      )}
    </>
  );
};

export default App;
