import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';

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

export default GifGrid;

