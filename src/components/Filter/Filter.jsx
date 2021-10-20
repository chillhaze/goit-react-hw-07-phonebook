import PropTypes from 'prop-types';
import { Container, Title, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltered } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';

const Filter = () => {
  const filtered = useSelector(getFiltered);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Search by name</Title>

      <Input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={filtered}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Container>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
