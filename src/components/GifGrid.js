import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
  const {data: gifs, loading} = useFetchGifs(category);

  return(
    <div className="card-grid">
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      { loading && <p className="loading animate__animated animate__flash">Loading</p> }
      {
        gifs.map(gif => (
          <GifGridItem
            key={gif.id}
            {...gif}
          />)
        )
      }
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid;

