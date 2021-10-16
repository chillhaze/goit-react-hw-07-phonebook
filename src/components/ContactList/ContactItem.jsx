import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';

export const ContactItem = ({ id, name, number, onDeleteBtnPush }) => {
  return (
    <li className={css.listItem} key={id}>
      <p className={css.name}>
        <IoIosContact className={css.contactIcon} />
        {name}:
      </p>
      <p className={css.number}>
        <AiFillPhone className={css.contactIcon} />
        {number}
      </p>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => onDeleteBtnPush(id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteBtnPush: PropTypes.func,
};
