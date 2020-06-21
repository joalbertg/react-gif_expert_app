import React, {useState, useEffect} from 'react';

import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers';

const GifGrid = ({category}) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(category)
      .then(setGifs)
  }, [category]);

  return(
    <div className="card-grid">
      <h3>{category}</h3>
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

