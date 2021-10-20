import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import Loader from 'react-loader-spinner';
import { useDeleteContactMutation } from 'redux/contacts/contacts-slice';
import { ListItem, Name, Number, BtnDelete } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onClick, deleting }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ListItem>
      <Name>
        <IoIosContact style={{ paddingTop: '2', marginRight: '5' }} />
        {name}:
      </Name>
      <Number>
        <AiFillPhone style={{ paddingTop: '2', marginRight: '5' }} />
        {number}
      </Number>
      <BtnDelete type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? (
          <Loader type="TailSpin" color="teal" height={16} width={16} />
        ) : (
          <FaTrashAlt style={{ width: '15' }} />
        )}
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
