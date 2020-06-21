import React, {useState, useEffect} from 'react';

import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
  const [gifs, setGifs] = useState([]);
  const getGifs = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=superman&limit=10&api_key=puAUaxA9dbDZKmVE07fozbaeKx6D9oT7';
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(gif => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
      }
    });

    setGifs(currentGifs => [...currentGifs, ...gifs]);
  }

  useEffect(() => {
    getGifs();
  }, []);

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

