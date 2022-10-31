import s from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ handleChange, filter }) => (
  <label className={s.label}>
    Find contcts by name
    <input
      className={s.input}
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  </label>
);
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
