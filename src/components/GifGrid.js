//import React, {useState, useEffect} from 'react';
import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';

//import GifGridItem from './GifGridItem';
//import { getGifs } from '../helpers';

const GifGrid = ({category}) => {
  //const [gifs, setGifs] = useState([]);

  const {loading} = useFetchGifs();

  //useEffect(() => {
  //  getGifs(category)
  //    .then(setGifs)
  //}, [category]);

  return(
    <div className="card-grid">
      <h3>{category}</h3>
      {
        loading ?
          'loading...'
        :
          'show'
      }
      {/*
        gifs.map(gif => (
          <GifGridItem
            key={gif.id}
            {...gif}
          />)
        )
      */}
    </div>
  );
}

export default GifGrid;

