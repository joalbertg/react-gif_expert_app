import React, {useState} from 'react';

import {
  AddCategory,
  ListCategories
} from './components';

const GifExpertApp = ({ defaultCategories }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory
        setCategories={setCategories}
      />
      <hr />
      <ListCategories categories={categories} />
    </>
  );
}

GifExpertApp.defaultProps = {
  defaultCategories: []
}

export default GifExpertApp;

