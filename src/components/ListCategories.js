import React from 'react';
import PropTypes from 'prop-types';

import GifGrid from './GifGrid';

const ListCategories = ({categories}) => {
  return(
    <>
      { categories && categories.length !== 0 ?
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        :
        <h3>There are no categories to display.</h3>
      }
    </>
  );
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
}

ListCategories.defaultProps = {
  categories: []
}

export default ListCategories;

