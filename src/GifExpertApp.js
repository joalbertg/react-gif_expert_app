import React, {useState} from 'react';

import {
  AddCategory,
  ListCategories
} from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

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

export default GifExpertApp;

