import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
  const {data: gifs, loading} = useFetchGifs(category);

  return(
    <div className="card-grid">
      <h3>{category}</h3>
      { loading && <p>Loading</p> }
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

export default GifGrid;

