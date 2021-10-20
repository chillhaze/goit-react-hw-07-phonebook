import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import { ListItem, Name, Number, BtnDelete } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteBtnPush }) => {
  return (
    <ListItem key={id}>
      <Name>
        <IoIosContact style={{ paddingTop: '2', marginRight: '5' }} />
        {name}:
      </Name>
      <Number>
        <AiFillPhone style={{ paddingTop: '2', marginRight: '5' }} />
        {number}
      </Number>
      <BtnDelete type="button" onClick={() => onDeleteBtnPush(id)}>
        <FaTrashAlt style={{ width: '15' }} />
      </BtnDelete>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteBtnPush: PropTypes.func,
};
