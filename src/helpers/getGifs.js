const getGifs = async category => {
  const base = 'https://api.giphy.com/v1/gifs';
  const api_key = 'puAUaxA9dbDZKmVE07fozbaeKx6D9oT7';
  const url = `${base}/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }
  });

  return gifs;
}

export default getGifs;

