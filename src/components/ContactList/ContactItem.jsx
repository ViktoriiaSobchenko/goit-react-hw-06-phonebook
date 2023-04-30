import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MdPermContactCalendar } from 'react-icons/md';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));
  return (
    <>
      <MdPermContactCalendar />
      <div className={css.wrapper}>
        <p className={css.text}>{name}:</p>
        <p className={css.text}>{number}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        id={id}
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
