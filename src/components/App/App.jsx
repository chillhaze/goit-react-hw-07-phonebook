import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { useGetAllContactsQuery } from 'redux/contacts/contacts-slice';
import Loader from 'react-loader-spinner';
import { Container, Title, SubTitle, LoaderWrapper } from './App.styled';

const App = () => {
  const { data, error, isFetching } = useGetAllContactsQuery('');
  return (
    <>
      {error && <Title>{error.status} Not Found</Title>}
      {data && !isFetching ? (
        <Container>
          <Title>
            Phonebook <RiContactsBook2Fill style={{ marginLeft: '3' }} />
          </Title>
          <ContactForm />
          <Filter />
          <SubTitle>
            Contacts
            <IoMdContacts style={{ marginLeft: '3' }} />
          </SubTitle>
          <ContactList />
        </Container>
      ) : (
        <LoaderWrapper>
          <Loader type="TailSpin" color="teal" height={80} width={80} />
        </LoaderWrapper>
      )}
    </>
  );
};

export default App;
