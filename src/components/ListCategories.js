import React from 'react';

import GifGrid from './GifGrid';

const ListCategories = ({categories}) => {
  return(
    <>
      { categories ?
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        :
        <h3>No categories to display.</h3>
      }
    </>
  );
}

export default ListCategories;

