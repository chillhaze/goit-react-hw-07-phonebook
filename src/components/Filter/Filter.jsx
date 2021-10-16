import PropTypes from 'prop-types';
import css from './Filter.module.css';

import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Filter = ({ filtered, changeFilter }) => {
  // console.log('filtered: ', [filtered]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Search by name</h2>

      <input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={filtered}
        onChange={changeFilter}
        className={css.input}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const mapStateToProps = ({ phonebook }) => {
  return {
    filtered: phonebook.filtered,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: e => dispatch(changeFilter(e.currentTarget.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
