import s from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, removeContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>
          {name}:
          <a className={s.link} href={`tel:${number}`}>
            {number}
          </a>
        </p>
        <button onClick={() => removeContact(id)} className={s.delete}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default ContactList;
