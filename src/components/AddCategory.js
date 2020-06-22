import React, {useState} from 'react';
import PropTypes from 'prop-types';

// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddCategory = ({setCategories}) => {
  const [value, setValue] = useState('');
  const handleAdd = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    if(value.trim().length > 0) {
      setCategories(categories => [value, ...categories]);
      setValue('');
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <section id="search">
        <label>
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <input
          type="text"
          value={value}
          onChange={handleAdd}
          placeholder='Search here...'
        />
      </section>
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;

