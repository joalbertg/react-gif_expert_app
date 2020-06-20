import React, {useState} from 'react';

const AddCategory = () => {
  const [value, setValue] = useState('');
  const handleAdd = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Submit: ' + value);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleAdd}
        placeholder='Search here...'
      />
    </form>
  );
}

export default AddCategory;

