import PropTypes from 'prop-types';
import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getFiltered } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Filter = () => {
  //вариант получить filtered без redux/contacts/conatcts-selectors
  // const filtered = useSelector(({ phonebook }) => phonebook.filtered);
  const filtered = useSelector(getFiltered);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <h2 className={css.title}>Search by name</h2>

      <input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={filtered}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        className={css.input}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

// const mapStateToProps = ({ phonebook }) => {
//   return {
//     filtered: phonebook.filtered,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     changeFilter: e => dispatch(changeFilter(e.currentTarget.value)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
