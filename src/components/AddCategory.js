import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [value, setValue] = useState('');
  const handleAdd = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    if(value.trim().length > 0) {
      setCategories(categories => [...categories, value]);
      setValue('');
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleAdd}
        placeholder='Add here...'
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory;

