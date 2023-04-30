import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const inputValue = contacts.find(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );
    inputValue
      ? alert(inputValue.name + `is already in contacts`)
      : dispatch(
          addContact(form.elements.name.value, form.elements.number.value)
        );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name" className={css.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        className={css.input}
        pattern="^[a-zA-Zа-яА-Я]+(([ ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="number" className={css.label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        className={css.input}
        pattern="\+?\d{1,4}?[ .\s]?\(?\d{1,3}?\)?[ .\s]?\d{1,4}[ .\s]?\d{1,4}[ .\s]?\d{1,9}"
        title="Phone number must be digits, can contain spaces and can start with +. For example +38 099 356 32 22, 456 15 00"
        required
      />

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
